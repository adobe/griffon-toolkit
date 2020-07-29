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
import schema from '../schemas/clientInfo.json';

/**
 * Contains constants and functions for a Client Info Event.
 *
 * The structure for a Client Info Event is as follows:
 * ```
 * {
 *   payload: {
 *     appSettings: <object>,
 *     deviceInfo: <object>,
 *     type: 'connect'
 *     version: <string>,
 *   },
 *   type: 'client'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace clientInfo
 */

/**
 * Paths for the keys on a Client Info Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** A map containing details about the settings of the application on which Griffon is registered.<br />Path is `p.a.y.l.o.a.d.".".a.p.p.S.e.t.t.i.n.g.s`. */
  appSettings: 'p.a.y.l.o.a.d.".".a.p.p.S.e.t.t.i.n.g.s',

  /** A map containing details about the connected device.<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o`. */
  deviceInfo: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o',

  /** Constant value representing this event will initiate a connection.<br />Path is `p.a.y.l.o.a.d.".".t.y.p.e`. */
  type: 'p.a.y.l.o.a.d.".".t.y.p.e',

  /** Griffon SDK Extension version.<br />Path is `p.a.y.l.o.a.d.".".v.e.r.s.i.o.n`. */
  version: 'p.a.y.l.o.a.d.".".v.e.r.s.i.o.n',

  /** The type of event.<br />Path is `t.y.p.e`. */
  rootType: 't.y.p.e',

  /** Array of Annotation objects.<br />Path is `a.n.n.o.t.a.t.i.o.n.s`. */
  annotations: 'a.n.n.o.t.a.t.i.o.n.s',

  /** A unique id that differentiates clients from one another.<br />Path is `c.l.i.e.n.t.I.d`. */
  clientId: 'c.l.i.e.n.t.I.d',

  /** When the event occurred.<br />Path is `t.i.m.e.s.t.a.m.p`. */
  timestamp: 't.i.m.e.s.t.a.m.p',

  /** Uniquely identifies each event.<br />Path is `u.u.i.d`. */
  rootId: 'u.u.i.d'
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
const label = 'Client Info Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `type` for a Client Info Event.
 *
 * Path is `payload.type`.
 *
 * @constant
 */
const TYPE = 'connect';

/**
 * The value for `rootType` for a Client Info Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'client';

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
 * Returns the `appSettings` from the Client Info Event.
 * This is the a map containing details about the settings of the application on which Griffon is registered.
 *
 * Path is `payload.appSettings`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {object}
 */
const getAppSettings = kit.search(path.appSettings);

/**
 * Returns the data using the specified path from the appSettings
 * of the Client Info Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Client Info Event instance
 * @returns {*}
 */
const getAppSettingsKey = kit.curry(
  (searchPath, source) => kit.search(`${path.appSettings}.${searchPath}`, source)
);

/**
 * Returns the `deviceInfo` from the Client Info Event.
 * This is the a map containing details about the connected device.
 *
 * Path is `payload.deviceInfo`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {object}
 */
const getDeviceInfo = kit.search(path.deviceInfo);

/**
 * Returns the data using the specified path from the deviceInfo
 * of the Client Info Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Client Info Event instance
 * @returns {*}
 */
const getDeviceInfoKey = kit.curry(
  (searchPath, source) => kit.search(`${path.deviceInfo}.${searchPath}`, source)
);

/**
 * Returns the `type` from the Client Info Event.
 * This is the constant value representing this event will initiate a connection.
 *
 * Path is `payload.type`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {string}
 */
const getType = kit.search(path.type);

/**
 * Returns the `version` from the Client Info Event.
 * This is the griffon SDK Extension version.
 *
 * Path is `payload.version`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {string}
 */
const getVersion = kit.search(path.version);

/**
 * Matcher can be used to find matching Client Info Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'p.a.y.l.o.a.d.".".t.y.p.e==\'connect\'',
  't.y.p.e==\'client\'',
  't.i.m.e.s.t.a.m.p'
]);

/**
 * Tests the provided source against the matcher to see if it's Client Info Event event.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Client Info Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  type: 'connect',
  rootType: 'client',
  ...input
});

/**
 * Generates a Client Info Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  type: 'connect',
  rootType: 'client',
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
  getAppSettings,
  getAppSettingsKey,
  getDeviceInfo,
  getDeviceInfoKey,
  getType,
  getVersion,
  isMatch,
  matcher,
  TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
