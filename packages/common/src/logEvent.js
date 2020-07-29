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
import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/logEvent.json';

/**
 * Contains constants and functions for a Log Event.
 *
 * The structure for a Log Event is as follows:
 * ```
 * {
 *   payload: {
 *     logline: <string>,
 *   },
 *   type: 'log'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace logEvent
 */

/**
 * Paths for the keys on a Log Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** Represents a line logged by the application.<br />Path is `payload.logline`. */
  logLine: 'payload.logline',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  /** Array of Annotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** When the event occurred.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** Uniquely identifies each event.<br />Path is `uuid`. */
  rootId: 'uuid'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 1;

/**
 * A label that can be used when describing this object
 */
const label = 'Log Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `rootType` for a Log Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'log';

/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = R.curry((alias, data) => kit.search(path[alias] || alias, data));

/**
 * Returns the `logLine` from the Log Event.
 * This is the represents a line logged by the application.
 *
 * Path is `payload,logline`.
 *
 * @function
 * @param {object} source The Log Event instance
 * @returns {string}
 */
const getLogLine = kit.search(path.logLine);

/**
 * Matcher can be used to find matching Log Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'type==\'log\'',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Log Event event.
 *
 * @function
 * @param {object} source The Log Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Log Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'log',
  ...input
});

/**
 * Generates a Log Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  logLine: '07-16 11:28:56.116 20544:20583 V/AdobeExperienceSDK ]↵EventHub(AMSEventHub) - Registering extension',
  rootType: 'log',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootId: '123',
  ...input
});

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getLogLine,
  isMatch,
  matcher,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
