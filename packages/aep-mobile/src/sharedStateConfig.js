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
var sharedStateConfig_json_1 = __importDefault(require("../schemas/sharedStateConfig.json"));
/**
 * Contains constants and functions for a Shared State - Versions.
 *
 * The structure for a Shared State - Versions is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       stateowner: 'com.adobe.module.configuration'
 *     },
 *     metadata: {
 *       state.data: {
 *         build.environment: <string>,
 *         experienceCloud.org: <string>,
 *         property.id: <string>,
 *         rules.url: <string>,
 *       },
 *       xdm.state.data: <object>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.sharedstate'
 *     ACPExtensionEventType: 'com.adobe.eventtype.hub'
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
 * @namespace sharedStateConfig
 */
/**
 * Paths for the keys on a Shared State - Versions
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The full list of current configuration values.<br />Path is `payload.ACPExtensionEventData`. */
    eventData: 'payload.ACPExtensionEventData',
    /** In SDK extension that owns the shared state that is being updated.<br />Path is `payload.ACPExtensionEventData.stateowner`. */
    stateOwner: 'payload.ACPExtensionEventData.stateowner',
    /** Additional metadata that is attacked to SDK events.<br />Path is `payload.metadata`. */
    metadata: 'payload.metadata',
    /** The data that is being written to shared state..<br />Path is `payload.metadata."state.data"`. */
    stateData: 'payload.metadata."state.data"',
    /** In the Launch UI, the type of environment this configuration was generated for.<br />Path is `payload.metadata."state.data"."build.environment"`. */
    buildEnvironment: 'payload.metadata."state.data"."build.environment"',
    /** The IMS Org that the mobile app's config was created by.<br />Path is `payload.metadata."state.data"."experienceCloud.org"`. */
    experienceCloudOrg: 'payload.metadata."state.data"."experienceCloud.org"',
    /** The ID of the property inside launch.<br />Path is `payload.metadata."state.data"."property.id"`. */
    launchPropertyId: 'payload.metadata."state.data"."property.id"',
    /** The URL to download the rules configuration for the property.<br />Path is `payload.metadata."state.data"."rules.url"`. */
    rulesUrl: 'payload.metadata."state.data"."rules.url"',
    /** XDM data that is being written to shared state..<br />Path is `payload.metadata."xdm.state.data"`. */
    xdm: 'payload.metadata."xdm.state.data"',
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
var label = 'Shared State - Versions';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `stateOwner` for a Shared State - Versions.
 *
 * Path is `payload,ACPExtensionEventData,stateowner`.
 *
 * @constant
 */
var STATE_OWNER = 'com.adobe.module.configuration';
/**
 * The value for `eventSource` for a Shared State - Versions.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
var EVENT_SOURCE = 'com.adobe.eventsource.sharedstate';
/**
 * The value for `eventType` for a Shared State - Versions.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
var EVENT_TYPE = 'com.adobe.eventtype.hub';
/**
 * The value for `rootType` for a Shared State - Versions.
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
 * Returns the `buildEnvironment` from the Shared State - Versions.
 * This is the in the Launch UI, the type of environment this configuration was generated for.
 *
 * Path is `payload,metadata,state.data,build.environment`.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {string}
 */
var getBuildEnvironment = kit.search(path.buildEnvironment);
/**
 * Returns the `experienceCloudOrg` from the Shared State - Versions.
 * This is the the IMS Org that the mobile app's config was created by.
 *
 * Path is `payload,metadata,state.data,experienceCloud.org`.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {string}
 */
var getExperienceCloudOrg = kit.search(path.experienceCloudOrg);
/**
 * Returns the `launchPropertyId` from the Shared State - Versions.
 * This is the the ID of the property inside launch.
 *
 * Path is `payload,metadata,state.data,property.id`.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {string}
 */
var getLaunchPropertyId = kit.search(path.launchPropertyId);
/**
 * Returns the `rulesUrl` from the Shared State - Versions.
 * This is the the URL to download the rules configuration for the property.
 *
 * Path is `payload,metadata,state.data,rules.url`.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {string}
 */
var getRulesUrl = kit.search(path.rulesUrl);
/**
 * Matcher can be used to find matching Shared State - Versions objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.ACPExtensionEventData.stateowner==`com.adobe.module.configuration`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.sharedstate`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.hub`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Shared State - Versions event.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Shared State - Versions with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ stateOwner: 'com.adobe.module.configuration', eventSource: 'com.adobe.eventsource.sharedstate', eventType: 'com.adobe.eventtype.hub', rootType: 'generic' }, input)); };
/**
 * Generates a Shared State - Versions with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ stateOwner: 'com.adobe.module.configuration', stateData: { version: '2.1.3' }, buildEnvironment: 'dev', experienceCloudOrg: 'abc@AdobeOrg', launchPropertyId: 'abcd1234', rulesUrl: 'http://assets.adobedtm.com/abc/abcdefg-development-rules.zip', eventSource: 'com.adobe.eventsource.sharedstate', eventType: 'com.adobe.eventtype.hub', rootType: 'generic', vendor: 'com.adobe.mobile.sdk', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: sharedStateConfig_json_1["default"], get: get }, customExports), { getBuildEnvironment: getBuildEnvironment, getExperienceCloudOrg: getExperienceCloudOrg, getLaunchPropertyId: getLaunchPropertyId, getRulesUrl: getRulesUrl, isMatch: isMatch, matcher: matcher, STATE_OWNER: STATE_OWNER, EVENT_SOURCE: EVENT_SOURCE, EVENT_TYPE: EVENT_TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
