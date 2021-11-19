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
import schema from '../schemas/edgeRequest.json';

/**
 * Contains constants and functions for a AEP Edge Request.
 *
 * The structure for a AEP Edge Request is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       datasetId: <string>,
 *       query: <object>,
 *       xdm: <object>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventSource.requestContent'
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
 * @namespace edgeRequest
 */

/**
 * Paths for the keys on a AEP Edge Request
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The dataset to apply the XDM data to.<br />Path is `payload.ACPExtensionEventData.datasetId`. */
  datasetId: 'payload.ACPExtensionEventData.datasetId',

  /** Data to request from the edge.<br />Path is `payload.ACPExtensionEventData.query`. */
  query: 'payload.ACPExtensionEventData.query',

  /** The XDM data send to the server.<br />Path is `payload.ACPExtensionEventData.xdm`. */
  xdm: 'payload.ACPExtensionEventData.xdm',

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
const label = 'AEP Edge Request';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a AEP Edge Request.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventSource.requestContent';

/**
 * The value for `eventType` for a AEP Edge Request.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventType.edge';

/**
 * The value for `rootType` for a AEP Edge Request.
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
 * Returns the `datasetId` from the AEP Edge Request.
 * This is the the dataset to apply the XDM data to.
 *
 * Path is `payload,ACPExtensionEventData,datasetId`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {string}
 */
const getDatasetId = kit.search(path.datasetId);

/**
 * Returns the `query` from the AEP Edge Request.
 * This is the data to request from the edge.
 *
 * Path is `payload,ACPExtensionEventData,query`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {object}
 */
const getQuery = kit.search(path.query);

/**
 * Returns the data using the specified path from the query
 * of the AEP Edge Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The AEP Edge Request instance
 * @returns {*}
 */
const getQueryKey = kit.curry(
  (searchPath, source) => kit.search(`${path.query}.${searchPath}`, source)
);

/**
 * Returns the `xdm` from the AEP Edge Request.
 * This is the the XDM data send to the server.
 *
 * Path is `payload,ACPExtensionEventData,xdm`.
 *
 * @function
 * @param {object} source The AEP Edge Request instance
 * @returns {object}
 */
const getXdm = kit.search(path.xdm);

/**
 * Returns the data using the specified path from the xdm
 * of the AEP Edge Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The AEP Edge Request instance
 * @returns {*}
 */
const getXdmKey = kit.curry(
  (searchPath, source) => kit.search(`${path.xdm}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching AEP Edge Request objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  kit.combineAny([
    'payload.ACPExtensionEventSource==`com.adobe.eventSource.requestContent`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.requestcontent`'
  ]),
  kit.combineAny([
    'payload.ACPExtensionEventType==`com.adobe.eventType.edge`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.edge`'
  ]),
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
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a AEP Edge Request with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventSource.requestContent',
  eventType: 'com.adobe.eventType.edge',
  rootType: 'generic',
  ...input
});

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
const mock = (input) => kit.expandWithPaths(path, {
  datasetId: 'abcdefg',
  xdm: { eventType: 'commerce.purchases' },
  eventSource: 'com.adobe.eventSource.requestContent',
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
  getDatasetId,
  getQuery,
  getQueryKey,
  getXdm,
  getXdmKey,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
