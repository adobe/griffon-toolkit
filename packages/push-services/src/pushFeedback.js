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
var pushFeedback_json_1 = __importDefault(require("../schemas/pushFeedback.json"));
/**
 * Contains constants and functions for a Push Request Feedback.
 *
 * The structure for a Push Request Feedback is as follows:
 * ```
 * {
 *   payload: {
 *     event: 'feedback sent to pipeline'
 *     responseCode: <integer>,
 *     responseMessage: <string>,
 *     feedback: {
 *       groupID: <string>,
 *       platform: <string>,
 *       status: <string>,
 *     },
 *   },
 *   type: 'Push Service'
 *   vendor: 'com.adobe.cepheus'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace pushFeedback
 */
/**
 * Paths for the keys on a Push Request Feedback
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The name of the event.<br />Path is `payload.event`. */
    eventName: 'payload.event',
    /** Response code.<br />Path is `payload.responseCode`. */
    responseCode: 'payload.responseCode',
    /** Response message.<br />Path is `payload.responseMessage`. */
    responseMessage: 'payload.responseMessage',
    /** The response.<br />Path is `payload.feedback`. */
    feedback: 'payload.feedback',
    /** id to stitch the requests together.<br />Path is `payload.feedback.groupID`. */
    groupId: 'payload.feedback.groupID',
    /** The platform to send the push to.<br />Path is `payload.feedback.platform`. */
    platform: 'payload.feedback.platform',
    /** The status of the request.<br />Path is `payload.feedback.status`. */
    status: 'payload.feedback.status',
    /** The type of event.<br />Path is `type`. */
    rootType: 'type',
    /** The vendor of the service that sent the event.<br />Path is `vendor`. */
    vendor: 'vendor',
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
var label = 'Push Request Feedback';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `eventName` for a Push Request Feedback.
 *
 * Path is `payload,event`.
 *
 * @constant
 */
var EVENT_NAME = 'feedback sent to pipeline';
/**
 * The value for `rootType` for a Push Request Feedback.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'Push Service';
/**
 * The value for `vendor` for a Push Request Feedback.
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
 * Returns the `eventName` from the Push Request Feedback.
 * This is the the name of the event.
 *
 * Path is `payload,event`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {string}
 */
var getEventName = kit.search(path.eventName);
/**
 * Returns the `responseCode` from the Push Request Feedback.
 * This is the response code.
 *
 * Path is `payload,responseCode`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {number}
 */
var getResponseCode = kit.search(path.responseCode);
/**
 * Returns the `responseMessage` from the Push Request Feedback.
 * This is the response message.
 *
 * Path is `payload,responseMessage`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {string}
 */
var getResponseMessage = kit.search(path.responseMessage);
/**
 * Returns the `feedback` from the Push Request Feedback.
 * This is the the response.
 *
 * Path is `payload,feedback`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {object}
 */
var getFeedback = kit.search(path.feedback);
/**
 * Returns the data using the specified path from the feedback
 * of the Push Request Feedback.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Push Request Feedback instance
 * @returns {*}
 */
var getFeedbackKey = kit.curry(function (searchPath, source) { return kit.search(path.feedback + "." + searchPath, source); });
/**
 * Returns the `groupId` from the Push Request Feedback.
 * This is the id to stitch the requests together.
 *
 * Path is `payload,feedback,groupID`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {string}
 */
var getGroupId = kit.search(path.groupId);
/**
 * Returns the `platform` from the Push Request Feedback.
 * This is the the platform to send the push to.
 *
 * Path is `payload,feedback,platform`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {string}
 */
var getPlatform = kit.search(path.platform);
/**
 * Returns the `status` from the Push Request Feedback.
 * This is the the status of the request.
 *
 * Path is `payload,feedback,status`.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {string}
 */
var getStatus = kit.search(path.status);
/**
 * Matcher can be used to find matching Push Request Feedback objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.event==`feedback sent to pipeline`',
    'type==`Push Service`',
    'vendor==`com.adobe.cepheus`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Push Request Feedback event.
 *
 * @function
 * @param {object} source The Push Request Feedback instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Push Request Feedback with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ eventName: 'feedback sent to pipeline', rootType: 'Push Service', vendor: 'com.adobe.cepheus' }, input)); };
/**
 * Generates a Push Request Feedback with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ eventName: 'feedback sent to pipeline', responseCode: 200, responseMessage: 'OK', groupId: 'the-group-id', platform: 'fcmV1', status: 'success', rootType: 'Push Service', vendor: 'com.adobe.cepheus', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: pushFeedback_json_1["default"], get: get }, customExports), { getEventName: getEventName, getResponseCode: getResponseCode, getResponseMessage: getResponseMessage, getFeedback: getFeedback, getFeedbackKey: getFeedbackKey, getGroupId: getGroupId, getPlatform: getPlatform, getStatus: getStatus, isMatch: isMatch, matcher: matcher, EVENT_NAME: EVENT_NAME, ROOT_TYPE: ROOT_TYPE, VENDOR: VENDOR, label: label, group: group, parentDepth: parentDepth });
