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
import schema from '../schemas/placesEntry.json';

/**
 * Contains constants and functions for a Places Entry Event.
 *
 * The structure for a Places Entry Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       triggeringregion: {
 *         latitude: <number>,
 *         libraryid: <string>,
 *         longitude: <number>,
 *         regionname: <string>,
 *         regionmetadata: {
 *           category: <string>,
 *           city: <string>,
 *           country: <string>,
 *           state: <string>,
 *           street: <string>,
 *         },
 *         radius: <number>,
 *         regionid: <string>,
 *         useriswithin: <boolean>,
 *         weight: <number>,
 *       },
 *       regioneventtype: 'entry'
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.places'
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
 * @namespace placesEntry
 */

/**
 * Paths for the keys on a Places Entry Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  data: 'payload.ACPExtensionEventData',

  /** The POI that the user entered.<br />Path is `payload.ACPExtensionEventData.triggeringregion`. */
  POI: 'payload.ACPExtensionEventData.triggeringregion',

  /** The POI latitude.<br />Path is `payload.ACPExtensionEventData.triggeringregion.latitude`. */
  latitude: 'payload.ACPExtensionEventData.triggeringregion.latitude',

  /** The Places library the POI belongs to.<br />Path is `payload.ACPExtensionEventData.triggeringregion.libraryid`. */
  libraryId: 'payload.ACPExtensionEventData.triggeringregion.libraryid',

  /** The POI longitude.<br />Path is `payload.ACPExtensionEventData.triggeringregion.longitude`. */
  longitude: 'payload.ACPExtensionEventData.triggeringregion.longitude',

  /** The POI name.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionname`. */
  name: 'payload.ACPExtensionEventData.triggeringregion.regionname',

  /** An object with some defined items and custom data items..<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionmetadata`. */
  metadata: 'payload.ACPExtensionEventData.triggeringregion.regionmetadata',

  /** The POI category.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionmetadata.category`. */
  category: 'payload.ACPExtensionEventData.triggeringregion.regionmetadata.category',

  /** The POI city.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionmetadata.city`. */
  city: 'payload.ACPExtensionEventData.triggeringregion.regionmetadata.city',

  /** The POI country.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionmetadata.country`. */
  country: 'payload.ACPExtensionEventData.triggeringregion.regionmetadata.country',

  /** The POI state.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionmetadata.state`. */
  state: 'payload.ACPExtensionEventData.triggeringregion.regionmetadata.state',

  /** The POI street.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionmetadata.street`. */
  street: 'payload.ACPExtensionEventData.triggeringregion.regionmetadata.street',

  /** The POI radius.<br />Path is `payload.ACPExtensionEventData.triggeringregion.radius`. */
  radius: 'payload.ACPExtensionEventData.triggeringregion.radius',

  /** The unique region id.<br />Path is `payload.ACPExtensionEventData.triggeringregion.regionid`. */
  id: 'payload.ACPExtensionEventData.triggeringregion.regionid',

  /** Is the user currently in the POI.<br />Path is `payload.ACPExtensionEventData.triggeringregion.useriswithin`. */
  within: 'payload.ACPExtensionEventData.triggeringregion.useriswithin',

  /** The weight of the POI. It is used to prioritze POIs when a user is inside multile POIS.<br />Path is `payload.ACPExtensionEventData.triggeringregion.weight`. */
  weight: 'payload.ACPExtensionEventData.triggeringregion.weight',

  /** The type of action that took place. In this case it is entry.<br />Path is `payload.ACPExtensionEventData.regioneventtype`. */
  regionEventType: 'payload.ACPExtensionEventData.regioneventtype',

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
const label = 'Places Entry Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `regionEventType` for a Places Entry Event.
 *
 * Path is `payload,ACPExtensionEventData,regioneventtype`.
 *
 * @constant
 */
const REGION_EVENT_TYPE = 'entry';

/**
 * The value for `eventSource` for a Places Entry Event.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';

/**
 * The value for `eventType` for a Places Entry Event.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.places';

/**
 * The value for `rootType` for a Places Entry Event.
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
 * Returns the `data` from the Places Entry Event.
 * This is the .
 *
 * Path is `payload,ACPExtensionEventData`.
 *
 * @function
 * @param {object} source The Places Entry Event instance
 * @returns {object}
 */
const getData = kit.search(path.data);

/**
 * Returns the data using the specified path from the data
 * of the Places Entry Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Places Entry Event instance
 * @returns {*}
 */
const getDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.data}.${searchPath}`, source)
);

/**
 * Returns the `POI` from the Places Entry Event.
 * This is the the POI that the user entered.
 *
 * Path is `payload,ACPExtensionEventData,triggeringregion`.
 *
 * @function
 * @param {object} source The Places Entry Event instance
 * @returns {undefined}
 */
const getPOI = kit.search(path.POI);

/**
 * Returns the `regionEventType` from the Places Entry Event.
 * This is the the type of action that took place. In this case it is entry.
 *
 * Path is `payload,ACPExtensionEventData,regioneventtype`.
 *
 * @function
 * @param {object} source The Places Entry Event instance
 * @returns {string}
 */
const getRegionEventType = kit.search(path.regionEventType);

/**
 * Matcher can be used to find matching Places Entry Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.regioneventtype==`entry`',
  'payload.ACPExtensionEventSource==`com.adobe.eventsource.responsecontent`',
  'payload.ACPExtensionEventType==`com.adobe.eventtype.places`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Places Entry Event event.
 *
 * @function
 * @param {object} source The Places Entry Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Places Entry Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  regionEventType: 'entry',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.places',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Places Entry Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  latitude: 40.4045982,
  libraryId: '04213',
  longitude: -111.8636017,
  name: 'Adobe',
  radius: 375,
  id: '31512',
  within: false,
  weight: 2,
  regionEventType: 'entry',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.places',
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
  getPOI,
  getRegionEventType,
  isMatch,
  matcher,
  REGION_EVENT_TYPE,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
