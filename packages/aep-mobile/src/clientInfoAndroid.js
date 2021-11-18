"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var kit = __importStar(require("@adobe/griffon-toolkit"));
var clientInfoAndroid_json_1 = __importDefault(require("../schemas/clientInfoAndroid.json"));
/**
 * Contains constants and functions for a Android Client Info Event.
 *
 * The structure for a Android Client Info Event is as follows:
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
 * Paths for the keys on a Android Client Info Event
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** A map containing details about the connected device.<br />Path is `payload.deviceInfo`. */
    deviceInfo: 'payload.deviceInfo',
    /** Canonical name for the platform. Used for Griffon identifying if the device is iOS or Android.<br />Path is `payload.deviceInfo."Canonical platform name"`. */
    platform: 'payload.deviceInfo."Canonical platform name"',
    /** Read from Build.MODEL, which is the end-user-visible name for the end product..<br />Path is `payload.deviceInfo."Device name"`. */
    deviceName: 'payload.deviceInfo."Device name"',
    /** The style of interface to use on the current device..<br />Path is `payload.deviceInfo."Device type"`. */
    deviceType: 'payload.deviceInfo."Device type"',
    /** The manufacturer of the product/hardware..<br />Path is `payload.deviceInfo."Device manufacturer"`. */
    manufacturer: 'payload.deviceInfo."Device manufacturer"',
    /** The value is in the format "Android <OperatingSystemVersion>".<br />Path is `payload.deviceInfo."Operating system"`. */
    os: 'payload.deviceInfo."Operating system"',
    /** Phones display resolution in pixels (width x height).<br />Path is `payload.deviceInfo."Screen size"`. */
    screenSize: 'payload.deviceInfo."Screen size"',
    /** The battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned.<br />Path is `payload.deviceInfo."Battery level"`. */
    batteryLevel: 'payload.deviceInfo."Battery level"',
    /** The current enabled/disabled state of location for the device..<br />Path is `payload.deviceInfo."Location service enabled"`. */
    locationEnabled: 'payload.deviceInfo."Location service enabled"',
    /** Tells the app’s authorization status for using location services..<br />Path is `payload.deviceInfo."Location authorization status"`. */
    locationAuth: 'payload.deviceInfo."Location authorization status"',
    /** Represents the carrier name. "Unknown" if this value is not available, or not valid on the platform..<br />Path is `payload.deviceInfo."Carrier name"`. */
    carrierName: 'payload.deviceInfo."Carrier name"',
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
var parentDepth = 2;
/**
 * A label that can be used when describing this object
 */
var label = 'Android Client Info Event';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `platform` for a Android Client Info Event.
 *
 * Path is `payload,deviceInfo,Canonical platform name`.
 *
 * @constant
 */
var PLATFORM = 'Android';
/**
 * The value for `type` for a Android Client Info Event.
 *
 * Path is `payload,type`.
 *
 * @constant
 */
var TYPE = 'connect';
/**
 * The value for `rootType` for a Android Client Info Event.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'client';
/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param {string} alias Path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
var get = function (alias, data) {
    var func = function (data2) { return kit.search(path[alias] || alias, data2); };
    if (!data) {
        return func;
    }
    return func(data);
};
/**
 * Returns the `platform` from the Android Client Info Event.
 * This is the canonical name for the platform. Used for Griffon identifying if the device is iOS or Android.
 *
 * Path is `payload,deviceInfo,Canonical platform name`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getPlatform = kit.search(path.platform);
/**
 * Returns the `deviceName` from the Android Client Info Event.
 * This is the read from Build.MODEL, which is the end-user-visible name for the end product..
 *
 * Path is `payload,deviceInfo,Device name`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getDeviceName = kit.search(path.deviceName);
/**
 * Returns the `deviceType` from the Android Client Info Event.
 * This is the the style of interface to use on the current device..
 *
 * Path is `payload,deviceInfo,Device type`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getDeviceType = kit.search(path.deviceType);
/**
 * Returns the `manufacturer` from the Android Client Info Event.
 * This is the the manufacturer of the product/hardware..
 *
 * Path is `payload,deviceInfo,Device manufacturer`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getManufacturer = kit.search(path.manufacturer);
/**
 * Returns the `os` from the Android Client Info Event.
 * This is the the value is in the format "Android <OperatingSystemVersion>".
 *
 * Path is `payload,deviceInfo,Operating system`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getOs = kit.search(path.os);
/**
 * Returns the `screenSize` from the Android Client Info Event.
 * This is the phones display resolution in pixels (width x height).
 *
 * Path is `payload,deviceInfo,Screen size`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getScreenSize = kit.search(path.screenSize);
/**
 * Returns the `batteryLevel` from the Android Client Info Event.
 * This is the the battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned.
 *
 * Path is `payload,deviceInfo,Battery level`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {number}
 */
var getBatteryLevel = kit.search(path.batteryLevel);
/**
 * Returns the `locationEnabled` from the Android Client Info Event.
 * This is the the current enabled/disabled state of location for the device..
 *
 * Path is `payload,deviceInfo,Location service enabled`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {boolean}
 */
var getLocationEnabled = kit.search(path.locationEnabled);
/**
 * Returns the `locationAuth` from the Android Client Info Event.
 * This is the tells the app’s authorization status for using location services..
 *
 * Path is `payload,deviceInfo,Location authorization status`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getLocationAuth = kit.search(path.locationAuth);
/**
 * Returns the `carrierName` from the Android Client Info Event.
 * This is the represents the carrier name. "Unknown" if this value is not available, or not valid on the platform..
 *
 * Path is `payload,deviceInfo,Carrier name`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {string}
 */
var getCarrierName = kit.search(path.carrierName);
/**
 * Returns the `lowPowerMode` from the Android Client Info Event.
 * This is the indicates whether Low Power Mode is enabled on an iOS device..
 *
 * Path is `payload,deviceInfo,Low power mode enabled`.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {boolean}
 */
var getLowPowerMode = kit.search(path.lowPowerMode);
/**
 * Matcher can be used to find matching Android Client Info Event objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.deviceInfo."Canonical platform name"==`Android`',
    'payload.type==`connect`',
    'type==`client`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Android Client Info Event event.
 *
 * @function
 * @param {object} source The Android Client Info Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Android Client Info Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ platform: 'Android', type: 'connect', rootType: 'client' }, input)); };
/**
 * Generates a Android Client Info Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ platform: 'Android', deviceName: 'Testing Android', deviceType: 'Phone', manufacturer: 'Google', os: 'Android 10', screenSize: '1080x2028', batteryLevel: 94, locationEnabled: true, locationAuth: 'When in use', carrierName: 'Google Fi', lowPowerMode: false, type: 'connect', rootType: 'client', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: clientInfoAndroid_json_1["default"], get: get }, customExports), { getPlatform: getPlatform, getDeviceName: getDeviceName, getDeviceType: getDeviceType, getManufacturer: getManufacturer, getOs: getOs, getScreenSize: getScreenSize, getBatteryLevel: getBatteryLevel, getLocationEnabled: getLocationEnabled, getLocationAuth: getLocationAuth, getCarrierName: getCarrierName, getLowPowerMode: getLowPowerMode, isMatch: isMatch, matcher: matcher, PLATFORM: PLATFORM, TYPE: TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
