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
import schema from '../schemas/streamingValidation.json';

/**
 * Contains constants and functions for a Streaming Validation.
 *
 * The structure for a Streaming Validation is as follows:
 * ```
 * {
 *   payload: {
 *     name: <string>,
 *     messages: <array>,
 *     context: <object>,
 *   },
 *   type: 'service'
 *   vendor: 'com.adobe.streaming.validation'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace streamingValidation
 */

/**
 * Paths for the keys on a Streaming Validation
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The name of the event.<br />Path is `payload.name`. */
  name: 'payload.name',

  /** Messages received from the service.<br />Path is `payload.messages`. */
  messages: 'payload.messages',

  /** Additional context provided by the service.<br />Path is `payload.context`. */
  context: 'payload.context',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  vendor: 'vendor',

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
const label = 'Streaming Validation';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `rootType` for a Streaming Validation.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'service';

/**
 * The value for `vendor` for a Streaming Validation.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.streaming.validation';

/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = (alias, data) => {
  const func = (data) => kit.search(path[alias] || alias, data);
  if (!data) { return func; }
  return func(data);
}

/**
 * Returns the `name` from the Streaming Validation.
 * This is the the name of the event.
 *
 * Path is `payload,name`.
 *
 * @function
 * @param {object} source The Streaming Validation instance
 * @returns {string}
 */
const getName = kit.search(path.name);

/**
 * Returns the `messages` from the Streaming Validation.
 * This is the messages received from the service.
 *
 * Path is `payload,messages`.
 *
 * @function
 * @param {object} source The Streaming Validation instance
 * @returns {Array}
 */
const getMessages = kit.search(path.messages);

/**
 * Returns the `context` from the Streaming Validation.
 * This is the additional context provided by the service.
 *
 * Path is `payload,context`.
 *
 * @function
 * @param {object} source The Streaming Validation instance
 * @returns {object}
 */
const getContext = kit.search(path.context);

/**
 * Returns the data using the specified path from the context
 * of the Streaming Validation.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Streaming Validation instance
 * @returns {*}
 */
const getContextKey = kit.curry(
  (searchPath, source) => kit.search(`${path.context}.${searchPath}`, source)
);

/**
 * Returns the `vendor` from the Streaming Validation.
 * This is the .
 *
 * Path is `vendor`.
 *
 * @function
 * @param {object} source The Streaming Validation instance
 * @returns {string}
 */
const getVendor = kit.search(path.vendor);

/**
 * Matcher can be used to find matching Streaming Validation objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'type==`service`',
  'vendor==`com.adobe.streaming.validation`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Streaming Validation event.
 *
 * @function
 * @param {object} source The Streaming Validation instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Streaming Validation with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'service',
  vendor: 'com.adobe.streaming.validation',
  ...input
});

/**
 * Generates a Streaming Validation with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  rootType: 'service',
  vendor: 'com.adobe.streaming.validation',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootId: '123',
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
  getName,
  getMessages,
  getContext,
  getContextKey,
  getVendor,
  isMatch,
  matcher,
  ROOT_TYPE,
  VENDOR,
  label,
  group,
  parentDepth
};
