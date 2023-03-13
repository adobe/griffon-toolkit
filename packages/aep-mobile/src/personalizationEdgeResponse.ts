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
 *   vendor: 'com.adobe.griffon.mobile'
 *   type: 'generic'
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

  /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
  vendor: 'vendor',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

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
 * The value for `vendor` for a Edge Personalization Request.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.griffon.mobile';

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
 * Returns the `eventData` from the Edge Personalization Request.
 * This is the an object with the custom data describing the event.
 *
 * Path is `payload,ACPExtensionEventData`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {object}
 */
const getEventData = kit.search(path.eventData);

/**
 * Returns the data using the specified path from the eventData
 * of the Edge Personalization Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Edge Personalization Request instance
 * @returns {*}
 */
const getEventDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.eventData}.${searchPath}`, source)
);

/**
 * Returns the `responseType` from the Edge Personalization Request.
 * This is the the type of response being returned.
 *
 * Path is `payload,ACPExtensionEventData,type`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getResponseType = kit.search(path.responseType);

/**
 * Returns the data using the specified path from the responseType
 * of the Edge Personalization Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Edge Personalization Request instance
 * @returns {*}
 */
const getResponseTypeKey = kit.curry(
  (searchPath, source) => kit.search(`${path.responseType}.${searchPath}`, source)
);

/**
 * Returns the `requestId` from the Edge Personalization Request.
 * This is the the request ID of the edge service request.
 *
 * Path is `payload,ACPExtensionEventData,requestId`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getRequestId = kit.search(path.requestId);

/**
 * Returns the `requestEventId` from the Edge Personalization Request.
 * This is the the event ID of the event that this is a response to.
 *
 * Path is `payload,ACPExtensionEventData,requestEventId`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getRequestEventId = kit.search(path.requestEventId);

/**
 * Returns the `responsePayload` from the Edge Personalization Request.
 * This is the the information received in the response.
 *
 * Path is `payload,ACPExtensionEventData,payload`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {Array}
 */
const getResponsePayload = kit.search(path.responsePayload);

/**
 * Returns the `eventSource` from the Edge Personalization Request.
 * This is the the event source.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getEventSource = kit.search(path.eventSource);

/**
 * Returns the data using the specified path from the eventSource
 * of the Edge Personalization Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Edge Personalization Request instance
 * @returns {*}
 */
const getEventSourceKey = kit.curry(
  (searchPath, source) => kit.search(`${path.eventSource}.${searchPath}`, source)
);

/**
 * Returns the `eventType` from the Edge Personalization Request.
 * This is the the event type.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getEventType = kit.search(path.eventType);

/**
 * Returns the data using the specified path from the eventType
 * of the Edge Personalization Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Edge Personalization Request instance
 * @returns {*}
 */
const getEventTypeKey = kit.curry(
  (searchPath, source) => kit.search(`${path.eventType}.${searchPath}`, source)
);

/**
 * Returns the `eventName` from the Edge Personalization Request.
 * This is the the name of the event.
 *
 * Path is `payload,ACPExtensionEventName`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getEventName = kit.search(path.eventName);

/**
 * Returns the `sdkEventNumber` from the Edge Personalization Request.
 * This is the the event number generated by the SDK.
 *
 * Path is `payload,ACPExtensionEventNumber`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {number}
 */
const getSdkEventNumber = kit.search(path.sdkEventNumber);

/**
 * Returns the `eventId` from the Edge Personalization Request.
 * This is the the unique event id.
 *
 * Path is `payload,ACPExtensionEventUniqueIdentifier`.
 *
 * @function
 * @param {object} source The Edge Personalization Request instance
 * @returns {string}
 */
const getEventId = kit.search(path.eventId);

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
  'vendor==`com.adobe.griffon.mobile`',
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
  vendor: 'com.adobe.griffon.mobile',
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
  vendor: 'com.adobe.griffon.mobile',
  rootType: 'generic',
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
  getEventData,
  getEventDataKey,
  getResponseType,
  getResponseTypeKey,
  getRequestId,
  getRequestEventId,
  getResponsePayload,
  getEventSource,
  getEventSourceKey,
  getEventType,
  getEventTypeKey,
  getEventName,
  getSdkEventNumber,
  getEventId,
  isMatch,
  matcher,
  RESPONSE_TYPE,
  EVENT_TYPE,
  VENDOR,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
