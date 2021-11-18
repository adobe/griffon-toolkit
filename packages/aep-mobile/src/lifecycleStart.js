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
var lifecycleStart_json_1 = __importDefault(require("../schemas/lifecycleStart.json"));
/**
 * Contains constants and functions for a Lifecycle Start.
 *
 * The structure for a Lifecycle Start is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       maxsessionlength: <integer>,
 *       sessionevent: <string>,
 *       lifecyclecontextdata: {
 *         appid: <string>,
 *         launches: <string>,
 *         crashevent: <string>,
 *         devicename: <string>,
 *         hourofday: <string>,
 *         dayssincelastuse: <string>,
 *         runmode: <string>,
 *         previousosversion: <string>,
 *         locale: <string>,
 *         carriername: <string>,
 *         dayssincefirstuse: <string>,
 *         dayofweek: <string>,
 *         launchevent: <string>,
 *         previousappid: <string>,
 *         resolution: <string>,
 *         ignoredsessionlength: <string>,
 *         osversion: <string>,
 *       },
 *       starttimestampseconds: <number>,
 *       previoussessionpausetimestampseconds: <number>,
 *       previoussessionstarttimestampseconds: <number>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.lifecycle'
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
 * @namespace lifecycleStart
 */
/**
 * Paths for the keys on a Lifecycle Start
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The lifecycle data.<br />Path is `payload.ACPExtensionEventData`. */
    eventData: 'payload.ACPExtensionEventData',
    /** The amount of time before a session expires.<br />Path is `payload.ACPExtensionEventData.maxsessionlength`. */
    maxSessionLength: 'payload.ACPExtensionEventData.maxsessionlength',
    /** The type of event that triggers the new session.<br />Path is `payload.ACPExtensionEventData.sessionevent`. */
    sessionEvent: 'payload.ACPExtensionEventData.sessionevent',
    /** Context data about the device.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata`. */
    contextData: 'payload.ACPExtensionEventData.lifecyclecontextdata',
    /** The id of the application.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.appid`. */
    appId: 'payload.ACPExtensionEventData.lifecyclecontextdata.appid',
    /** The number of times the app has launched.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.launches`. */
    launches: 'payload.ACPExtensionEventData.lifecyclecontextdata.launches',
    /** The name of the applications crash event.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.crashevent`. */
    crashEvent: 'payload.ACPExtensionEventData.lifecyclecontextdata.crashevent',
    /** The name of device.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.devicename`. */
    deviceName: 'payload.ACPExtensionEventData.lifecyclecontextdata.devicename',
    /** The hour in the day that the app launched.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.hourofday`. */
    hourOfDay: 'payload.ACPExtensionEventData.lifecyclecontextdata.hourofday',
    /** Number of days since the app was last launched.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.dayssincelastuse`. */
    daysSinceLastUse: 'payload.ACPExtensionEventData.lifecyclecontextdata.dayssincelastuse',
    /** Type of application format. Will change if on a smart device..<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.runmode`. */
    runMode: 'payload.ACPExtensionEventData.lifecyclecontextdata.runmode',
    /** The version of the OS the last time the app launched.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.previousosversion`. */
    previousOsVersion: 'payload.ACPExtensionEventData.lifecyclecontextdata.previousosversion',
    /** The language the device is running under.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.locale`. */
    locale: 'payload.ACPExtensionEventData.lifecyclecontextdata.locale',
    /** The phone provider the device goes through.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.carriername`. */
    carrierName: 'payload.ACPExtensionEventData.lifecyclecontextdata.carriername',
    /** The number of days since the first launch of the application.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.dayssincefirstuse`. */
    daysSinceFirstUse: 'payload.ACPExtensionEventData.lifecyclecontextdata.dayssincefirstuse',
    /** The day of week that the app launched.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.dayofweek`. */
    dayOfWeek: 'payload.ACPExtensionEventData.lifecyclecontextdata.dayofweek',
    /** The name of the application launch event.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.launchevent`. */
    launchEvent: 'payload.ACPExtensionEventData.lifecyclecontextdata.launchevent',
    /** The id of the application the last time the app was launched.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.previousappid`. */
    previousAppId: 'payload.ACPExtensionEventData.lifecyclecontextdata.previousappid',
    /** The resolution of the device.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.resolution`. */
    resolution: 'payload.ACPExtensionEventData.lifecyclecontextdata.resolution',
    /** Used in calculating length of session.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.ignoredsessionlength`. */
    ignoredSessionLength: 'payload.ACPExtensionEventData.lifecyclecontextdata.ignoredsessionlength',
    /** The version of the OS.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.osversion`. */
    osVersion: 'payload.ACPExtensionEventData.lifecyclecontextdata.osversion',
    /** The timestamp when the session started.<br />Path is `payload.ACPExtensionEventData.starttimestampseconds`. */
    startTimestamp: 'payload.ACPExtensionEventData.starttimestampseconds',
    /** The timestamp when the previous session was paused (if applicable).<br />Path is `payload.ACPExtensionEventData.previoussessionpausetimestampseconds`. */
    previousSessionPauseTimestamp: 'payload.ACPExtensionEventData.previoussessionpausetimestampseconds',
    /** The timestamp when the previous session was started.<br />Path is `payload.ACPExtensionEventData.previoussessionstarttimestampseconds`. */
    previousSessionStartTimestamp: 'payload.ACPExtensionEventData.previoussessionstarttimestampseconds',
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
var label = 'Lifecycle Start';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `eventSource` for a Lifecycle Start.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
var EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';
/**
 * The value for `eventType` for a Lifecycle Start.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
var EVENT_TYPE = 'com.adobe.eventtype.lifecycle';
/**
 * The value for `rootType` for a Lifecycle Start.
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
 * Returns the `maxSessionLength` from the Lifecycle Start.
 * This is the the amount of time before a session expires.
 *
 * Path is `payload,ACPExtensionEventData,maxsessionlength`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
var getMaxSessionLength = kit.search(path.maxSessionLength);
/**
 * Returns the `sessionEvent` from the Lifecycle Start.
 * This is the the type of event that triggers the new session.
 *
 * Path is `payload,ACPExtensionEventData,sessionevent`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getSessionEvent = kit.search(path.sessionEvent);
/**
 * Returns the `contextData` from the Lifecycle Start.
 * This is the context data about the device.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {object}
 */
