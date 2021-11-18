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
var screenshotResponse_json_1 = __importDefault(require("../schemas/screenshotResponse.json"));
/**
 * Contains constants and functions for a Screenshot Response Event.
 *
 * The structure for a Screenshot Response Event is as follows:
 * ```
 * {
 *   payload: {
 *     blobId: <string>,
 *     mimeType: <string>,
 *   },
 *   type: 'blob'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace screenshotResponse
 */
/**
 * Paths for the keys on a Screenshot Response Event
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** ID returned from the blob service.<br />Path is `payload.blobId`. */
    blobId: 'payload.blobId',
    /** Describes the type of blob content uploaded.<br />Path is `payload.mimeType`. */
    mimeType: 'payload.mimeType',
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
var label = 'Screenshot Response Event';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `rootType` for a Screenshot Response Event.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'blob';
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
 * Returns the `blobId` from the Screenshot Response Event.
 * This is the iD returned from the blob service.
 *
 * Path is `payload,blobId`.
 *
 * @function
 * @param {object} source The Screenshot Response Event instance
 * @returns {string}
 */
var getBlobId = kit.search(path.blobId);
/**
 * Returns the `mimeType` from the Screenshot Response Event.
 * This is the describes the type of blob content uploaded.
 *
 * Path is `payload,mimeType`.
 *
 * @function
 * @param {object} source The Screenshot Response Event instance
 * @returns {string}
 */
var getMimeType = kit.search(path.mimeType);
/**
 * Matcher can be used to find matching Screenshot Response Event objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'type==`blob`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Screenshot Response Event event.
 *
 * @function
 * @param {object} source The Screenshot Response Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Screenshot Response Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ rootType: 'blob' }, input)); };
/**
 * Generates a Screenshot Response Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ blobId: 'abcdefg', mimeType: 'images/jpg', rootType: 'blob', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: screenshotResponse_json_1["default"], get: get }, customExports), { getBlobId: getBlobId, getMimeType: getMimeType, isMatch: isMatch, matcher: matcher, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
