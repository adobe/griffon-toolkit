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
var configUpdateCommand_json_1 = __importDefault(require("../schemas/configUpdateCommand.json"));
/**
 * Contains constants and functions for a Config Update Command.
 *
 * The structure for a Config Update Command is as follows:
 * ```
 * {
 *   payload: {
 *     type: 'configUpdate'
 *     detail: <object>,
 *   },
 *   vendor: 'com.adobe.griffon.mobile'
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: 'control'
 * }
 * ```
 *
 * @namespace configUpdateCommand
 */
/**
 * Paths for the keys on a Config Update Command
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The type of command.<br />Path is `payload.type`. */
    type: 'payload.type',
    /** Object containing the config paths and values to update.<br />Path is `payload.detail`. */
    detail: 'payload.detail',
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
var parentDepth = 1;
/**
 * A label that can be used when describing this object
 */
var label = 'Config Update Command';
/**
 * A grouping for this object
 */
var group = 'command';
/**
 * The value for `type` for a Config Update Command.
 *
 * Path is `payload,type`.
 *
 * @constant
 */
var TYPE = 'configUpdate';
/**
 * The value for `vendor` for a Config Update Command.
 *
 * Path is `vendor`.
 *
 * @constant
 */
var VENDOR = 'com.adobe.griffon.mobile';
/**
 * The value for `rootType` for a Config Update Command.
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
 * Returns the `type` from the Config Update Command.
 * This is the the type of command.
 *
 * Path is `payload,type`.
 *
 * @function
 * @param {object} source The Config Update Command instance
 * @returns {string}
 */
var getType = kit.search(path.type);
/**
 * Returns the `detail` from the Config Update Command.
 * This is the object containing the config paths and values to update.
 *
 * Path is `payload,detail`.
 *
 * @function
 * @param {object} source The Config Update Command instance
 * @returns {object}
 */
var getDetail = kit.search(path.detail);
/**
 * Returns the data using the specified path from the detail
 * of the Config Update Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Config Update Command instance
 * @returns {*}
 */
var getDetailKey = kit.curry(function (searchPath, source) { return kit.search(path.detail + "." + searchPath, source); });
/**
 * Matcher can be used to find matching Config Update Command objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.type==`configUpdate`',
    'vendor==`com.adobe.griffon.mobile`',
    'timestamp',
    'type==`control`'
]);
/**
 * Tests the provided source against the matcher to see if it's Config Update Command event.
 *
 * @function
 * @param {object} source The Config Update Command instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Config Update Command with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ type: 'configUpdate', vendor: 'com.adobe.griffon.mobile', rootType: 'control' }, input)); };
/**
 * Generates a Config Update Command with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ type: 'configUpdate', vendor: 'com.adobe.griffon.mobile', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootType: 'control' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: configUpdateCommand_json_1["default"], get: get }, customExports), { getType: getType, getDetail: getDetail, getDetailKey: getDetailKey, isMatch: isMatch, matcher: matcher, TYPE: TYPE, VENDOR: VENDOR, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
