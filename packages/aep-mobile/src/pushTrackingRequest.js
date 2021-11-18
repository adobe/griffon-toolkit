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
var pushTrackingRequest_json_1 = __importDefault(require("../schemas/pushTrackingRequest.json"));
/**
 * Contains constants and functions for a AEP Edge Request.
 *
 * The structure for a AEP Edge Request is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       xdm: {
 *         pushNotificationTracking: {
 *           pushProviderMessageID: <string>,
 *           pushProvider: <string>,
 *         },
 *         eventType: <string>,
 *         _experience: {
 *           customerJourneyManagement: {
 *             messageExecution: {
 *               messageExecutionID: <string>,
 *               journeyVersionInstanceID: <string>,
 *               journeyVersionID: <string>,
 *               journeyActionID: <string>,
 *             },
 *           },
 *         },
 *       },
 *       datasetId: <string>,
 *       query: <object>,
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
 * @namespace pushTrackingRequest
 */
/**
 * Paths for the keys on a AEP Edge Request
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
    pushNotificationTracking: 'payload.ACPExtensionEventData.xdm.pushNotificationTracking',
    pushProviderMessageId: 'payload.ACPExtensionEventData.xdm.pushNotificationTracking.pushProviderMessageID',
    pushProvider: 'payload.ACPExtensionEventData.xdm.pushNotificationTracking.pushProvider',
    interactionType: 'payload.ACPExtensionEventData.xdm.eventType',
    experience: 'payload.ACPExtensionEventData.xdm._experience',
    customerJourneyManagement: 'payload.ACPExtensionEventData.xdm._experience.customerJourneyManagement',
    messageExecution: 'payload.ACPExtensionEventData.xdm._experience.customerJourneyManagement.messageExecution',
    messageExecutionId: 'payload.ACPExtensionEventData.xdm._experience.customerJourneyManagement.messageExecution.messageExecutionID',
    journeyVersionInstanceId: 'payload.ACPExtensionEventData.xdm._experience.customerJourneyManagement.messageExecution.journeyVersionInstanceID',
    journeyVersionId: 'payload.ACPExtensionEventData.xdm._experience.customerJourneyManagement.messageExecution.journeyVersionID',
    journeyActionId: 'payload.ACPExtensionEventData.xdm._experience.customerJourneyManagement.messageExecution.journeyActionID',
    /** The dataset to apply the XDM data to.<br />Path is `payload.ACPExtensionEventData.datasetId`. */
    datasetId: 'payload.ACPExtensionEventData.datasetId',
    /** Data to request from the edge.<br />Path is `payload.ACPExtensionEventData.query`. */
    query: 'payload.ACPExtensionEventData.query',
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
var label = 'AEP Edge Request';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `eventSource` for a AEP Edge Request.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
var EVENT_SOURCE = 'com.adobe.eventsource.requestcontent';
/**
 * The value for `eventType` for a AEP Edge Request.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
var EVENT_TYPE = 'com.adobe.eventtype.edge';
/**
 * The value for `rootType` for a AEP Edge Request.
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
 * Returns the `pushNotificationTracking` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,pushNotificationTracking`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {object}
 */
var getPushNotificationTracking = kit.search(path.pushNotificationTracking);
/**
 * Returns the data using the specified path from the pushNotificationTracking
 * of the AEP Edge Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The AEP Edge Request instance
 * @returns {*}
 */
var getPushNotificationTrackingKey = kit.curry(function (searchPath, source) { return kit.search(path.pushNotificationTracking + "." + searchPath, source); });
/**
 * Returns the `pushProviderMessageId` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,pushNotificationTracking,pushProviderMessageID`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getPushProviderMessageId = kit.search(path.pushProviderMessageId);
/**
 * Returns the `pushProvider` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,pushNotificationTracking,pushProvider`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getPushProvider = kit.search(path.pushProvider);
/**
 * Returns the `interactionType` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,eventType`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getInteractionType = kit.search(path.interactionType);
/**
 * Returns the `experience` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {object}
 */
var getExperience = kit.search(path.experience);
/**
 * Returns the data using the specified path from the experience
 * of the AEP Edge Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The AEP Edge Request instance
 * @returns {*}
 */
