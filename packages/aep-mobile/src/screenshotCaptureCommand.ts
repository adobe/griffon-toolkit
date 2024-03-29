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
import schema from '../schemas/screenshotCaptureCommand.json';

/**
 * Contains constants and functions for a Screenshot Capture Command.
 *
 * The structure for a Screenshot Capture Command is as follows:
 * ```
 * {
 *   payload: {
 *     type: 'screenshot'
 *   },
 *   vendor: 'com.adobe.griffon.mobile'
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: 'control'
 * }
 * ```
 *
 * @namespace screenshotCaptureCommand
 */

/**
 * Paths for the keys on a Screenshot Capture Command
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The type of command.<br />Path is `payload.type`. */
  type: 'payload.type',

  /** The vendor of the plugin to receive the command.<br />Path is `vendor`. */
  vendor: 'vendor',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** When the command was triggered.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** The type of event. For commands it's always 'control'..<br />Path is `type`. */
  rootType: 'type'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 1;

/**
 * The name of this event. Same as the file name
 */
const uniqueName = 'screenshotCaptureCommand';

/**
 * The package of this event
 */
const packageName = 'aep-mobile';

/**
 * The unique name of this event
 */
const label = 'Screenshot Capture Command';

/**
 * A grouping for this object
 */
const group = 'command';

/**
 * The value for `type` for a Screenshot Capture Command.
 *
 * Path is `payload,type`.
 *
 * @constant
 */
const TYPE = 'screenshot';

/**
 * The value for `vendor` for a Screenshot Capture Command.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.griffon.mobile';

/**
 * The value for `rootType` for a Screenshot Capture Command.
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
 * Returns the `type` from the Screenshot Capture Command.
 * This is the the type of command.
 *
 * Path is `payload,type`.
 *
 * @function
 * @param {object} source The Screenshot Capture Command instance
 * @returns {string}
 */
const getType = kit.search(path.type);

/**
 * Matcher can be used to find matching Screenshot Capture Command objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.type==`screenshot`',
  'vendor==`com.adobe.griffon.mobile`',
  'timestamp',
  'type==`control`'
]);

/**
 * Tests the provided source against the matcher to see if it's Screenshot Capture Command event.
 *
 * @function
 * @param {object} source The Screenshot Capture Command instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Screenshot Capture Command with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  type: 'screenshot',
  vendor: 'com.adobe.griffon.mobile',
  rootType: 'control',
  ...input
});

/**
 * Generates a Screenshot Capture Command with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  type: 'screenshot',
  vendor: 'com.adobe.griffon.mobile',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootType: 'control',
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
  getType,
  isMatch,
  matcher,
  TYPE,
  VENDOR,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
