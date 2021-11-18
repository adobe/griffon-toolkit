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
var fakeEventCommand_json_1 = __importDefault(require("../schemas/fakeEventCommand.json"));
/**
 * Contains constants and functions for a Fake Event Command.
 *
 * The structure for a Fake Event Command is as follows:
 * ```
 * {
 *   payload: {
 *     type: 'fakeEvent'
 *     detail: {
 *       eventName: <string>,
 *       eventType: <string>,
 *       eventSource: <string>,
 *       eventData: <object>,
 *     },
 *   },
 *   vendor: 'com.adobe.griffon.mobile'
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: 'control'
 * }
 * ```
 *
 * @namespace fakeEventCommand
 */
/**
 * Paths for the keys on a Fake Event Command
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The type of command.<br />Path is `payload.type`. */
    type: 'payload.type',
    /** Additional command detail.<br />Path is `payload.detail`. */
    detail: 'payload.detail',
    /** The name of the event.<br />Path is `payload.detail.eventName`. */
    eventName: 'payload.detail.eventName',
    /** The event type.<br />Path is `payload.detail.eventType`. */
    eventType: 'payload.detail.eventType',
    /** The event source.<br />Path is `payload.detail.eventSource`. */
    eventSource: 'payload.detail.eventSource',
    /** An object with the custom data describing the event.<br />Path is `payload.detail.eventData`. */
    eventData: 'payload.detail.eventData',
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
var label = 'Fake Event Command';
/**
 * A grouping for this object
 */
var group = 'command';
/**
 * The value for `type` for a Fake Event Command.
 *
 * Path is `payload,type`.
 *
 * @constant
 */
var TYPE = 'fakeEvent';
/**
 * The value for `vendor` for a Fake Event Command.
 *
 * Path is `vendor`.
 *
 * @constant
 */
var VENDOR = 'com.adobe.griffon.mobile';
/**
 * The value for `rootType` for a Fake Event Command.
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
 * Returns the `type` from the Fake Event Command.
 * This is the the type of command.
 *
 * Path is `payload,type`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
var getType = kit.search(path.type);
/**
 * Returns the `detail` from the Fake Event Command.
 * This is the additional command detail.
 *
 * Path is `payload,detail`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {object}
 */
var getDetail = kit.search(path.detail);
/**
 * Returns the data using the specified path from the detail
 * of the Fake Event Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Fake Event Command instance
 * @returns {*}
 */
var getDetailKey = kit.curry(function (searchPath, source) { return kit.search(path.detail + "." + searchPath, source); });
/**
 * Returns the `eventName` from the Fake Event Command.
 * This is the the name of the event.
 *
 * Path is `payload,detail,eventName`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
var getEventName = kit.search(path.eventName);
/**
 * Returns the `eventType` from the Fake Event Command.
 * This is the the event type.
 *
 * Path is `payload,detail,eventType`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
var getEventType = kit.search(path.eventType);
/**
 * Returns the `eventSource` from the Fake Event Command.
 * This is the the event source.
 *
 * Path is `payload,detail,eventSource`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
var getEventSource = kit.search(path.eventSource);
/**
 * Returns the `eventData` from the Fake Event Command.
 * This is the an object with the custom data describing the event.
 *
 * Path is `payload,detail,eventData`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {object}
 */
var getEventData = kit.search(path.eventData);
/**
 * Returns the data using the specified path from the eventData
 * of the Fake Event Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Fake Event Command instance
 * @returns {*}
 */
var getEventDataKey = kit.curry(function (searchPath, source) { return kit.search(path.eventData + "." + searchPath, source); });
/**
 * Matcher can be used to find matching Fake Event Command objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.type==`fakeEvent`',
    'vendor==`com.adobe.griffon.mobile`',
    'timestamp',
    'type==`control`'
]);
/**
 * Tests the provided source against the matcher to see if it's Fake Event Command event.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Fake Event Command with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ type: 'fakeEvent', vendor: 'com.adobe.griffon.mobile', rootType: 'control' }, input)); };
/**
 * Generates a Fake Event Command with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ type: 'fakeEvent', eventName: 'Fake Event', eventType: 'com.adobe.eventType.fake', eventSource: 'com.adobe.eventSource.responseContent', vendor: 'com.adobe.griffon.mobile', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootType: 'control' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: fakeEventCommand_json_1["default"], get: get }, customExports), { getType: getType, getDetail: getDetail, getDetailKey: getDetailKey, getEventName: getEventName, getEventType: getEventType, getEventSource: getEventSource, getEventData: getEventData, getEventDataKey: getEventDataKey, isMatch: isMatch, matcher: matcher, TYPE: TYPE, VENDOR: VENDOR, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
