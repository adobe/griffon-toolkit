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
import schema from '../schemas/edgeResponse.json';

/**
 * Contains constants and functions for a AEP Edge Response.
 *
 * The structure for a AEP Edge Response is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       requestId: <string>,
 *       requestEventId: <string>,
 *       type: <string>,
 *       payload: <array>,
 *     },
 *     ACPExtensionEventSource: <string>,
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
 * @namespace edgeResponse
 */

/**
 * Paths for the keys on a AEP Edge Response
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The request ID of the edge service request.<br />Path is `payload.ACPExtensionEventData.requestId`. */
  requestId: 'payload.ACPExtensionEventData.requestId',

  /** The event ID of the event that this is a response to.<br />Path is `payload.ACPExtensionEventData.requestEventId`. */
  requestEventId: 'payload.ACPExtensionEventData.requestEventId',

  /** The type of request that was made.<br />Path is `payload.ACPExtensionEventData.type`. */
  requestType: 'payload.ACPExtensionEventData.type',

  /** The information received in the response.<br />Path is `payload.ACPExtensionEventData.payload`. */
  requestPayload: 'payload.ACPExtensionEventData.payload',

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
const label = 'AEP Edge Response';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventType` for a AEP Edge Response.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.edge';

/**
 * The value for `rootType` for a AEP Edge Response.
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
 * Returns the `requestId` from the AEP Edge Response.
 * This is the the request ID of the edge service request.
 *
 * Path is `payload,ACPExtensionEventData,requestId`.
 *
 * @function
 * @param {object} source The AEP Edge Response instance
 * @returns {string}
 */
const getRequestId = kit.search(path.requestId);

/**
 * Returns the `requestEventId` from the AEP Edge Response.
 * This is the the event ID of the event that this is a response to.
 *
 * Path is `payload,ACPExtensionEventData,requestEventId`.
 *
 * @function
 * @param {object} source The AEP Edge Response instance
 * @returns {string}
 */
const getRequestEventId = kit.search(path.requestEventId);

/**
 * Returns the `requestType` from the AEP Edge Response.
 * This is the the type of request that was made.
 *
 * Path is `payload,ACPExtensionEventData,type`.
 *
 * @function
 * @param {object} source The AEP Edge Response instance
 * @returns {string}
 */
const getRequestType = kit.search(path.requestType);

/**
 * Returns the `requestPayload` from the AEP Edge Response.
 * This is the the information received in the response.
 *
 * Path is `payload,ACPExtensionEventData,payload`.
 *
 * @function
 * @param {object} source The AEP Edge Response instance
 * @returns {Array}
 */
const getRequestPayload = kit.search(path.requestPayload);

/**
 * Matcher can be used to find matching AEP Edge Response objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource!=`com.adobe.eventsource.errorresponsecontent` && payload.ACPExtensionEventSource!=`com.adobe.eventsource.requestcontent`',
  'payload.ACPExtensionEventType==`com.adobe.eventtype.edge`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's AEP Edge Response event.
 *
 * @function
 * @param {object} source The AEP Edge Response instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a AEP Edge Response with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventType: 'com.adobe.eventtype.edge',
  rootType: 'generic',
  ...input
});

/**
 * Generates a AEP Edge Response with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  requestId: 'BC123-8901-1234-AAFF-580993AC6258',
  requestEventId: 'abc-efg',
  requestType: 'state:store',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.edge',
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
  getRequestId,
  getRequestEventId,
  getRequestType,
  getRequestPayload,
  isMatch,
  matcher,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};