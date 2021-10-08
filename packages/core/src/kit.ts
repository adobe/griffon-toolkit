/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as R from 'ramda';
import jmespath from 'jmespath';

/**
 * Contains core functions for Griffon.
 *
 * @namespace toolkit
 */

/**
 * Performs a JMESPath lookup on the provided data.
 *
 * @function
 * @param {string} path A valid JMESPath
 * @param {*} data Data to search
 * @returns {*}
 */
export const search = R.curry((path: string, data: any) => jmespath.search(data, path));

const isAlreadyWrapped = (str: string) => {
  if (str.charAt(0) !== '(' || str.charAt(str.length - 1) !== ')') { return false; }

  let parens = 0;
  for (let i = 1; i < str.length - 2; ++i) {
    if (str.charAt(i) === '(') { ++parens; }
    if (str.charAt(i) === ')') {
      --parens;
      if (parens < 0) { return false; }
    }
  }
  return true;
};

const hasAndOrOr = (str: string) => str.indexOf('&&') !== -1 || str.indexOf('||') !== -1;

const wrapInParens = (str: string) => {
  if (!hasAndOrOr(str) || isAlreadyWrapped(str)) { return str; }
  return `(${str})`;
};

export const combineMatchers = R.curry((joinStr, matchers) => R.pipe(
  R.map(wrapInParens),
  R.join(joinStr)
)(matchers));

/**
 * Takes a set of JMESPath matchers and combines together with a `||`. The result
 * is that any of the provided matchers can match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
export const combineAny = combineMatchers(' || ');

/**
 * Takes a set of JMESPath matchers and combines together with a `&&`. The result
 * is that all of the provided matchers must match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
export const combineAll = combineMatchers(' && ');

/**
 * Takes a set of JMESPath matchers and combines together with a `&&`. The result
 * is that all of the provided matchers must match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
export const combineNone = (matchers: string[]) => `!(${combineAny(matchers)})`;

/**
 * Takes a matcher and returns the opposite (`!`) matcher.
 *
 * @function
 * @param {string} matcher valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
export const not = (matcher: string) => `!${wrapInParens(matcher)}`;

/**
 * Performs a JMESPath filter using the provided expression.
 *
 * @function
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Data to search
 * @returns {*}
 */
export const match = R.curry((matcher: string, data: object[]) => jmespath.search(data, `[?${matcher}]`));

/**
 * Tests to see if the specified data matches the specified JMESPath filter.
 *
 * @function
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Item to match against
 * @returns {*}
 */
export const isMatch = R.curry((matcher: string, data: object): boolean => match(matcher, [data]).length > 0);

const processMods = (mods, data) => (
  typeof mods === 'function'
    ? mods(data)
    : Array.isArray(mods)
      ? R.map((v) => processMods(v, data), mods)
      : typeof mods === 'object'
        ? R.mapObjIndexed((v) => processMods(v, data), mods)
        : mods
);

/**
 * Matches data from the event list and performs operations on the results. You can provide an object
 * that will be merged into the resulting data.
 *
 * @example
 * // takes all objects and adds a red color
 * const makeRed = modify({ color: 'red' }, '*');
 *
 * const result = makeRed([{ color: 'yellow' }, { name: 'Joe' } ]);
 * // result is [{ color: 'red' }, { name: 'Joe', color: 'red' } ]
 *
 * @example
 * // can provide a modification function
 * const applyGender = modify((data) => {
 *  if (data.name === 'Joe') { return { gender: 'male' }; }
 *  return { gender: 'female' };
 * }, '*');
 *
 * const result = applyGender([{ name: 'Jill' }, { name: 'Joe' } ]);
 * // result is [{ color: 'red', gender: 'female' }, { name: 'Joe', gender: 'male' } ]
 *
 * @function
 * @param {object} modifications An object that gets merged with the result. Optionally can be a function that takes the matching data and returns and object
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Data to search
 * @see core.modifyBulk
 * @returns {*}
 */
