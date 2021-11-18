"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.expandWithPaths = exports.expand = exports.convertPath = exports.modifyBulk = exports.modify = exports.isMatch = exports.match = exports.not = exports.combineNone = exports.combineAll = exports.combineAny = exports.combineMatchers = exports.search = void 0;
var ramda_1 = require("ramda");
var jmespath_1 = __importDefault(require("jmespath"));
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
exports.search = (0, ramda_1.curry)(function (path, data) { return jmespath_1["default"].search(data, path); });
var isAlreadyWrapped = function (str) {
    if (str.charAt(0) !== '(' || str.charAt(str.length - 1) !== ')') {
        return false;
    }
    var parens = 0;
    for (var i = 1; i < str.length - 2; ++i) {
        if (str.charAt(i) === '(') {
            ++parens;
        }
        if (str.charAt(i) === ')') {
            --parens;
            if (parens < 0) {
                return false;
            }
        }
    }
    return true;
};
var hasAndOrOr = function (str) { return str.indexOf('&&') !== -1 || str.indexOf('||') !== -1; };
var wrapInParens = function (str) {
    if (!hasAndOrOr(str) || isAlreadyWrapped(str)) {
        return str;
    }
    return "(" + str + ")";
};
exports.combineMatchers = (0, ramda_1.curry)(function (joinStr, matchers) { return (0, ramda_1.pipe)((0, ramda_1.map)(wrapInParens), (0, ramda_1.join)(joinStr))(matchers); });
/**
 * Takes a set of JMESPath matchers and combines together with a `||`. The result
 * is that any of the provided matchers can match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
exports.combineAny = (0, exports.combineMatchers)(' || ');
/**
 * Takes a set of JMESPath matchers and combines together with a `&&`. The result
 * is that all of the provided matchers must match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
exports.combineAll = (0, exports.combineMatchers)(' && ');
/**
 * Takes a set of JMESPath matchers and combines together with a `&&`. The result
 * is that all of the provided matchers must match for the resulting matcher to evaluate true
 *
 * @function
 * @param {string[]} matchers valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
var combineNone = function (matchers) { return "!(" + (0, exports.combineAny)(matchers) + ")"; };
exports.combineNone = combineNone;
/**
 * Takes a matcher and returns the opposite (`!`) matcher.
 *
 * @function
 * @param {string} matcher valid JMESPath comparator expression
 * @returns {string} joined matcher
 */
var not = function (matcher) { return "!" + wrapInParens(matcher); };
exports.not = not;
/**
 * Performs a JMESPath filter using the provided expression.
 *
 * @function
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Data to search
 * @returns {*}
 */
exports.match = (0, ramda_1.curry)(function (matcher, data) { return jmespath_1["default"].search(data, "[?" + matcher + "]"); });
/**
 * Tests to see if the specified data matches the specified JMESPath filter.
 *
 * @function
 * @param {string} matcher A valid JMESPath comparator expression
 * @param {object[]} data Item to match against
 * @returns {*}
 */
exports.isMatch = (0, ramda_1.curry)(function (matcher, data) { return (0, exports.match)(matcher, [data]).length > 0; });
var processMods = function (mods, data) { return (typeof mods === 'function'
    ? mods(data)
    : Array.isArray(mods)
        ? (0, ramda_1.map)(function (v) { return processMods(v, data); }, mods)
        : typeof mods === 'object'
            ? (0, ramda_1.mapObjIndexed)(function (v) { return processMods(v, data); }, mods)
            : mods); };
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
exports.modify = (0, ramda_1.curry)(function (modifications, matcher, data) { return (0, ramda_1.map)(function (item) { return ((0, exports.isMatch)(matcher, item) ? (0, ramda_1.mergeDeepLeft)(processMods(modifications, item), item) : item); })(data); });
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
exports.modifyBulk = (0, ramda_1.curry)(function (instructions, data) { return (0, ramda_1.map)(function (item) {
    var results = item;
    (0, ramda_1.forEach)(function (_a) {
        var matcher = _a.matcher, modifications = _a.modifications, mods = _a.mods;
        if ((0, exports.isMatch)(matcher, item)) {
            results = (0, ramda_1.mergeDeepLeft)(processMods(modifications || mods, item), results);
        }
    }, instructions);
    return results;
})(data); });
var IN_QUOTES_RX = /"(.*?)"/;
var PATH_RX = /(?<group>"[^"]*"|[^\n."]+)/g;
/**
 * Takes a path and coverts it to an array by splitting the periods.
 *
 * @function
 * @param {string} path A valid JMESPath
 * @returns {Array}
 */
var convertPath = function (path) { return (0, ramda_1.pipe)(function (pathIn) { return pathIn.match(PATH_RX); }, (0, ramda_1.map)(function (section) {
    var hasQuotes = section.match(IN_QUOTES_RX);
    return hasQuotes ? hasQuotes[1] : section;
}))(path); };
exports.convertPath = convertPath;
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
exports.expand = (0, ramda_1.pipe)((0, ramda_1.reject)(ramda_1.isNil), ramda_1.toPairs, (0, ramda_1.reduce)(function (acc, _a) {
    var path = _a[0], value = _a[1];
    return (0, ramda_1.mergeDeepLeft)((0, ramda_1.assocPath)((0, exports.convertPath)(path), value, {}), acc);
}, {}));
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
exports.expandWithPaths = (0, ramda_1.curry)(function (path, kvps) { return (0, ramda_1.pipe)(function (data) {
    var mapped = {};
    (0, ramda_1.forEachObjIndexed)(function (value, key) {
        var newKey = path[key] || key;
        mapped[newKey] = value;
    }, data);
    return mapped;
}, exports.expand)(kvps); });
