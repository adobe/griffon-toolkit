
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
import schema from '../schemas/sharedState.json';

/**
 * Contains constants and functions for a Shared State Event.
 *
 * The structure for a Shared State Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       state.owner: <string>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.sharedstate'
 *     ACPExtensionEventType: 'com.adobe.eventtype.hub'
 *     metadata: {
 *       state.data: <object>,
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
 * @namespace sharedState
 */

/**
 * Paths for the keys on a Shared State Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The full list of current configuration values.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** In SDK extension that owns the shared state that is being updated.<br />Path is `payload.ACPExtensionEventData."state.owner"`. */
  stateOwner: 'payload.ACPExtensionEventData."state.owner"',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** Additional metadata that is attacked to SDK events.<br />Path is `payload.metadata`. */
  metadata: 'payload.metadata',

  /** The data that is being written to shared state..<br />Path is `payload.metadata."state.data"`. */
  stateData: 'payload.metadata."state.data"',

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
const label = 'Shared State Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Shared State Event.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.sharedstate';

/**
 * The value for `eventType` for a Shared State Event.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.hub';

/**
 * The value for `rootType` for a Shared State Event.
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
 * Returns the `stateOwner` from the Shared State Event.
 * This is the in SDK extension that owns the shared state that is being updated.
 *
 * Path is `payload,ACPExtensionEventData,state.owner`.
 *
 * @function
 * @param {object} source The Shared State Event instance
 * @returns {string}
 */
const getStateOwner = kit.search(path.stateOwner);

/**
 * Returns the `stateData` from the Shared State Event.
 * This is the the data that is being written to shared state..
 *
 * Path is `payload,metadata,state.data`.
 *
 * @function
 * @param {object} source The Shared State Event instance
 * @returns {object}
 */
const getStateData = kit.search(path.stateData);

/**
 * Returns the data using the specified path from the stateData
 * of the Shared State Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Shared State Event instance
 * @returns {*}
 */
const getStateDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.stateData}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Shared State Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource==\'com.adobe.eventsource.sharedstate\'',
  'payload.ACPExtensionEventType==\'com.adobe.eventtype.hub\'',
  'type==\'generic\'',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Shared State Event event.
 *
 * @function
 * @param {object} source The Shared State Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);

/**
 * Generates a Shared State Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.sharedstate',
  eventType: 'com.adobe.eventtype.hub',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Shared State Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  stateOwner: 'com.adobe.mobule.eventhub',
  eventSource: 'com.adobe.eventsource.sharedstate',
  eventType: 'com.adobe.eventtype.hub',
  stateData: { version: '2.1.3' },
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
  getStateOwner,
  getStateData,
  getStateDataKey,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};