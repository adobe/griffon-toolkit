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
var applicationUpgrade_json_1 = __importDefault(require("../schemas/applicationUpgrade.json"));
/**
 * Contains constants and functions for a Application Upgrade.
 *
 * The structure for a Application Upgrade is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.lifecycle'
 *     ACPExtensionEventData: {
 *       lifecyclecontextdata: {
 *         upgradeevent: <string>,
 *       },
 *     },
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
 * @namespace applicationUpgrade
 */
/**
 * Paths for the keys on a Application Upgrade
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
    eventSource: 'payload.ACPExtensionEventSource',
    /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
    eventType: 'payload.ACPExtensionEventType',
    /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
    data: 'payload.ACPExtensionEventData',
    /** Context data about the launch.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata`. */
    lifecycleContextData: 'payload.ACPExtensionEventData.lifecyclecontextdata',
    /** Whether this is an upgrade event.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.upgradeevent`. */
    upgradeevent: 'payload.ACPExtensionEventData.lifecyclecontextdata.upgradeevent',
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
var label = 'Application Upgrade';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `eventSource` for a Application Upgrade.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
var EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';
/**
 * The value for `eventType` for a Application Upgrade.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
var EVENT_TYPE = 'com.adobe.eventtype.lifecycle';
/**
 * The value for `rootType` for a Application Upgrade.
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
 * Returns the `data` from the Application Upgrade.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData`.
 *
 * @function
 * @param {object} source The Application Upgrade instance
 * @returns {object}
 */
var getData = kit.search(path.data);
/**
 * Returns the data using the specified path from the data
 * of the Application Upgrade.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Application Upgrade instance
 * @returns {*}
 */
var getDataKey = kit.curry(function (searchPath, source) { return kit.search(path.data + "." + searchPath, source); });
/**
 * Returns the `lifecycleContextData` from the Application Upgrade.
 * This is the context data about the launch.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata`.
 *
 * @function
 * @param {object} source The Application Upgrade instance
 * @returns {object}
 */
var getLifecycleContextData = kit.search(path.lifecycleContextData);
/**
 * Returns the data using the specified path from the lifecycleContextData
 * of the Application Upgrade.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Application Upgrade instance
 * @returns {*}
 */
var getLifecycleContextDataKey = kit.curry(function (searchPath, source) { return kit.search(path.lifecycleContextData + "." + searchPath, source); });
/**
 * Returns the `upgradeevent` from the Application Upgrade.
 * This is the whether this is an upgrade event.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,upgradeevent`.
 *
 * @function
 * @param {object} source The Application Upgrade instance
 * @returns {string}
 */
var getUpgradeevent = kit.search(path.upgradeevent);
/**
 * Matcher can be used to find matching Application Upgrade objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.responsecontent`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.lifecycle`',
    'payload.ACPExtensionEventData.lifecyclecontextdata.upgradeevent',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Application Upgrade event.
 *
 * @function
 * @param {object} source The Application Upgrade instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Application Upgrade with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ eventSource: 'com.adobe.eventsource.responsecontent', eventType: 'com.adobe.eventtype.lifecycle', rootType: 'generic' }, input)); };
/**
 * Generates a Application Upgrade with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ eventSource: 'com.adobe.eventsource.responsecontent', eventType: 'com.adobe.eventtype.lifecycle', rootType: 'generic', vendor: 'com.adobe.mobile.sdk', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: applicationUpgrade_json_1["default"], get: get }, customExports), { getData: getData, getDataKey: getDataKey, getLifecycleContextData: getLifecycleContextData, getLifecycleContextDataKey: getLifecycleContextDataKey, getUpgradeevent: getUpgradeevent, isMatch: isMatch, matcher: matcher, EVENT_SOURCE: EVENT_SOURCE, EVENT_TYPE: EVENT_TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
