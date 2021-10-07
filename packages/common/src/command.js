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

import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/command.json';

/**
 * Contains constants and functions for a Outgoing Command.
 *
 * The structure for a Outgoing Command is as follows:
 * ```
 * {
 *   clientId: <string>,
 *   payload: <object>,
 *   timestamp: <number>,
 *   type: 'control'
 *   vendor: <string>,
 * }
 * ```
 *
 * @namespace command
 */

/**
 * Paths for the keys on a Outgoing Command
 *
 * @enum {string}
 */
const path = {
  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** When the command was triggered.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** The type of event. For commands it's always 'control'..<br />Path is `type`. */
  rootType: 'type',

  /** The vendor of the plugin to receive the command.<br />Path is `vendor`. */
  vendor: 'vendor'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 0;

/**
 * A label that can be used when describing this object
 */
const label = 'Outgoing Command';

/**
 * A grouping for this object
 */
const group = 'command';

/**
 * The value for `rootType` for a Outgoing Command.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'control';

/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param {string} alias Path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = (alias, data) => {
  const func = (data2) => kit.search(path[alias] || alias, data2);
  if (!data) { return func; }
  return func(data);
};

/**
 * Returns the `clientId` from the Outgoing Command.
 * This is the a unique id that differentiates clients from one another.
 *
 * Path is `clientId`.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {string}
 */
const getClientId = kit.search(path.clientId);

/**
 * Returns the `payload` from the Outgoing Command.
 * This is the an object with custom data describing the event.
 *
 * Path is `payload`.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {object}
 */
const getPayload = kit.search(path.payload);

/**
 * Returns the data using the specified path from the payload
 * of the Outgoing Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Outgoing Command instance
 * @returns {*}
 */
const getPayloadKey = kit.curry(
  (searchPath, source) => kit.search(`${path.payload}.${searchPath}`, source)
);

/**
 * Returns the `timestamp` from the Outgoing Command.
 * This is the when the command was triggered.
 *
 * Path is `timestamp`.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {number}
 */
const getTimestamp = kit.search(path.timestamp);

/**
 * Returns the `rootType` from the Outgoing Command.
 * This is the the type of event. For commands it's always 'control'..
 *
 * Path is `type`.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {string}
 */
const getRootType = kit.search(path.rootType);

/**
 * Returns the `vendor` from the Outgoing Command.
 * This is the the vendor of the plugin to receive the command.
 *
 * Path is `vendor`.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {string}
 */
const getVendor = kit.search(path.vendor);

/**
 * Matcher can be used to find matching Outgoing Command objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'timestamp',
  'type==`control`'
]);

/**
 * Tests the provided source against the matcher to see if it's Outgoing Command event.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Outgoing Command with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'control',
  ...input
});

/**
 * Generates a Outgoing Command with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootType: 'control',
  vendor: 'com.adobe.mobile.sdk',
  ...input
});

/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getClientId,
  getPayload,
  getPayloadKey,
  getTimestamp,
  getRootType,
  getVendor,
  isMatch,
  matcher,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
