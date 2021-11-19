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
import schema from '../schemas/identityResponse.json';

/**
 * Contains constants and functions for a Identity Response.
 *
 * The structure for a Identity Response is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       mid: <string>,
 *       pushidentifier: <string>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventSource.responseIdentity'
 *     ACPExtensionEventType: 'com.adobe.eventType.identity'
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
 * @namespace identityResponse
 */

/**
 * Paths for the keys on a Identity Response
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The unique ID assigned by Adobe.<br />Path is `payload.ACPExtensionEventData.mid`. */
  mid: 'payload.ACPExtensionEventData.mid',

  /** The token used to send push messages.<br />Path is `payload.ACPExtensionEventData.pushidentifier`. */
  pushIdentifier: 'payload.ACPExtensionEventData.pushidentifier',

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
const label = 'Identity Response';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Identity Response.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventSource.responseIdentity';

/**
 * The value for `eventType` for a Identity Response.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventType.identity';

/**
 * The value for `rootType` for a Identity Response.
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
 * Returns the `mid` from the Identity Response.
 * This is the the unique ID assigned by Adobe.
 *
 * Path is `payload,ACPExtensionEventData,mid`.
 *
 * @function
 * @param {object} source The Identity Response instance
 * @returns {string}
 */
const getMid = kit.search(path.mid);

/**
 * Returns the `pushIdentifier` from the Identity Response.
 * This is the the token used to send push messages.
 *
 * Path is `payload,ACPExtensionEventData,pushidentifier`.
 *
 * @function
 * @param {object} source The Identity Response instance
 * @returns {string}
 */
const getPushIdentifier = kit.search(path.pushIdentifier);

/**
 * Matcher can be used to find matching Identity Response objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.mid',
  kit.combineAny([
    'payload.ACPExtensionEventSource==`com.adobe.eventSource.responseIdentity`',
    'payload.ACPExtensionEventSource==`com.adobe.eventsource.responseidentity`'
  ]),
  kit.combineAny([
    'payload.ACPExtensionEventType==`com.adobe.eventType.identity`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.identity`'
  ]),
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Identity Response event.
 *
 * @function
 * @param {object} source The Identity Response instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Identity Response with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventSource.responseIdentity',
  eventType: 'com.adobe.eventType.identity',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Identity Response with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  mid: '123423412123412341243',
  pushIdentifier: 'asdfwerfasdfae-asdfasdfasdf',
  eventSource: 'com.adobe.eventSource.responseIdentity',
  eventType: 'com.adobe.eventType.identity',
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
  getMid,
  getPushIdentifier,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
