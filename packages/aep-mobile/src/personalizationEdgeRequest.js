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
var personalizationEdgeRequest_json_1 = __importDefault(require("../schemas/personalizationEdgeRequest.json"));
/**
 * Contains constants and functions for a Edge Personalization Request.
 *
 * The structure for a Edge Personalization Request is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       xdm: {
 *         eventType: 'personalization.request'
 *       },
 *       query: {
 *         personalization: {
 *           decisionScopes: <array>,
 *         },
 *       },
 *       datasetId: <string>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.edge'
 *     ACPExtensionEventName: <string>,
 *     ACPExtensionEventNumber: <integer>,
 *     ACPExtensionEventUniqueIdentifier: <string>,
 *   },
 *   type: 'generic'
 *   vendor: <string>,
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace personalizationEdgeRequest
 */
/**
 * Paths for the keys on a Edge Personalization Request
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
    eventData: 'payload.ACPExtensionEventData',
    /** The XDM data send to the server.<br />Path is `payload.ACPExtensionEventData.xdm`. */
    xdm: 'payload.ACPExtensionEventData.xdm',
    /** The type of event on the edge to execute.<br />Path is `payload.ACPExtensionEventData.xdm.eventType`. */
    edgeEventType: 'payload.ACPExtensionEventData.xdm.eventType',
    /** Data to request from the edge.<br />Path is `payload.ACPExtensionEventData.query`. */
    query: 'payload.ACPExtensionEventData.query',
    /** The personalization details.<br />Path is `payload.ACPExtensionEventData.query.personalization`. */
    personalization: 'payload.ACPExtensionEventData.query.personalization',
    /** List of decision scopes to load.<br />Path is `payload.ACPExtensionEventData.query.personalization.decisionScopes`. */
    decisionScopes: 'payload.ACPExtensionEventData.query.personalization.decisionScopes',
    /** The dataset to apply the XDM data to.<br />Path is `payload.ACPExtensionEventData.datasetId`. */
    datasetId: 'payload.ACPExtensionEventData.datasetId',
    /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
    eventSource: 'payload.ACPExtensionEventSource',
    /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
    eventType: 'payload.ACPExtensionEventType',
    /** The name of the event.<br />Path is `payload.ACPExtensionEventName`. */
    eventName: 'payload.ACPExtensionEventName',
    /** The event number generated by the SDK.<br />Path is `payload.ACPExtensionEventNumber`. */
    sdkEventNumber: 'payload.ACPExtensionEventNumber',
    /** The unique event id.<br />Path is `payload.ACPExtensionEventUniqueIdentifier`. */
    eventId: 'payload.ACPExtensionEventUniqueIdentifier',
    /** The type of event.<br />Path is `type`. */
    rootType: 'type',
    /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
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
var parentDepth = 3;
/**
 * A label that can be used when describing this object
 */
var label = 'Edge Personalization Request';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `edgeEventType` for a Edge Personalization Request.
 *
 * Path is `payload,ACPExtensionEventData,xdm,eventType`.
 *
 * @constant
 */
var EDGE_EVENT_TYPE = 'personalization.request';
/**
 * The value for `eventSource` for a Edge Personalization Request.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
var EVENT_SOURCE = 'com.adobe.eventsource.requestcontent';
/**
 * The value for `eventType` for a Edge Personalization Request.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
var EVENT_TYPE = 'com.adobe.eventtype.edge';
/**
 * The value for `rootType` for a Edge Personalization Request.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'generic';
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
 * Returns the `edgeEventType` from the Edge Personalization Request.
 * This is the the type of event on the edge to execute.
 *
 * Path is `payload,ACPExtensionEventData,xdm,eventType`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
var getEdgeEventType = kit.search(path.edgeEventType);
/**
 * Returns the `personalization` from the Edge Personalization Request.
 * This is the the personalization details.
 *
 * Path is `payload,ACPExtensionEventData,query,personalization`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {object}
 */
var getPersonalization = kit.search(path.personalization);
/**
 * Returns the data using the specified path from the personalization
 * of the Edge Personalization Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Edge Personalization Request instance
 * @returns {*}
 */
var getPersonalizationKey = kit.curry(function (searchPath, source) { return kit.search(path.personalization + "." + searchPath, source); });
/**
 * Returns the `decisionScopes` from the Edge Personalization Request.
 * This is the list of decision scopes to load.
 *
 * Path is `payload,ACPExtensionEventData,query,personalization,decisionScopes`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {Array}
 */
var getDecisionScopes = kit.search(path.decisionScopes);
/**
 * Matcher can be used to find matching Edge Personalization Request objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.ACPExtensionEventData.xdm.eventType==`personalization.request`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.requestcontent`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.edge`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Edge Personalization Request event.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Edge Personalization Request with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ edgeEventType: 'personalization.request', eventSource: 'com.adobe.eventsource.requestcontent', eventType: 'com.adobe.eventtype.edge', rootType: 'generic' }, input)); };
/**
 * Generates a Edge Personalization Request with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ xdm: { eventType: 'commerce.purchases' }, edgeEventType: 'personalization.request', datasetId: 'abcdefg', eventSource: 'com.adobe.eventsource.requestcontent', eventType: 'com.adobe.eventtype.edge', rootType: 'generic', vendor: 'com.adobe.mobile.sdk', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: personalizationEdgeRequest_json_1["default"], get: get }, customExports), { getEdgeEventType: getEdgeEventType, getPersonalization: getPersonalization, getPersonalizationKey: getPersonalizationKey, getDecisionScopes: getDecisionScopes, isMatch: isMatch, matcher: matcher, EDGE_EVENT_TYPE: EDGE_EVENT_TYPE, EVENT_SOURCE: EVENT_SOURCE, EVENT_TYPE: EVENT_TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
