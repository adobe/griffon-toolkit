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
exports.__esModule = true;
exports.filterToPath = exports.filterToHash = exports.filterFromHash = exports.filterData = void 0;
var ramda_1 = require("ramda");
var kit_1 = require("./kit");
/**
 * Contains utility functions for dealing with Griffon filters.
 *
 * @namespace filters
 */
var HASH_REGEX = /.*#filters=(.*)/;
/**
 * Extracts the filters from the provided url. Returns a filter object.
 *
 * @function
 * @param {string} url Url to decode filters from
 * @returns {object} Filter object
 */
var filterFromHash = (0, ramda_1.tryCatch)((0, ramda_1.pipe)((0, ramda_1.match)(HASH_REGEX), (0, ramda_1.nth)(1), function (a) { return atob(a); }, JSON.parse), function () {
    // console.log("Error", e)
});
exports.filterFromHash = filterFromHash;
/**
 * Takes a filter object and prepares it for a url hash. It gets converted to JSON and base64 encoded.
 *
 * @function
 * @param {object} filters Filter object
 * @returns {string}
 */
var filterToHash = function (filters) { return "filters=" + btoa(JSON.stringify(filters)); };
exports.filterToHash = filterToHash;
/**
 * Takes a filter object and returns the JMESPath query of the results.
 *
 * @function
 * @param {object} filters Filter object
 * @returns {string}
 */
var filterToPath = function (filters) { return (Object.values(filters).length ? (0, kit_1.combineAll)(Object.values(filters)) : '*'); };
exports.filterToPath = filterToPath;
/**
 * A filter object is an object where all the values are valid JMESPath matchers.
 * This will take all these values and `&&` them together, so that each must pass for an
 * event to be valid.
 */
var filterData = (0, ramda_1.curry)(function (filters, data) { return (Object.values(filters).length
    ? (0, kit_1.match)(filterToPath(filters), data)
    : data); });
exports.filterData = filterData;
