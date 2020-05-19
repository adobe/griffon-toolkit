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
import Ajv from 'ajv';

import aepMobile from '../schemas/aepMobile.json';
import event from '../schemas/event.json';
import annotation from '../schemas/annotation.json';
import genericPlaces from '../schemas/genericPlaces.json';
import poi from '../schemas/poi.json';

const ajv = new Ajv({
  schemas: [
    aepMobile,
    annotation,
    genericPlaces,
    poi,
    event
  ]
});

/**
 * Contains core functions for Griffon.
 *
 * @namespace kit
 */

/**
 * Performs a JMESPath lookup on the provided data.
 *
 * @function
 * @param {string} path A valid JMESPath
 * @param {*} data Data to search
 * @returns {*}
 */
const search = R.curry((path, data) => jmespath.search(data, path));

const combineMatchers = R.curry((joinStr, matchers) => R.pipe(
  R.map((matcher) => `(${matcher})`),
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
const combineAny = combineMatchers(' || ')

/**
 * Takes a set of JMESPath matchers and combines together with a `&&`. The result
 * is that all of the provided matchers must match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
const combineAll = combineMatchers(' && ')

/**
 * Takes a set of JMESPath matchers and combines together with a `&&`. The result
 * is that all of the provided matchers must match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
const combineNone = (matchers) => `!(${combineAny(matchers)})`;

/**
 * Takes a matcher and returns the opposite (`!`) matcher.
 *
 * @function
 * @param {string} matcher valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
const not = (matcher) => `!(${matcher})`;

/**
 * Performs a JMESPath filter using the provided expression.
 *
 * @function
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Data to search
 * @returns {*}
 */
const match = R.curry((matcher, data) => jmespath.search(data, `[?${matcher}]`));

/**
 * Tests to see if the specified data matches the specified JMESPath filter.
 *
 * @function
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Item to match against
 * @returns {*}
 */
const isMatch = R.curry((matcher, data) => match(matcher, [data]).length > 0);

const processMods = (modifications, data) => (typeof modifications === 'function') ?
  modifications(data) : modifications;

/**
 * Matches data from the event list and performs operations on the results. You can provide an object
 * that will be merged into the resulting data.
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
const modify = R.curry((modifications, matcher, data) => R.map(
  (item) => (isMatch(matcher, item) ? R.mergeDeepLeft(processMods(modifications, item), item) : item)
)(data));

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
 * @param {string} instructions { matcher, modifications }
 * @param {object[]} data Data to search
 * @see core.modify
 * @returns {*}
 */
const modifyBulk = R.curry((instructions, data) => R.map(
  (item) => {
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

/**
 * Takes a path and coverts it to an array by splitting the periods.
 *
 * @function
 * @param {string} path A valid JMESPath
 * @returns {Array}
 */
const convertPath = (path) => path.split('.');

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
const expand = R.pipe(
  R.reject(R.isNil),
  R.toPairs,
  R.reduce((acc, [path, value]) => R.assocPath(convertPath(path), value, acc), {})
);

/**
 * Takes the provided json schema and validates the provided data against it
 * using AJV.
 *
 * @function
 * @param {object} schema Json Schema
 * @param {object} data Data to test
 * @returns {Array}
 */
const validateSchema = R.curry((schema, data) => {
  try {
    return ajv.validate(schema, data);
  } catch (e) {
    return false;
  }
});

/**
 * Takes the provided json schema and returns any validation errors. Returns false if no errors.
 *
 * @function
 * @param {object} schema Json Schema
 * @param {object} data Data to test
 * @returns {Array}
 */
const schemaErrors = R.curry((schema, data) => {
  try {
    if (ajv.validate(schema, data)) { return false; }
    return ajv.errors;
  } catch (e) {
    return e;
  }
});

const { curry } = R;

export default {
  combineAll,
  combineAny,
  combineNone,
  convertPath,
  curry,
  isMatch,
  expand,
  match,
  modify,
  modifyBulk,
  not,
  schemaErrors,
  search,
  validateSchema
};
