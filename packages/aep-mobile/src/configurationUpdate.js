
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
import schema from '../schemas/configurationUpdate.json';

/**
 * Contains constants and functions for a Configuration Update.
 *
 * The structure for a Configuration Update is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       config.update: <object>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.configuration'
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
 * @namespace configurationUpdate
 */

/* eslint no-use-before-define: 0 */
/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

/**
 * Paths for the keys on a Configuration Update
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The configuration values to write.<br />Path is `payload.ACPExtensionEventData.config.update`. */
  configData: 'payload.ACPExtensionEventData.config.update',

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
const label = 'Configuration Update';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Configuration Update.
 *
 * Path is `payload.ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.requestcontent';

/**
 * The value for `eventType` for a Configuration Update.
 *
 * Path is `payload.ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.configuration';

/**
 * The value for `rootType` for a Configuration Update.
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
const get = kit.curry((alias, data) => kit.search(path[alias] || alias, data));

/**
 * Returns the `configData` from the Configuration Update.
 * This is the the configuration values to write.
 *
 * Path is `payload.ACPExtensionEventData.config.update`.
 *
 * @function
 * @param {object} source The Configuration Update instance
 * @returns {object}
 */
const getConfigData = kit.search(path.configData);

/**
 * Returns the data using the specified path from the configData
 * of the Configuration Update.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Configuration Update instance
 * @returns {*}
 */
const getConfigDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.configData}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Configuration Update objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
  'payload.ACPExtensionEventType==\'com.adobe.eventtype.configuration\'',
  'type==\'generic\'',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Configuration Update event.
 *
 * @function
 * @param {object} source The Configuration Update instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);

/**
 * Generates a Configuration Update with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.requestcontent',
  eventType: 'com.adobe.eventtype.configuration',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Configuration Update with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  configData: { "analytics.debugApiEnabled": true },
  eventSource: 'com.adobe.eventsource.requestcontent',
  eventType: 'com.adobe.eventtype.configuration',
  rootType: 'generic',
  vendor: 'com.adobe.mobile.sdk',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootId: '123',
  ...input
});


export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getConfigData,
  getConfigDataKey,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
