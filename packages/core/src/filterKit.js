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
import { match, combineAll } from './kit';

/**
 * Contains utility functions for dealing with Griffon filters.
 *
 * @namespace filterKit
 */

const HASH_REGEX = /.*#filters=(.*)/;

/**
 * Extracts the filters from the provided url. Returns a filter object.
 *
 * @function
 * @param {string} url Url to decode filters from
 * @returns {object} Filter object
 */
const filterFromHash = R.tryCatch(
  R.pipe(
    R.match(HASH_REGEX),
    R.nth(1),
    (a) => atob(a),
    JSON.parse
  ),
  () => {
    // console.log("Error", e)
  }
);

/**
 * Takes a filter object and prepares it for a url hash. It gets converted to JSON and base64 encoded.
 *
 * @function
 * @param {object} filters Filter object
 * @returns {string}
 */
const filterToHash = (filters) => `filters=${btoa(JSON.stringify(filters))}`;

/**
 * Takes a filter object and returns the JMESPath query of the results.
 *
 * @function
 * @param {object} filters Filter object
 * @returns {string}
 */
const filterToPath = (filters) => (Object.values(filters).length ? combineAll(Object.values(filters)) : '*');

/**
 * A filter object is an object where all the values are valid JMESPath matchers.
 * This will take all these values and `&&` them together, so that each must pass for an
 * event to be valid.
 */
const filterData = R.curry(
  (filters, data) => (Object.values(filters).length
    ? match(filterToPath(filters), data)
    : data)
);

export {
  filterData,
  filterFromHash,
  filterToHash,
  filterToPath
};
