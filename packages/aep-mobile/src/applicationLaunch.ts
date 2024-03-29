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
import schema from '../schemas/applicationLaunch.json';

/**
 * Contains constants and functions for a Application Launch (Analytics).
 *
 * The structure for a Application Launch (Analytics) is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventSource: 'com.adobe.eventSource.responseContent'
 *     ACPExtensionEventType: 'com.adobe.eventType.lifecycle'
 *     ACPExtensionEventData: {
 *       lifecyclecontextdata: {
 *         launchevent: <string>,
 *       },
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
 * @namespace applicationLaunch
 */

/**
 * Paths for the keys on a Application Launch (Analytics)
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  data: 'payload.ACPExtensionEventData',

  /** Context data about the launch.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata`. */
  lifecycleContextData: 'payload.ACPExtensionEventData.lifecyclecontextdata',

  /** Whether this is a launch event.<br />Path is `payload.ACPExtensionEventData.lifecyclecontextdata.launchevent`. */
  launchEvent: 'payload.ACPExtensionEventData.lifecyclecontextdata.launchevent',

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
 * The name of this event. Same as the file name
 */
const uniqueName = 'applicationLaunch';

/**
 * The package of this event
 */
const packageName = 'aep-mobile';

/**
 * The unique name of this event
 */
const label = 'Application Launch (Analytics)';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Application Launch (Analytics).
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventSource.responseContent';

/**
 * The value for `eventType` for a Application Launch (Analytics).
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventType.lifecycle';

/**
 * The value for `rootType` for a Application Launch (Analytics).
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
 * Returns the `data` from the Application Launch (Analytics).
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData`.
 *
 * @function
 * @param {object} source The Application Launch (Analytics) instance
 * @returns {object}
 */
const getData = kit.search(path.data);

/**
 * Returns the data using the specified path from the data
 * of the Application Launch (Analytics).
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Application Launch (Analytics) instance
 * @returns {*}
 */
const getDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.data}.${searchPath}`, source)
);

/**
 * Returns the `lifecycleContextData` from the Application Launch (Analytics).
 * This is the context data about the launch.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata`.
 *
 * @function
 * @param {object} source The Application Launch (Analytics) instance
 * @returns {object}
 */
const getLifecycleContextData = kit.search(path.lifecycleContextData);

/**
 * Returns the data using the specified path from the lifecycleContextData
 * of the Application Launch (Analytics).
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Application Launch (Analytics) instance
 * @returns {*}
 */
const getLifecycleContextDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.lifecycleContextData}.${searchPath}`, source)
);

/**
 * Returns the `launchEvent` from the Application Launch (Analytics).
 * This is the whether this is a launch event.
 *
 * Path is `payload,ACPExtensionEventData,lifecyclecontextdata,launchevent`.
 *
 * @function
 * @param {object} source The Application Launch (Analytics) instance
 * @returns {string}
 */
const getLaunchEvent = kit.search(path.launchEvent);

/**
 * Matcher can be used to find matching Application Launch (Analytics) objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  kit.combineAny([
    'payload.ACPExtensionEventSource==`com.adobe.eventSource.responseContent`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.responsecontent`'
  ]),
  kit.combineAny([
    'payload.ACPExtensionEventType==`com.adobe.eventType.lifecycle`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.lifecycle`'
  ]),
  'payload.ACPExtensionEventData.lifecyclecontextdata.launchevent',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Application Launch (Analytics) event.
 *
 * @function
 * @param {object} source The Application Launch (Analytics) instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Application Launch (Analytics) with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventSource.responseContent',
  eventType: 'com.adobe.eventType.lifecycle',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Application Launch (Analytics) with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventSource.responseContent',
  eventType: 'com.adobe.eventType.lifecycle',
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
  getData,
  getDataKey,
  getLifecycleContextData,
  getLifecycleContextDataKey,
  getLaunchEvent,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
