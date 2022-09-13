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
import schema from '../schemas/edgeEvent.json';

/**
 * Contains constants and functions for a Generic Edge Event.
 *
 * The structure for a Generic Edge Event is as follows:
 * ```
 * {
 *   payload: {
 *     attributes: {
 *       requestId: <string>,
 *     },
 *     name: <string>,
 *     messages: <array>,
 *     context: <object>,
 *   },
 *   type: 'service'
 *   vendor: 'com.adobe.edge.konductor'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace edgeEvent
 */

/**
 * Paths for the keys on a Generic Edge Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object containing metadata about the request.<br />Path is `payload.attributes`. */
  attributes: 'payload.attributes',

  /** The request id that is shared between the different service requests.<br />Path is `payload.attributes.requestId`. */
  requestId: 'payload.attributes.requestId',

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
const label = 'Generic Edge Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `rootType` for a Generic Edge Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'service';

/**
 * The value for `vendor` for a Generic Edge Event.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.edge.konductor';

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
 * Returns the `attributes` from the Generic Edge Event.
 * This is the an object containing metadata about the request.
 *
 * Path is `payload,attributes`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {object}
 */
const getAttributes = kit.search(path.attributes);

/**
 * Returns the data using the specified path from the attributes
 * of the Generic Edge Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Generic Edge Event instance
 * @returns {*}
 */
const getAttributesKey = kit.curry(
  (searchPath, source) => kit.search(`${path.attributes}.${searchPath}`, source)
);

/**
 * Returns the `requestId` from the Generic Edge Event.
 * This is the the request id that is shared between the different service requests.
 *
 * Path is `payload,attributes,requestId`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {string}
 */
const getRequestId = kit.search(path.requestId);

/**
 * Returns the `name` from the Generic Edge Event.
 * This is the the name of the event.
 *
 * Path is `payload,name`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {string}
 */
const getName = kit.search(path.name);

/**
 * Returns the `messages` from the Generic Edge Event.
 * This is the messages received from the service.
 *
 * Path is `payload,messages`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {Array}
 */
const getMessages = kit.search(path.messages);

/**
 * Returns the `context` from the Generic Edge Event.
 * This is the additional context provided by the service.
 *
 * Path is `payload,context`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {object}
 */
const getContext = kit.search(path.context);

/**
 * Returns the data using the specified path from the context
 * of the Generic Edge Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Generic Edge Event instance
 * @returns {*}
 */
const getContextKey = kit.curry(
  (searchPath, source) => kit.search(`${path.context}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Generic Edge Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.attributes.requestId',
  'type==`service`',
  'vendor==`com.adobe.edge.konductor`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Generic Edge Event event.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Generic Edge Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'service',
  vendor: 'com.adobe.edge.konductor',
  ...input
});

/**
 * Generates a Generic Edge Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  requestId: '93619B4C-D4EE-4BA9-BE3F-DD430A155013',
  rootType: 'service',
  vendor: 'com.adobe.edge.konductor',
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
  getAttributes,
  getAttributesKey,
  getRequestId,
  getName,
  getMessages,
  getContext,
  getContextKey,
  isMatch,
  matcher,
  ROOT_TYPE,
  VENDOR,
  label,
  group,
  parentDepth
};
