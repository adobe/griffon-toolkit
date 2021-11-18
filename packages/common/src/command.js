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
var command_json_1 = __importDefault(require("../schemas/command.json"));
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
var path = {
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
var parentDepth = 0;
/**
 * A label that can be used when describing this object
 */
var label = 'Outgoing Command';
/**
 * A grouping for this object
 */
var group = 'command';
/**
 * The value for `rootType` for a Outgoing Command.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'control';
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
 * Returns the `clientId` from the Outgoing Command.
 * This is the a unique id that differentiates clients from one another.
 *
 * Path is `clientId`.
 *
 * @function
 * @param {object} source The Outgoing Command instance
 * @returns {string}
 */
var getClientId = kit.search(path.clientId);
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
var getPayload = kit.search(path.payload);
/**
 * Returns the data using the specified path from the payload
 * of the Outgoing Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Outgoing Command instance
 * @returns {*}
 */
var getPayloadKey = kit.curry(function (searchPath, source) { return kit.search(path.payload + "." + searchPath, source); });
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
var getTimestamp = kit.search(path.timestamp);
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
var getRootType = kit.search(path.rootType);
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
var getVendor = kit.search(path.vendor);
/**
 * Matcher can be used to find matching Outgoing Command objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
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
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Outgoing Command with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ rootType: 'control' }, input)); };
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
var mock = function (input) { return kit.expandWithPaths(path, __assign({ clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootType: 'control', vendor: 'com.adobe.mobile.sdk' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: command_json_1["default"], get: get }, customExports), { getClientId: getClientId, getPayload: getPayload, getPayloadKey: getPayloadKey, getTimestamp: getTimestamp, getRootType: getRootType, getVendor: getVendor, isMatch: isMatch, matcher: matcher, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
