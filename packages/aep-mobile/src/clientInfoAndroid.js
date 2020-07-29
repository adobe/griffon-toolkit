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
import schema from '../schemas/clientInfoAndroid.json';

/**
 * Contains constants and functions for a iOS Client Info Event.
 *
 * The structure for a iOS Client Info Event is as follows:
 * ```
 * {
 *   payload: {
 *     deviceInfo: {
 *       Canonical platform name: 'Android'
 *       Device name: <string>,
 *       Device type: <string>,
 *       Device manufacturer: <string>,
 *       Operating system: <string>,
 *       Screen size: <string>,
 *       Battery level: <integer>,
 *       Location service enabled: <boolean>,
 *       Location authorization status: <string>,
 *       Carrier name: <string>,
 *       Low power mode enabled: <boolean>,
 *     },
 *     appSettings: <object>,
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
 * @namespace clientInfoAndroid
 */

/**
 * Paths for the keys on a iOS Client Info Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** A map containing details about the connected device.<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o`. */
  deviceInfo: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o',

  /** Canonical name for the platform. Used for Griffon identifying if the device is iOS or Android.<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".C.a.n.o.n.i.c.a.l." ".p.l.a.t.f.o.r.m." ".n.a.m.e`. */
  platform: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".C.a.n.o.n.i.c.a.l." ".p.l.a.t.f.o.r.m." ".n.a.m.e',

  /** Read from Build.MODEL, which is the end-user-visible name for the end product..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".D.e.v.i.c.e." ".n.a.m.e`. */
  deviceName: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".D.e.v.i.c.e." ".n.a.m.e',

  /** The style of interface to use on the current device..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".D.e.v.i.c.e." ".t.y.p.e`. */
  deviceType: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".D.e.v.i.c.e." ".t.y.p.e',

  /** The manufacturer of the product/hardware..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".D.e.v.i.c.e." ".m.a.n.u.f.a.c.t.u.r.e.r`. */
  manufacturer: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".D.e.v.i.c.e." ".m.a.n.u.f.a.c.t.u.r.e.r',

  /** The value is in the format "Android <OperatingSystemVersion>".<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".O.p.e.r.a.t.i.n.g." ".s.y.s.t.e.m`. */
  os: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".O.p.e.r.a.t.i.n.g." ".s.y.s.t.e.m',

  /** Phones display resolution in pixels (width x height).<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".S.c.r.e.e.n." ".s.i.z.e`. */
  screenSize: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".S.c.r.e.e.n." ".s.i.z.e',

  /** The battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned.<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".B.a.t.t.e.r.y." ".l.e.v.e.l`. */
  batteryLevel: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".B.a.t.t.e.r.y." ".l.e.v.e.l',

  /** The current enabled/disabled state of location for the device..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".L.o.c.a.t.i.o.n." ".s.e.r.v.i.c.e." ".e.n.a.b.l.e.d`. */
  locationEnabled: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".L.o.c.a.t.i.o.n." ".s.e.r.v.i.c.e." ".e.n.a.b.l.e.d',

  /** Tells the app’s authorization status for using location services..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".L.o.c.a.t.i.o.n." ".a.u.t.h.o.r.i.z.a.t.i.o.n." ".s.t.a.t.u.s`. */
  locationAuth: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".L.o.c.a.t.i.o.n." ".a.u.t.h.o.r.i.z.a.t.i.o.n." ".s.t.a.t.u.s',

  /** Represents the carrier name. "Unknown" if this value is not available, or not valid on the platform..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".C.a.r.r.i.e.r." ".n.a.m.e`. */
  carrierName: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".C.a.r.r.i.e.r." ".n.a.m.e',

  /** Indicates whether Low Power Mode is enabled on an iOS device..<br />Path is `p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".L.o.w." ".p.o.w.e.r." ".m.o.d.e." ".e.n.a.b.l.e.d`. */
  lowPowerMode: 'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".L.o.w." ".p.o.w.e.r." ".m.o.d.e." ".e.n.a.b.l.e.d',

  /** A map containing details about the settings of the application on which Griffon is registered.<br />Path is `p.a.y.l.o.a.d.".".a.p.p.S.e.t.t.i.n.g.s`. */
  appSettings: 'p.a.y.l.o.a.d.".".a.p.p.S.e.t.t.i.n.g.s',

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
const parentDepth = 2;

/**
 * A label that can be used when describing this object
 */
const label = 'iOS Client Info Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `platform` for a iOS Client Info Event.
 *
 * Path is `payload.deviceInfo.Canonical platform name`.
 *
 * @constant
 */
