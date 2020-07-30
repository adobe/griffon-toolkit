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

import * as R from 'ramda';
import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/lifecycleStart.json';

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
const path = {
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

  /** Used in calculdating length of session.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.ignoredsessionlength`. */
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
const parentDepth = 2;

/**
 * A label that can be used when describing this object
 */
const label = 'Lifecycle Start';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Lifecycle Start.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';

/**
 * The value for `eventType` for a Lifecycle Start.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.lifecycle';

/**
 * The value for `rootType` for a Lifecycle Start.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'generic';

/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = R.curry((alias, data) => kit.search(path[alias] || alias, data));

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
const getMaxSessionLength = kit.search(path.maxSessionLength);

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
const getSessionEvent = kit.search(path.sessionEvent);

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
const getContextData = kit.search(path.contextData);

/**
 * Returns the data using the specified path from the contextData
 * of the Lifecycle Start.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Lifecycle Start instance
 * @returns {*}
 */
const getContextDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.contextData}.${searchPath}`, source)
);

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
const getAppId = kit.search(path.appId);

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
const getLaunches = kit.search(path.launches);

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
const getCrashEvent = kit.search(path.crashEvent);

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
const getDeviceName = kit.search(path.deviceName);

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
const getHourOfDay = kit.search(path.hourOfDay);

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
const getDaysSinceLastUse = kit.search(path.daysSinceLastUse);

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
const getRunMode = kit.search(path.runMode);

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
const getPreviousOsVersion = kit.search(path.previousOsVersion);

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
const getLocale = kit.search(path.locale);

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
const getCarrierName = kit.search(path.carrierName);

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
const getDaysSinceFirstUse = kit.search(path.daysSinceFirstUse);

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
const getDayOfWeek = kit.search(path.dayOfWeek);

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
const getLaunchEvent = kit.search(path.launchEvent);

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
const getPreviousAppId = kit.search(path.previousAppId);

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
const getResolution = kit.search(path.resolution);

/**
 * Returns the `ignoredSessionLength` from the Lifecycle Start.
 * This is the used in calculdating length of session.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,ignoredsessionlength`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getIgnoredSessionLength = kit.search(path.ignoredSessionLength);

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
const getOsVersion = kit.search(path.osVersion);

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
const getStartTimestamp = kit.search(path.startTimestamp);

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
const getPreviousSessionPauseTimestamp = kit.search(path.previousSessionPauseTimestamp);

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
const getPreviousSessionStartTimestamp = kit.search(path.previousSessionStartTimestamp);

/**
 * Matcher can be used to find matching Lifecycle Start objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
  'payload.ACPExtensionEventType==\'com.adobe.eventtype.lifecycle\'',
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
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Lifecycle Start with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.lifecycle',
  rootType: 'generic',
  ...input
});

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
const mock = (input) => kit.expandWithPaths(path, {
  maxSessionLength: 604800,
  sessionEvent: 'start',
  appId: 'TestApp-Swift 1.0',
  launches: '5',
  crashEvent: 'CrashEvent',
  deviceName: 'iPhone XR',
  hourOfDay: '10',
  daysSinceLastUse: '1',
  runMode: 'Application',
  previousOsVersion: 'iOS 14.0',
  locale: 'en-US',
  carrierName: 'Verizon',
  daysSinceFirstUse: '7',
  dayOfWeek: '3',
  launchEvent: 'LaunchEvent',
  previousAppId: 'TestApp-Swift 0.9',
  resolution: '1242x2688',
  ignoredSessionLength: '-1595526608',
  osVersion: 'iOS 14.0',
  startTimestamp: 1595526618,
  previousSessionStartTimestamp: 1595526608,
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.lifecycle',
  rootType: 'generic',
  vendor: 'com.adobe.mobile.sdk',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootId: '123',
  ...input
});

/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getMaxSessionLength,
  getSessionEvent,
  getContextData,
  getContextDataKey,
  getAppId,
  getLaunches,
  getCrashEvent,
  getDeviceName,
  getHourOfDay,
  getDaysSinceLastUse,
  getRunMode,
  getPreviousOsVersion,
  getLocale,
  getCarrierName,
  getDaysSinceFirstUse,
  getDayOfWeek,
  getLaunchEvent,
  getPreviousAppId,
  getResolution,
  getIgnoredSessionLength,
  getOsVersion,
  getStartTimestamp,
  getPreviousSessionPauseTimestamp,
  getPreviousSessionStartTimestamp,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
