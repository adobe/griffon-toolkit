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
import schema from '../schemas/xdmMapping.json';

/**
 * Contains constants and functions for a XDM Mapping Event.
 *
 * The structure for a XDM Mapping Event is as follows:
 * ```
 * {
 *   payload: {
 *     attributes: {
 *       primaryHitId: <string>,
 *       requestId: <string>,
 *     },
 *     name: 'mapper:xdm-event'
 *     messages: <array>,
 *     context: <object>,
 *   },
 *   vendor: 'com.adobe.experience_platform.xdm_mapper'
 *   type: 'service'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace xdmMapping
 */

/**
 * Paths for the keys on a XDM Mapping Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object containing metadata about the request.<br />Path is `payload.attributes`. */
  attributes: 'payload.attributes',

  primaryHitId: 'payload.attributes.primaryHitId',

  /** The request id that is shared between the different service requests.<br />Path is `payload.attributes.requestId`. */
  requestId: 'payload.attributes.requestId',

  /** The name of the event.<br />Path is `payload.name`. */
  name: 'payload.name',

  /** Messages received from the service.<br />Path is `payload.messages`. */
  messages: 'payload.messages',

  /** Additional context provided by the service.<br />Path is `payload.context`. */
  context: 'payload.context',

  vendor: 'vendor',

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
const parentDepth = 2;

/**
 * The name of this event. Same as the file name
 */
const uniqueName = 'xdmMapping';

/**
 * The package of this event
 */
const packageName = 'edge';

/**
 * The unique name of this event
 */
const label = 'XDM Mapping Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `name` for a XDM Mapping Event.
 *
 * Path is `payload,name`.
 *
 * @constant
 */
const NAME = 'mapper:xdm-event';

/**
 * The value for `vendor` for a XDM Mapping Event.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.experience_platform.xdm_mapper';

/**
 * The value for `rootType` for a XDM Mapping Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'service';

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
 * Returns the `attributes` from the XDM Mapping Event.
 * This is the an object containing metadata about the request.
 *
 * Path is `payload,attributes`.
 *
 * @function
 * @param {object} source The XDM Mapping Event instance
 * @returns {object}
 */
const getAttributes = kit.search(path.attributes);

/**
 * Returns the data using the specified path from the attributes
 * of the XDM Mapping Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The XDM Mapping Event instance
 * @returns {*}
 */
const getAttributesKey = kit.curry(
  (searchPath, source) => kit.search(`${path.attributes}.${searchPath}`, source)
);

/**
 * Returns the `vendor` from the XDM Mapping Event.
 * This is the .
 *
 * Path is `vendor`.
 *
 * @function
 * @param {object} source The XDM Mapping Event instance
 * @returns {string}
 */
const getVendor = kit.search(path.vendor);

/**
 * Matcher can be used to find matching XDM Mapping Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.attributes.requestId',
  'payload.name==`mapper:xdm-event`',
  'vendor==`com.adobe.experience_platform.xdm_mapper`',
  'type==`service`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's XDM Mapping Event event.
 *
 * @function
 * @param {object} source The XDM Mapping Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a XDM Mapping Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  name: 'mapper:xdm-event',
  vendor: 'com.adobe.experience_platform.xdm_mapper',
  rootType: 'service',
  ...input
});

/**
 * Generates a XDM Mapping Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  primaryHitId: '2FC717AB05158000-4023A7954DCA58D7',
  requestId: '93619B4C-D4EE-4BA9-BE3F-DD430A155013',
  name: 'mapper:xdm-event',
  vendor: 'com.adobe.experience_platform.xdm_mapper',
  rootType: 'service',
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
  getVendor,
  isMatch,
  matcher,
  NAME,
  VENDOR,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