var getExperienceKey = kit.curry(function (searchPath, source) { return kit.search(path.experience + "." + searchPath, source); });
/**
 * Returns the `customerJourneyManagement` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience,customerJourneyManagement`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {object}
 */
var getCustomerJourneyManagement = kit.search(path.customerJourneyManagement);
/**
 * Returns the data using the specified path from the customerJourneyManagement
 * of the AEP Edge Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The AEP Edge Request instance
 * @returns {*}
 */
var getCustomerJourneyManagementKey = kit.curry(function (searchPath, source) { return kit.search(path.customerJourneyManagement + "." + searchPath, source); });
/**
 * Returns the `messageExecution` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience,customerJourneyManagement,messageExecution`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {object}
 */
var getMessageExecution = kit.search(path.messageExecution);
/**
 * Returns the data using the specified path from the messageExecution
 * of the AEP Edge Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The AEP Edge Request instance
 * @returns {*}
 */
var getMessageExecutionKey = kit.curry(function (searchPath, source) { return kit.search(path.messageExecution + "." + searchPath, source); });
/**
 * Returns the `messageExecutionId` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience,customerJourneyManagement,messageExecution,messageExecutionID`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getMessageExecutionId = kit.search(path.messageExecutionId);
/**
 * Returns the `journeyVersionInstanceId` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience,customerJourneyManagement,messageExecution,journeyVersionInstanceID`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getJourneyVersionInstanceId = kit.search(path.journeyVersionInstanceId);
/**
 * Returns the `journeyVersionId` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience,customerJourneyManagement,messageExecution,journeyVersionID`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getJourneyVersionId = kit.search(path.journeyVersionId);
/**
 * Returns the `journeyActionId` from the AEP Edge Request.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,xdm,_experience,customerJourneyManagement,messageExecution,journeyActionID`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
var getJourneyActionId = kit.search(path.journeyActionId);
/**
 * Matcher can be used to find matching AEP Edge Request objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.ACPExtensionEventData.xdm.pushNotificationTracking.pushProviderMessageID',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.requestcontent`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.edge`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's AEP Edge Request event.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a AEP Edge Request with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ eventSource: 'com.adobe.eventsource.requestcontent', eventType: 'com.adobe.eventtype.edge', rootType: 'generic' }, input)); };
/**
 * Generates a AEP Edge Request with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ xdm: { eventType: 'commerce.purchases' }, pushProviderMessageId: '0:1626714665180817%a9278edff9fd7ecd', pushProvider: 'fcm', interactionType: 'pushTracking.applicationOpened', messageExecutionId: 'UPU-38948864', journeyVersionInstanceId: 'd249f6f9-0cab-4d75-a64e-3d5dd50c5d76', journeyVersionId: '70e59e68-6ddf-46a7-bc7d-97e7a2f620ce', journeyActionId: '70e59e68-6ddf-46a7-bc7d-97e7a2f620ce', datasetId: 'abcdefg', eventSource: 'com.adobe.eventsource.requestcontent', eventType: 'com.adobe.eventtype.edge', rootType: 'generic', vendor: 'com.adobe.mobile.sdk', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: pushTrackingRequest_json_1["default"], get: get }, customExports), { getPushNotificationTracking: getPushNotificationTracking, getPushNotificationTrackingKey: getPushNotificationTrackingKey, getPushProviderMessageId: getPushProviderMessageId, getPushProvider: getPushProvider, getInteractionType: getInteractionType, getExperience: getExperience, getExperienceKey: getExperienceKey, getCustomerJourneyManagement: getCustomerJourneyManagement, getCustomerJourneyManagementKey: getCustomerJourneyManagementKey, getMessageExecution: getMessageExecution, getMessageExecutionKey: getMessageExecutionKey, getMessageExecutionId: getMessageExecutionId, getJourneyVersionInstanceId: getJourneyVersionInstanceId, getJourneyVersionId: getJourneyVersionId, getJourneyActionId: getJourneyActionId, isMatch: isMatch, matcher: matcher, EVENT_SOURCE: EVENT_SOURCE, EVENT_TYPE: EVENT_TYPE, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
