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
import schema from '../schemas/ruleConsequence.json';

/**
 * Contains constants and functions for a Rules Consequence Event.
 *
 * The structure for a Rules Consequence Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       triggeredconsequence: {
 *         type: <string>,
 *         id: <string>,
 *         data: <object>,
 *       },
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventSource.responseContent'
 *     ACPExtensionEventType: 'com.adobe.eventType.rulesengine'
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
 * @namespace ruleConsequence
 */

/**
 * Paths for the keys on a Rules Consequence Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The rule consequence.<br />Path is `payload.ACPExtensionEventData.triggeredconsequence`. */
  consequence: 'payload.ACPExtensionEventData.triggeredconsequence',

  /** The type of consequence that was triggered. All types have their own detail format.<br />Path is `payload.ACPExtensionEventData.triggeredconsequence.type`. */
  consequenceType: 'payload.ACPExtensionEventData.triggeredconsequence.type',

  /** UUID for the consequence.<br />Path is `payload.ACPExtensionEventData.triggeredconsequence.id`. */
  consequenceId: 'payload.ACPExtensionEventData.triggeredconsequence.id',

  consequenceData: 'payload.ACPExtensionEventData.triggeredconsequence.data',

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
const label = 'Rules Consequence Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Rules Consequence Event.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventSource.responseContent';

/**
 * The value for `eventType` for a Rules Consequence Event.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventType.rulesengine';

/**
 * The value for `rootType` for a Rules Consequence Event.
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
 * Returns the `consequence` from the Rules Consequence Event.
 * This is the the rule consequence.
 *
 * Path is `payload,ACPExtensionEventData,triggeredconsequence`.
 *
 * @function
 * @param {object} source The Rules Consequence Event instance
 * @returns {object}
 */
const getConsequence = kit.search(path.consequence);

/**
 * Returns the data using the specified path from the consequence
 * of the Rules Consequence Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Rules Consequence Event instance
 * @returns {*}
 */
const getConsequenceKey = kit.curry(
  (searchPath, source) => kit.search(`${path.consequence}.${searchPath}`, source)
);

/**
 * Returns the `consequenceType` from the Rules Consequence Event.
 * This is the the type of consequence that was triggered. All types have their own detail format.
 *
 * Path is `payload,ACPExtensionEventData,triggeredconsequence,type`.
 *
 * @function
 * @param {object} source The Rules Consequence Event instance
 * @returns {string}
 */
const getConsequenceType = kit.search(path.consequenceType);

/**
 * Returns the `consequenceId` from the Rules Consequence Event.
 * This is the uUID for the consequence.
 *
 * Path is `payload,ACPExtensionEventData,triggeredconsequence,id`.
 *
 * @function
 * @param {object} source The Rules Consequence Event instance
 * @returns {string}
 */
const getConsequenceId = kit.search(path.consequenceId);

/**
 * Returns the `consequenceData` from the Rules Consequence Event.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData,triggeredconsequence,data`.
 *
 * @function
 * @param {object} source The Rules Consequence Event instance
 * @returns {object}
 */
const getConsequenceData = kit.search(path.consequenceData);

/**
 * Returns the data using the specified path from the consequenceData
 * of the Rules Consequence Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Rules Consequence Event instance
 * @returns {*}
 */
const getConsequenceDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.consequenceData}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Rules Consequence Event objects.
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
    'payload.ACPExtensionEventType==`com.adobe.eventType.rulesengine`',
    'payload.ACPExtensionEventType==`com.adobe.eventtype.rulesengine`'
  ]),
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Rules Consequence Event event.
 *
 * @function
 * @param {object} source The Rules Consequence Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Rules Consequence Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventSource.responseContent',
  eventType: 'com.adobe.eventType.rulesengine',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Rules Consequence Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  consequenceId: '1617ddfb-9cb6-4021-9b58-af87d84f9052',
  eventSource: 'com.adobe.eventSource.responseContent',
  eventType: 'com.adobe.eventType.rulesengine',
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
  getConsequence,
  getConsequenceKey,
  getConsequenceType,
  getConsequenceId,
  getConsequenceData,
  getConsequenceDataKey,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
