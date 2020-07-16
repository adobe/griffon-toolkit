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
import kit from './kit';
import annotation from './annotation';
import event from './event';

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
const fromHash = R.tryCatch(
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
 * Makes a hidden event filter based on the provided clear timestamp. If null, we'll filter all
 * events with a hidden annotation set. If provided, we'll also hide everything before that timestamp
 * unless the hidden annotation is explicitly set to `false`.
 *
 * @function
 * @param {number=} clearTS Hide events before this timestamp
 * @returns {object} Filter object
 */
const makeHiddenFilter = (clearTS) => (clearTS
  ? kit.combineAll([
    kit.not(`${annotation.publicMatcher.hidden} == \`true\``),
    kit.combineAny([
      `${event.path.timestamp} > \`${clearTS}\``,
      `${annotation.publicMatcher.hidden} == \`false\``
    ])
  ])
  : kit.not(`${annotation.publicMatcher.hidden} == \`true\``)
);


/**
 * Makes a event filter using the provided client ids.
 *
 * @function
 * @param {string[]} clients Array of clientIds to filter by
 * @returns {object} Filter object
 */
const makeClientFilter = (clients) => kit.combineAny(
  R.map((client) => `${event.path.clientId} == \`${client}\``, clients)
);

/**
 * Takes a filter object and prepares it for a url hash. It gets converted to JSON and base64 encoded.
 *
 * @function
 * @param {object} filters Filter object
 * @returns {string}
 */
const toHash = (filters) => `filters=${btoa(JSON.stringify(filters))}`;

/**
 * Takes a filter object and returns the JMESPath query of the results.
 *
 * @function
 * @param {object} filters Filter object
 * @returns {string}
 */
const toPath = (filters) => (Object.values(filters).length ? kit.combineAll(Object.values(filters)) : '*');

/**
 * A filter object is an object where all the values are valid JMESPath matchers.
 * This will take all these values and `&&` them together, so that each must pass for an
 * event to be valid.
 */
const match = R.curry(
  (filters, data) => (Object.values(filters).length
    ? kit.match(toPath(filters), data)
    : data)
);

export default {
  fromHash,
  makeClientFilter,
  makeHiddenFilter,
  match,
  toHash,
  toPath
};
