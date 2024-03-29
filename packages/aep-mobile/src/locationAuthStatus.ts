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

import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/locationAuthStatus.json';

/**
 * Contains constants and functions for a Location Auth Status.
 *
 * The structure for a Location Auth Status is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       authstatus: <string>,
 *       requesttype: 'requestsetauthorizationstatus'
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventSource.requestContent'
 *     ACPExtensionEventType: 'com.adobe.eventType.places'
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
 * @namespace locationAuthStatus
 */

/**
 * Paths for the keys on a Location Auth Status
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The response from the allow location popup in the app.<br />Path is `payload.ACPExtensionEventData.authstatus`. */
  status: 'payload.ACPExtensionEventData.authstatus',

  /** The type of request we are making.<br />Path is `payload.ACPExtensionEventData.requesttype`. */
  requestType: 'payload.ACPExtensionEventData.requesttype',

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
const parentDepth = 3;

/**
 * The name of this event. Same as the file name
 */
const uniqueName = 'locationAuthStatus';

/**
 * The package of this event
 */
const packageName = 'aep-mobile';

/**
 * The unique name of this event
 */
const label = 'Location Auth Status';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `requestType` for a Location Auth Status.
 *
 * Path is `payload,ACPExtensionEventData,requesttype`.
 *
 * @constant
 */
const REQUEST_TYPE = 'requestsetauthorizationstatus';

/**
 * The value for `eventSource` for a Location Auth Status.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventSource.requestContent';

/**
 * The value for `eventType` for a Location Auth Status.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventType.places';

/**
 * The value for `rootType` for a Location Auth Status.
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
 * @param {string} alias Path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = (alias, data) => {
  const func = (data2) => kit.search(path[alias] || alias, data2);
  if (!data) { return func; }
  return func(data);
};

/**
 * Returns the `status` from the Location Auth Status.
 * This is the the response from the allow location popup in the app.
 *
 * Path is `payload,ACPExtensionEventData,authstatus`.
 *
 * @function
 * @param {object} source The Location Auth Status instance
 * @returns {string}
 */
const getStatus = kit.search(path.status);

/**
 * Returns the `requestType` from the Location Auth Status.
 * This is the the type of request we are making.
 *
 * Path is `payload,ACPExtensionEventData,requesttype`.
 *
 * @function
 * @param {object} source The Location Auth Status instance
 * @returns {string}
 */
const getRequestType = kit.search(path.requestType);

/**
 * Matcher can be used to find matching Location Auth Status objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.requesttype==`requestsetauthorizationstatus`',
  kit.combineAny([
    'payload.ACPExtensionEventSource==`com.adobe.eventSource.requestContent`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.requestcontent`'
  ]),
  kit.combineAny([
    'payload.ACPExtensionEventType==`com.adobe.eventType.places`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.places`'
  ]),
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Location Auth Status event.
 *
 * @function
 * @param {object} source The Location Auth Status instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Location Auth Status with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  requestType: 'requestsetauthorizationstatus',
  eventSource: 'com.adobe.eventSource.requestContent',
  eventType: 'com.adobe.eventType.places',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Location Auth Status with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  status: 'always',
  requestType: 'requestsetauthorizationstatus',
  eventSource: 'com.adobe.eventSource.requestContent',
  eventType: 'com.adobe.eventType.places',
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
  getStatus,
  getRequestType,
  isMatch,
  matcher,
  REQUEST_TYPE,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
