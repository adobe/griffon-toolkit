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
import schema from '../schemas/personalizationEdgeResponse.json';

/**
 * Contains constants and functions for a Edge Personalization Request.
 *
 * The structure for a Edge Personalization Request is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       type: 'personalization:decisions'
 *       requestId: <string>,
 *       requestEventId: <string>,
 *       payload: <array>,
 *     },
 *     ACPExtensionEventSource: <string>,
 *     ACPExtensionEventType: 'com.adobe.eventType.edge'
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
 * @namespace personalizationEdgeResponse
 */

/**
 * Paths for the keys on a Edge Personalization Request
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The type of response being returned.<br />Path is `payload.ACPExtensionEventData.type`. */
  responseType: 'payload.ACPExtensionEventData.type',

  /** The request ID of the edge service request.<br />Path is `payload.ACPExtensionEventData.requestId`. */
  requestId: 'payload.ACPExtensionEventData.requestId',

  /** The event ID of the event that this is a response to.<br />Path is `payload.ACPExtensionEventData.requestEventId`. */
  requestEventId: 'payload.ACPExtensionEventData.requestEventId',

  /** The information received in the response.<br />Path is `payload.ACPExtensionEventData.payload`. */
  responsePayload: 'payload.ACPExtensionEventData.payload',

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
const uniqueName = 'personalizationEdgeResponse';

/**
 * The package of this event
 */
const packageName = 'aep-mobile';

/**
 * The unique name of this event
 */
const label = 'Edge Personalization Request';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `responseType` for a Edge Personalization Request.
 *
 * Path is `payload,ACPExtensionEventData,type`.
 *
 * @constant
 */
const RESPONSE_TYPE = 'personalization:decisions';

/**
 * The value for `eventType` for a Edge Personalization Request.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventType.edge';

/**
 * The value for `rootType` for a Edge Personalization Request.
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
 * Matcher can be used to find matching Edge Personalization Request objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.type==`personalization:decisions`',
  'payload.ACPExtensionEventSource!=`com.adobe.eventSource.errorResponseContent` && payload.ACPExtensionEventSource!=`com.adobe.eventSource.requestContent`',
  kit.combineAny([
    'payload.ACPExtensionEventType==`com.adobe.eventType.edge`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.edge`'
  ]),
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
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Edge Personalization Request with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  responseType: 'personalization:decisions',
  eventType: 'com.adobe.eventType.edge',
  rootType: 'generic',
  ...input
});

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
const mock = (input) => kit.expandWithPaths(path, {
  responseType: 'personalization:decisions',
  requestId: 'BC123-8901-1234-AAFF-580993AC6258',
  requestEventId: 'abc-efg',
  eventSource: 'com.adobe.eventSource.responseContent',
  eventType: 'com.adobe.eventType.edge',
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
  isMatch,
  matcher,
  RESPONSE_TYPE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