export const modify = R.curry((modifications: object, matcher: string, data: object[]) => R.map(
  (item: object) => (isMatch(matcher, item) ? R.mergeDeepLeft(processMods(modifications, item), item) : item)
)(data));

interface ModifyBulkInstructions {
  matcher: string;
  modifications?: object;
  mods?: object;
}

/**
 * Performs a series of match and modify operations on the data. Takes an array
 * of `{ matcher, modifications }` and will perform each on the provided data.
 *
 * Note you can use `mods` as an alias for `modifications`.
 *
 * @example
 * // takes all objects and adds a red color
 * const instructions = [
 *   { matcher: "*", modification: { color: 'red' } }
 *   { matcher: "name=='Joe'", mods: { gender: 'male' } }
 * ];
 *
 * const result = bulkModify(instructions, [{ color: 'yellow' }, { name: 'Joe' } ]);
 * // result is [{ color: 'red' }, { name: 'Joe', color: 'red', gender: 'male' } ]
 *
 * @function
 * @param {ModifyBulkInstructions[]} instructions { matcher, modifications }
 * @param {object[]} data Data to search
 * @see core.modify
 * @returns {*}
 */
export const modifyBulk = R.curry((instructions: ModifyBulkInstructions[], data: any[]) => R.map(
  (item: any) => {
    let results = item;
    R.forEach(
      ({ matcher, modifications, mods }) => {
        if (isMatch(matcher, item)) {
          results = R.mergeDeepLeft(processMods(modifications || mods, item), results);
        }
      },
      instructions
    );
    return results;
  }
)(data));

const IN_QUOTES_RX = /"(.*?)"/;
const PATH_RX = /(?<group>"[^"]*"|[^\n."]+)/g;

/**
 * Takes a path and coverts it to an array by splitting the periods.
 *
 * @function
 * @param {string} path A valid JMESPath
 * @returns {Array}
 */

export const convertPath = (path: string) => R.pipe(
  (pathIn) => pathIn.match(PATH_RX),
  R.map((section: string) => {
    const hasQuotes = section.match(IN_QUOTES_RX);
    return hasQuotes ? hasQuotes[1] : section;
  })
)(path);

/**
 * Expands all the provided path/value pairs, converting
 * JMESPaths into actual object paths.
 *
 * @function
 * @param {object} kvps Flat object where keys are JMESPaths
 * @returns {object}
 * @example
 * import core from 'griffon-toolkit/core';
 *
 * // returns { size: 's' }
 * core.expand({ size: 's' });
 *
 * // returns { size: { width: 200, height: 300 } }
 * core.expand({ 'size.width': 200, 'size.height': 300 });
 * @see core.convertPath
 */
export const expand = R.pipe(
  R.toPairs,
  R.reject(R.isNil),
  R.reduce((acc, [path, value]) => R.mergeDeepLeft(
    R.assocPath(convertPath(path), value, {}),
    acc
  ), {})
);

/**
 * Expands with paths. Calls expand, but first will map the provided datas
 * keys using the provided path map.
 *
 * @function
 * @param {object} paths Flat object that maps keys to JMESPaths
 * @param {object} kvps Flat object where keys are JMESPaths or path keys
 * @returns {object}
 * @example
 * import core from 'griffon-toolkit/core';
 *
 * const path = {
 *   width: 'size.width',
 *   height: 'size.height'
 * };
 *
 * // returns { size: { width: 200, height: 300 } }
 * core.expandWithPath({ width: 200, height: 300 });
 * @see kit.expand
 */
export const expandWithPaths = R.curry((path, kvps) => R.pipe(
  (data: object) => {
    const mapped: Record<string, any> = {};
    R.forEachObjIndexed((value, key) => {
      const newKey = path[key] || key;
      mapped[newKey] = value;
    }, data);
    return mapped;
  },
  expand
)(kvps));
