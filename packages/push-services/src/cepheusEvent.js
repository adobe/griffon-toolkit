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
var cepheusEvent_json_1 = __importDefault(require("../schemas/cepheusEvent.json"));
/**
 * Contains constants and functions for a Generic Cepheus Event.
 *
 * The structure for a Generic Cepheus Event is as follows:
 * ```
 * {
 *   type: 'Push Service'
 *   vendor: 'com.adobe.cepheus'
 *   annotations: <array>,
 *   clientId: <string>,
 *   payload: <object>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace cepheusEvent
 */
/**
 * Paths for the keys on a Generic Cepheus Event
 *
 * @enum {string}
 */
var path = {
    /** The type of event.<br />Path is `type`. */
    rootType: 'type',
    /** The vendor of the service that sent the event.<br />Path is `vendor`. */
    vendor: 'vendor',
    /** Array of Annotation objects.<br />Path is `annotations`. */
    annotations: 'annotations',
    /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
    clientId: 'clientId',
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
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
var label = 'Generic Cepheus Event';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `rootType` for a Generic Cepheus Event.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'Push Service';
/**
 * The value for `vendor` for a Generic Cepheus Event.
 *
 * Path is `vendor`.
 *
 * @constant
 */
var VENDOR = 'com.adobe.cepheus';
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
 * Returns the `vendor` from the Generic Cepheus Event.
 * This is the the vendor of the service that sent the event.
 *
 * Path is `vendor`.
 *
 * @function
 * @param {object} source The Generic Cepheus Event instance
 * @returns {string}
 */
var getVendor = kit.search(path.vendor);
/**
 * Matcher can be used to find matching Generic Cepheus Event objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'type==`Push Service`',
    'vendor==`com.adobe.cepheus`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Generic Cepheus Event event.
 *
 * @function
 * @param {object} source The Generic Cepheus Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Generic Cepheus Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ rootType: 'Push Service', vendor: 'com.adobe.cepheus' }, input)); };
/**
 * Generates a Generic Cepheus Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ rootType: 'Push Service', vendor: 'com.adobe.cepheus', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: cepheusEvent_json_1["default"], get: get }, customExports), { getVendor: getVendor, isMatch: isMatch, matcher: matcher, ROOT_TYPE: ROOT_TYPE, VENDOR: VENDOR, label: label, group: group, parentDepth: parentDepth });
