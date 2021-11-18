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
var clientInfo_json_1 = __importDefault(require("../schemas/clientInfo.json"));
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
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** A map containing details about the settings of the application on which Griffon is registered.<br />Path is `payload.appSettings`. */
    appSettings: 'payload.appSettings',
    /** A map containing details about the connected device.<br />Path is `payload.deviceInfo`. */
    deviceInfo: 'payload.deviceInfo',
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
var parentDepth = 1;
/**
 * A label that can be used when describing this object
 */
var label = 'Client Info Event';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `type` for a Client Info Event.
 *
 * Path is `payload,type`.
 *
 * @constant
 */
var TYPE = 'connect';
/**
 * The value for `rootType` for a Client Info Event.
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
 * Returns the `appSettings` from the Client Info Event.
 * This is the a map containing details about the settings of the application on which Griffon is registered.
 *
 * Path is `payload,appSettings`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {object}
 */
var getAppSettings = kit.search(path.appSettings);
/**
 * Returns the data using the specified path from the appSettings
 * of the Client Info Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Client Info Event instance
 * @returns {*}
 */
var getAppSettingsKey = kit.curry(function (searchPath, source) { return kit.search(path.appSettings + "." + searchPath, source); });
/**
 * Returns the `deviceInfo` from the Client Info Event.
 * This is the a map containing details about the connected device.
 *
 * Path is `payload,deviceInfo`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {object}
 */
var getDeviceInfo = kit.search(path.deviceInfo);
/**
 * Returns the data using the specified path from the deviceInfo
 * of the Client Info Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Client Info Event instance
 * @returns {*}
 */
var getDeviceInfoKey = kit.curry(function (searchPath, source) { return kit.search(path.deviceInfo + "." + searchPath, source); });
/**
 * Returns the `type` from the Client Info Event.
 * This is the constant value representing this event will initiate a connection.
 *
 * Path is `payload,type`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {string}
 */
var getType = kit.search(path.type);
/**
 * Returns the `version` from the Client Info Event.
 * This is the griffon SDK Extension version.
 *
 * Path is `payload,version`.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {string}
 */
var getVersion = kit.search(path.version);
/**
 * Matcher can be used to find matching Client Info Event objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.type==`connect`',
    'type==`client`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Client Info Event event.
 *
 * @function
 * @param {object} source The Client Info Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Client Info Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ type: 'connect', rootType: 'client' }, input)); };
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
var mock = function (input) { return kit.expandWithPaths(path, __assign({ type: 'connect', rootType: 'client', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: clientInfo_json_1["default"], get: get }, customExports), { getAppSettings: getAppSettings, getAppSettingsKey: getAppSettingsKey, getDeviceInfo: getDeviceInfo, getDeviceInfoKey: getDeviceInfoKey, getType: getType, getVersion: getVersion, isMatch: isMatch, matcher: matcher, TYPE: TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
