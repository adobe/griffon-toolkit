
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
import schema from '../schemas/clientInfoIOS.json';

/**
 * Contains constants and functions for a iOS Client Info Event.
 *
 * The structure for a iOS Client Info Event is as follows:
 * ```
 * {
 *   payload: {
 *     deviceInfo: {
 *       Canonical platform name: 'iOS'
 *       Device name: <string>,
 *       Device type: <string>,
 *       Model: <string>,
 *       Operating system: <string>,
 *       Screen size: <string>,
 *       Battery level: <integer>,
 *       Battery state: <string>,
 *       Location service enabled: <boolean>,
 *       Location authorization status: <string>,
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
 * @namespace clientInfoIOS
 */

/**
 * Paths for the keys on a iOS Client Info Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** A map containing details about the connected device.<br />Path is `payload.deviceInfo`. */
  deviceInfo: 'payload.deviceInfo',

  /** Canonical name for the platform. Used for Griffon identifying if the device is iOS or Android.<br />Path is `payload.deviceInfo."Canonical platform name"`. */
  platform: 'payload.deviceInfo."Canonical platform name"',

  /** The name identifying the device..<br />Path is `payload.deviceInfo."Device name"`. */
  deviceName: 'payload.deviceInfo."Device name"',

  /** The style of interface to use on the current device..<br />Path is `payload.deviceInfo."Device type"`. */
  deviceType: 'payload.deviceInfo."Device type"',

  /** The model of the device..<br />Path is `payload.deviceInfo.Model`. */
  model: 'payload.deviceInfo.Model',

  /** The value is in the format "<OperationSystemName> <OperatingSystemVersion>".<br />Path is `payload.deviceInfo."Operating system"`. */
  os: 'payload.deviceInfo."Operating system"',

  /** Phones display resolution in pixels (width x height).<br />Path is `payload.deviceInfo."Screen size"`. */
  screenSize: 'payload.deviceInfo."Screen size"',

  /** The battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned.<br />Path is `payload.deviceInfo."Battery level"`. */
  batteryLevel: 'payload.deviceInfo."Battery level"',

  /** The battery state for the device..<br />Path is `payload.deviceInfo."Battery state"`. */
  batteryState: 'payload.deviceInfo."Battery state"',

  /** A boolean value indicating whether location services are enabled on the device. Users can enable or disable location services by toggling the Location Services switch in Settings > Privacy..<br />Path is `payload.deviceInfo."Location service enabled"`. */
  locationEnabled: 'payload.deviceInfo."Location service enabled"',

  /** Tells the app’s authorization status for using location services..<br />Path is `payload.deviceInfo."Location authorization status"`. */
  locationAuth: 'payload.deviceInfo."Location authorization status"',

  /** Indicates whether Low Power Mode is enabled on an iOS device..<br />Path is `payload.deviceInfo."Low power mode enabled"`. */
  lowPowerMode: 'payload.deviceInfo."Low power mode enabled"',

  /** A map containing details about the settings of the application on which Griffon is registered.<br />Path is `payload.appSettings`. */
  appSettings: 'payload.appSettings',

  /** Constant value representing this event will initiate a connection.<br />Path is `payload.type`. */
  type: 'payload.type',

  /** Griffon SDK Extension version.<br />Path is `payload.version`. */
  version: 'payload.version',

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
 * Path is `payload,deviceInfo,Canonical platform name`.
 *
 * @constant
 */
const PLATFORM = 'iOS';

/**
 * The value for `type` for a iOS Client Info Event.
 *
 * Path is `payload,type`.
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
 * Path is `payload,deviceInfo,Canonical platform name`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getPlatform = kit.search(path.platform);

/**
 * Returns the `deviceName` from the iOS Client Info Event.
 * This is the the name identifying the device..
 *
 * Path is `payload,deviceInfo,Device name`.
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
 * Path is `payload,deviceInfo,Device type`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getDeviceType = kit.search(path.deviceType);

/**
 * Returns the `model` from the iOS Client Info Event.
 * This is the the model of the device..
 *
 * Path is `payload,deviceInfo,Model`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getModel = kit.search(path.model);

/**
 * Returns the `os` from the iOS Client Info Event.
 * This is the the value is in the format "<OperationSystemName> <OperatingSystemVersion>".
 *
 * Path is `payload,deviceInfo,Operating system`.
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
 * Path is `payload,deviceInfo,Screen size`.
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
 * Path is `payload,deviceInfo,Battery level`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {number}
 */
const getBatteryLevel = kit.search(path.batteryLevel);

/**
 * Returns the `batteryState` from the iOS Client Info Event.
 * This is the the battery state for the device..
 *
 * Path is `payload,deviceInfo,Battery state`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getBatteryState = kit.search(path.batteryState);

/**
 * Returns the `locationEnabled` from the iOS Client Info Event.
 * This is the a boolean value indicating whether location services are enabled on the device. Users can enable or disable location services by toggling the Location Services switch in Settings > Privacy..
 *
 * Path is `payload,deviceInfo,Location service enabled`.
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
 * Path is `payload,deviceInfo,Location authorization status`.
 *
 * @function
 * @param {object} source The iOS Client Info Event instance
 * @returns {string}
 */
const getLocationAuth = kit.search(path.locationAuth);

/**
 * Returns the `lowPowerMode` from the iOS Client Info Event.
 * This is the indicates whether Low Power Mode is enabled on an iOS device..
 *
 * Path is `payload,deviceInfo,Low power mode enabled`.
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
  'payload.deviceInfo."Canonical platform name"==\'iOS\'',
  'payload.type==\'connect\'',
  'type==\'client\'',
  'timestamp'
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
  platform: 'iOS',
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
  platform: 'iOS',
  deviceName: 'Testing iPhone',
  deviceType: 'iPhone/iPod touch',
  model: 'iPhone',
  os: 'iOS 13.5.1',
  screenSize: '1125x2436',
  batteryLevel: 94,
  batteryState: 'Battery Full',
  locationEnabled: true,
  locationAuth: 'Always',
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
  getModel,
  getOs,
  getScreenSize,
  getBatteryLevel,
  getBatteryState,
  getLocationEnabled,
  getLocationAuth,
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
