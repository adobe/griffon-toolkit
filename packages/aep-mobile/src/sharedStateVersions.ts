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
import schema from '../schemas/sharedStateVersions.json';

/**
 * Contains constants and functions for a Shared State - Versions.
 *
 * The structure for a Shared State - Versions is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       stateowner: 'com.adobe.module.eventhub'
 *     },
 *     metadata: {
 *       state.data: {
 *         version: <string>,
 *         extensions: <object>,
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
 * @namespace sharedStateVersions
 */

/**
 * Paths for the keys on a Shared State - Versions
 *
 * @enum {string}
 */
const path = {
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

  /** The version of the SDK.<br />Path is `payload.metadata."state.data".version`. */
  sdkVersion: 'payload.metadata."state.data".version',

  /** A mapping of versions per sdk extension.<br />Path is `payload.metadata."state.data".extensions`. */
  extensions: 'payload.metadata."state.data".extensions',

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
const parentDepth = 3;

/**
 * A label that can be used when describing this object
 */
const label = 'Shared State - Versions';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `stateOwner` for a Shared State - Versions.
 *
 * Path is `payload,ACPExtensionEventData,stateowner`.
 *
 * @constant
 */
const STATE_OWNER = 'com.adobe.module.eventhub';

/**
 * The value for `eventSource` for a Shared State - Versions.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.sharedstate';

/**
 * The value for `eventType` for a Shared State - Versions.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.hub';

/**
 * The value for `rootType` for a Shared State - Versions.
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
 * Returns the `sdkVersion` from the Shared State - Versions.
 * This is the the version of the SDK.
 *
 * Path is `payload,metadata,state.data,version`.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {string}
 */
const getSdkVersion = kit.search(path.sdkVersion);

/**
 * Returns the `extensions` from the Shared State - Versions.
 * This is the a mapping of versions per sdk extension.
 *
 * Path is `payload,metadata,state.data,extensions`.
 *
 * @function
 * @param {object} source The Shared State - Versions instance
 * @returns {object}
 */
const getExtensions = kit.search(path.extensions);

/**
 * Returns the data using the specified path from the extensions
 * of the Shared State - Versions.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Shared State - Versions instance
 * @returns {*}
 */
const getExtensionsKey = kit.curry(
  (searchPath, source) => kit.search(`${path.extensions}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Shared State - Versions objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.stateowner==`com.adobe.module.eventhub`',
  'payload.metadata."state.data".extensions',
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
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Shared State - Versions with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  stateOwner: 'com.adobe.module.eventhub',
  eventSource: 'com.adobe.eventsource.sharedstate',
  eventType: 'com.adobe.eventtype.hub',
  rootType: 'generic',
  ...input
});

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
const mock = (input) => kit.expandWithPaths(path, {
  stateOwner: 'com.adobe.module.eventhub',
  stateData: { version: '2.1.3' },
  sdkVersion: '2.7.1',
  extensions: { Lifecycle: '2.4.0', 'com.adobe.ACPGriffon': '2.0.0' },
  eventSource: 'com.adobe.eventsource.sharedstate',
  eventType: 'com.adobe.eventtype.hub',
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
  getSdkVersion,
  getExtensions,
  getExtensionsKey,
  isMatch,
  matcher,
  STATE_OWNER,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
