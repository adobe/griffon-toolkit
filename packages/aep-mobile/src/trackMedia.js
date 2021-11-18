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
var trackMedia_json_1 = __importDefault(require("../schemas/trackMedia.json"));
/**
 * Contains constants and functions for a Track Media Event.
 *
 * The structure for a Track Media Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       trackerid: <string>,
 *       sessionid: <string>,
 *       event.name: <string>,
 *       event.param: <object>,
 *       event.metadata: <object>,
 *       event.timestamp: <number>,
 *       event.internal: <boolean>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.media.trackmedia'
 *     ACPExtensionEventType: 'com.adobe.eventtype.media'
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
 * @namespace trackMedia
 */
/**
 * Paths for the keys on a Track Media Event
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
    eventData: 'payload.ACPExtensionEventData',
    /** The unique tracker ID.<br />Path is `payload.ACPExtensionEventData.trackerid`. */
    trackerid: 'payload.ACPExtensionEventData.trackerid',
    /** The unique session ID.<br />Path is `payload.ACPExtensionEventData.sessionid`. */
    sessionid: 'payload.ACPExtensionEventData.sessionid',
    /** The event name.<br />Path is `payload.ACPExtensionEventData."event.name"`. */
    mediaEventName: 'payload.ACPExtensionEventData."event.name"',
    /** Information about the event based on the event type.<br />Path is `payload.ACPExtensionEventData."event.param"`. */
    eventParams: 'payload.ACPExtensionEventData."event.param"',
    /** An object with the standard and custom data describing the event.<br />Path is `payload.ACPExtensionEventData."event.metadata"`. */
    eventMetadata: 'payload.ACPExtensionEventData."event.metadata"',
    /** The event timestamp.<br />Path is `payload.ACPExtensionEventData."event.timestamp"`. */
    eventTimestamp: 'payload.ACPExtensionEventData."event.timestamp"',
    /** Display the event in griffon if set to false.<br />Path is `payload.ACPExtensionEventData."event.internal"`. */
    eventInternal: 'payload.ACPExtensionEventData."event.internal"',
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
var parentDepth = 2;
/**
 * A label that can be used when describing this object
 */
var label = 'Track Media Event';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `eventSource` for a Track Media Event.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
var EVENT_SOURCE = 'com.adobe.eventsource.media.trackmedia';
/**
 * The value for `eventType` for a Track Media Event.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
var EVENT_TYPE = 'com.adobe.eventtype.media';
/**
 * The value for `rootType` for a Track Media Event.
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
 * Returns the `trackerid` from the Track Media Event.
 * This is the the unique tracker ID.
 *
 * Path is `payload,ACPExtensionEventData,trackerid`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {string}
 */
var getTrackerid = kit.search(path.trackerid);
/**
 * Returns the `sessionid` from the Track Media Event.
 * This is the the unique session ID.
 *
 * Path is `payload,ACPExtensionEventData,sessionid`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {string}
 */
var getSessionid = kit.search(path.sessionid);
/**
 * Returns the `mediaEventName` from the Track Media Event.
 * This is the the event name.
 *
 * Path is `payload,ACPExtensionEventData,event.name`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {string}
 */
var getMediaEventName = kit.search(path.mediaEventName);
/**
 * Returns the `eventParams` from the Track Media Event.
 * This is the information about the event based on the event type.
 *
 * Path is `payload,ACPExtensionEventData,event.param`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {object}
 */
var getEventParams = kit.search(path.eventParams);
/**
 * Returns the data using the specified path from the eventParams
 * of the Track Media Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Track Media Event instance
 * @returns {*}
 */
var getEventParamsKey = kit.curry(function (searchPath, source) { return kit.search(path.eventParams + "." + searchPath, source); });
/**
 * Returns the `eventMetadata` from the Track Media Event.
 * This is the an object with the standard and custom data describing the event.
 *
 * Path is `payload,ACPExtensionEventData,event.metadata`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {object}
 */
var getEventMetadata = kit.search(path.eventMetadata);
/**
 * Returns the data using the specified path from the eventMetadata
 * of the Track Media Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Track Media Event instance
 * @returns {*}
 */
var getEventMetadataKey = kit.curry(function (searchPath, source) { return kit.search(path.eventMetadata + "." + searchPath, source); });
/**
 * Returns the `eventTimestamp` from the Track Media Event.
 * This is the the event timestamp.
 *
 * Path is `payload,ACPExtensionEventData,event.timestamp`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {number}
 */
var getEventTimestamp = kit.search(path.eventTimestamp);
/**
 * Returns the `eventInternal` from the Track Media Event.
 * This is the display the event in griffon if set to false.
 *
 * Path is `payload,ACPExtensionEventData,event.internal`.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {boolean}
 */
var getEventInternal = kit.search(path.eventInternal);
/**
 * Matcher can be used to find matching Track Media Event objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.ACPExtensionEventData."event.internal"==`false`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.media.trackmedia`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.media`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Track Media Event event.
 *
 * @function
 * @param {object} source The Track Media Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Track Media Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ eventSource: 'com.adobe.eventsource.media.trackmedia', eventType: 'com.adobe.eventtype.media', rootType: 'generic' }, input)); };
/**
 * Generates a Track Media Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ trackerid: 'trackerId123', sessionid: 'sessionid123', eventTimestamp: 1599617251119, eventInternal: false, eventSource: 'com.adobe.eventsource.media.trackmedia', eventType: 'com.adobe.eventtype.media', rootType: 'generic', vendor: 'com.adobe.mobile.sdk', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: trackMedia_json_1["default"], get: get }, customExports), { getTrackerid: getTrackerid, getSessionid: getSessionid, getMediaEventName: getMediaEventName, getEventParams: getEventParams, getEventParamsKey: getEventParamsKey, getEventMetadata: getEventMetadata, getEventMetadataKey: getEventMetadataKey, getEventTimestamp: getEventTimestamp, getEventInternal: getEventInternal, isMatch: isMatch, matcher: matcher, EVENT_SOURCE: EVENT_SOURCE, EVENT_TYPE: EVENT_TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