var getContextData = kit.search(path.contextData);
/**
 * Returns the data using the specified path from the contextData
 * of the Lifecycle Start.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Lifecycle Start instance
 * @returns {*}
 */
var getContextDataKey = kit.curry(function (searchPath, source) { return kit.search(path.contextData + "." + searchPath, source); });
/**
 * Returns the `appId` from the Lifecycle Start.
 * This is the the id of the application.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,appid`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getAppId = kit.search(path.appId);
/**
 * Returns the `launches` from the Lifecycle Start.
 * This is the the number of times the app has launched.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,launches`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getLaunches = kit.search(path.launches);
/**
 * Returns the `crashEvent` from the Lifecycle Start.
 * This is the the name of the applications crash event.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,crashevent`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getCrashEvent = kit.search(path.crashEvent);
/**
 * Returns the `deviceName` from the Lifecycle Start.
 * This is the the name of device.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,devicename`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getDeviceName = kit.search(path.deviceName);
/**
 * Returns the `hourOfDay` from the Lifecycle Start.
 * This is the the hour in the day that the app launched.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,hourofday`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getHourOfDay = kit.search(path.hourOfDay);
/**
 * Returns the `daysSinceLastUse` from the Lifecycle Start.
 * This is the number of days since the app was last launched.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,dayssincelastuse`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getDaysSinceLastUse = kit.search(path.daysSinceLastUse);
/**
 * Returns the `runMode` from the Lifecycle Start.
 * This is the type of application format. Will change if on a smart device..
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,runmode`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getRunMode = kit.search(path.runMode);
/**
 * Returns the `previousOsVersion` from the Lifecycle Start.
 * This is the the version of the OS the last time the app launched.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,previousosversion`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getPreviousOsVersion = kit.search(path.previousOsVersion);
/**
 * Returns the `locale` from the Lifecycle Start.
 * This is the the language the device is running under.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,locale`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getLocale = kit.search(path.locale);
/**
 * Returns the `carrierName` from the Lifecycle Start.
 * This is the the phone provider the device goes through.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,carriername`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getCarrierName = kit.search(path.carrierName);
/**
 * Returns the `daysSinceFirstUse` from the Lifecycle Start.
 * This is the the number of days since the first launch of the application.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,dayssincefirstuse`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getDaysSinceFirstUse = kit.search(path.daysSinceFirstUse);
/**
 * Returns the `dayOfWeek` from the Lifecycle Start.
 * This is the the day of week that the app launched.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,dayofweek`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getDayOfWeek = kit.search(path.dayOfWeek);
/**
 * Returns the `launchEvent` from the Lifecycle Start.
 * This is the the name of the application launch event.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,launchevent`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getLaunchEvent = kit.search(path.launchEvent);
/**
 * Returns the `previousAppId` from the Lifecycle Start.
 * This is the the id of the application the last time the app was launched.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,previousappid`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getPreviousAppId = kit.search(path.previousAppId);
/**
 * Returns the `resolution` from the Lifecycle Start.
 * This is the the resolution of the device.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,resolution`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getResolution = kit.search(path.resolution);
/**
 * Returns the `ignoredSessionLength` from the Lifecycle Start.
 * This is the used in calculating length of session.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,ignoredsessionlength`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getIgnoredSessionLength = kit.search(path.ignoredSessionLength);
/**
 * Returns the `osVersion` from the Lifecycle Start.
 * This is the the version of the OS.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,osversion`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
var getOsVersion = kit.search(path.osVersion);
/**
 * Returns the `startTimestamp` from the Lifecycle Start.
 * This is the the timestamp when the session started.
 *
 * Path is `payload,ACPExtensionEventData,starttimestampseconds`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
var getStartTimestamp = kit.search(path.startTimestamp);
/**
 * Returns the `previousSessionPauseTimestamp` from the Lifecycle Start.
 * This is the the timestamp when the previous session was paused (if applicable).
 *
 * Path is `payload,ACPExtensionEventData,previoussessionpausetimestampseconds`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
var getPreviousSessionPauseTimestamp = kit.search(path.previousSessionPauseTimestamp);
/**
 * Returns the `previousSessionStartTimestamp` from the Lifecycle Start.
 * This is the the timestamp when the previous session was started.
 *
 * Path is `payload,ACPExtensionEventData,previoussessionstarttimestampseconds`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
var getPreviousSessionStartTimestamp = kit.search(path.previousSessionStartTimestamp);
/**
 * Matcher can be used to find matching Lifecycle Start objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.responsecontent`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.lifecycle`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Lifecycle Start event.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Lifecycle Start with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ eventSource: 'com.adobe.eventsource.responsecontent', eventType: 'com.adobe.eventtype.lifecycle', rootType: 'generic' }, input)); };
/**
 * Generates a Lifecycle Start with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ maxSessionLength: 604800, sessionEvent: 'start', appId: 'TestApp-Swift 1.0', launches: '5', crashEvent: 'CrashEvent', deviceName: 'iPhone XR', hourOfDay: '10', daysSinceLastUse: '1', runMode: 'Application', previousOsVersion: 'iOS 14.0', locale: 'en-US', carrierName: 'Verizon', daysSinceFirstUse: '7', dayOfWeek: '3', launchEvent: 'LaunchEvent', previousAppId: 'TestApp-Swift 0.9', resolution: '1242x2688', ignoredSessionLength: '-1595526608', osVersion: 'iOS 14.0', startTimestamp: 1595526618, previousSessionPauseTimestamp: 0, previousSessionStartTimestamp: 1595526608, eventSource: 'com.adobe.eventsource.responsecontent', eventType: 'com.adobe.eventtype.lifecycle', rootType: 'generic', vendor: 'com.adobe.mobile.sdk', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: lifecycleStart_json_1["default"], get: get }, customExports), { getMaxSessionLength: getMaxSessionLength, getSessionEvent: getSessionEvent, getContextData: getContextData, getContextDataKey: getContextDataKey, getAppId: getAppId, getLaunches: getLaunches, getCrashEvent: getCrashEvent, getDeviceName: getDeviceName, getHourOfDay: getHourOfDay, getDaysSinceLastUse: getDaysSinceLastUse, getRunMode: getRunMode, getPreviousOsVersion: getPreviousOsVersion, getLocale: getLocale, getCarrierName: getCarrierName, getDaysSinceFirstUse: getDaysSinceFirstUse, getDayOfWeek: getDayOfWeek, getLaunchEvent: getLaunchEvent, getPreviousAppId: getPreviousAppId, getResolution: getResolution, getIgnoredSessionLength: getIgnoredSessionLength, getOsVersion: getOsVersion, getStartTimestamp: getStartTimestamp, getPreviousSessionPauseTimestamp: getPreviousSessionPauseTimestamp, getPreviousSessionStartTimestamp: getPreviousSessionStartTimestamp, isMatch: isMatch, matcher: matcher, EVENT_SOURCE: EVENT_SOURCE, EVENT_TYPE: EVENT_TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