const PLATFORM = 'Android';

/**
 * The value for `type` for a iOS Client Info Event.
 *
 * Path is `payload.type`.
 *
 * @constant
 */
const TYPE = 'connect';

/**
 * The value for `rootType` for a iOS Client Info Event.
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
 * Returns the `platform` from the iOS Client Info Event.
 * This is the canonical name for the platform. Used for Griffon identifying if the device is iOS or Android.
 *
 * Path is `payload.deviceInfo.Canonical platform name`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getPlatform = kit.search(path.platform);

/**
 * Returns the `deviceName` from the iOS Client Info Event.
 * This is the read from Build.MODEL, which is the end-user-visible name for the end product..
 *
 * Path is `payload.deviceInfo.Device name`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getDeviceName = kit.search(path.deviceName);

/**
 * Returns the `deviceType` from the iOS Client Info Event.
 * This is the the style of interface to use on the current device..
 *
 * Path is `payload.deviceInfo.Device type`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getDeviceType = kit.search(path.deviceType);

/**
 * Returns the `manufacturer` from the iOS Client Info Event.
 * This is the the manufacturer of the product/hardware..
 *
 * Path is `payload.deviceInfo.Device manufacturer`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getManufacturer = kit.search(path.manufacturer);

/**
 * Returns the `os` from the iOS Client Info Event.
 * This is the the value is in the format "Android <OperatingSystemVersion>".
 *
 * Path is `payload.deviceInfo.Operating system`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getOs = kit.search(path.os);

/**
 * Returns the `screenSize` from the iOS Client Info Event.
 * This is the phones display resolution in pixels (width x height).
 *
 * Path is `payload.deviceInfo.Screen size`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getScreenSize = kit.search(path.screenSize);

/**
 * Returns the `batteryLevel` from the iOS Client Info Event.
 * This is the the battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned.
 *
 * Path is `payload.deviceInfo.Battery level`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {number}
 */
const getBatteryLevel = kit.search(path.batteryLevel);

/**
 * Returns the `locationEnabled` from the iOS Client Info Event.
 * This is the the current enabled/disabled state of location for the device..
 *
 * Path is `payload.deviceInfo.Location service enabled`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {boolean}
 */
const getLocationEnabled = kit.search(path.locationEnabled);

/**
 * Returns the `locationAuth` from the iOS Client Info Event.
 * This is the tells the app’s authorization status for using location services..
 *
 * Path is `payload.deviceInfo.Location authorization status`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getLocationAuth = kit.search(path.locationAuth);

/**
 * Returns the `carrierName` from the iOS Client Info Event.
 * This is the represents the carrier name. "Unknown" if this value is not available, or not valid on the platform..
 *
 * Path is `payload.deviceInfo.Carrier name`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getCarrierName = kit.search(path.carrierName);

/**
 * Returns the `lowPowerMode` from the iOS Client Info Event.
 * This is the indicates whether Low Power Mode is enabled on an iOS device..
 *
 * Path is `payload.deviceInfo.Low power mode enabled`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {boolean}
 */
const getLowPowerMode = kit.search(path.lowPowerMode);

/**
 * Matcher can be used to find matching iOS Client Info Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'p.a.y.l.o.a.d.".".d.e.v.i.c.e.I.n.f.o.".".C.a.n.o.n.i.c.a.l." ".p.l.a.t.f.o.r.m." ".n.a.m.e==\'Android\'',
  'p.a.y.l.o.a.d.".".t.y.p.e==\'connect\'',
  't.y.p.e==\'client\'',
  't.i.m.e.s.t.a.m.p'
]);

/**
 * Tests the provided source against the matcher to see if it's iOS Client Info Event event.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a iOS Client Info Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  platform: 'Android',
  type: 'connect',
  rootType: 'client',
  ...input
});

/**
 * Generates a iOS Client Info Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  platform: 'Android',
  deviceName: 'Testing Android',
  deviceType: 'Phone',
  manufacturer: 'Google',
  os: 'Android 10',
  screenSize: '1080x2028',
  batteryLevel: 94,
  locationEnabled: true,
  locationAuth: 'When in use',
  carrierName: 'Google Fi',
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
  getPlatform,
  getDeviceName,
  getDeviceType,
  getManufacturer,
  getOs,
  getScreenSize,
  getBatteryLevel,
  getLocationEnabled,
  getLocationAuth,
  getCarrierName,
  getLowPowerMode,
  isMatch,
  matcher,
  PLATFORM,
  TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
