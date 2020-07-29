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
import schema from '../schemas/placesExit.json';

/**
 * Contains constants and functions for a Places Exit Event.
 *
 * The structure for a Places Exit Event is as follows:
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
 *         type: <string>,
 *         uuid: <string>,
 *       },
 *       regioneventtype: 'exit'
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.places'
 *     ACPExtensionEventName: <string>,
 *     ACPExtensionEventUniqueIdentifier: <string>,
 *   },
 *   vendor: <string>,
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: <enum(blob, client, control, generic, log, status)>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace placesExit
 */

/* eslint no-use-before-define: 0 */
/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

/**
 * Paths for the keys on a Places Exit Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  data: 'payload.ACPExtensionEventData',

  /** The POI that the user exited.<br />Path is `payload.ACPExtensionEventData.triggeringregion`. */
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

  /** This is to scope annotations and prevent overwrites from other plugins. The type is usually deteremined by the plugin writing the annotation.<br />Path is `payload.ACPExtensionEventData.triggeringregion.type`. */
  type: 'payload.ACPExtensionEventData.triggeringregion.type',

  /** Uniquely identifies each annotation.<br />Path is `payload.ACPExtensionEventData.triggeringregion.uuid`. */
  uuid: 'payload.ACPExtensionEventData.triggeringregion.uuid',

  /** The type of action that took place. In this case it is exit.<br />Path is `payload.ACPExtensionEventData.regioneventtype`. */
  regionEventType: 'payload.ACPExtensionEventData.regioneventtype',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** The name of the event.<br />Path is `payload.ACPExtensionEventName`. */
  eventName: 'payload.ACPExtensionEventName',

  /** The unique event id.<br />Path is `payload.ACPExtensionEventUniqueIdentifier`. */
  eventId: 'payload.ACPExtensionEventUniqueIdentifier',

  /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
  vendor: 'vendor',

  /** Array of Annotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** When the event occurred.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

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
const label = 'Places Exit Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `regionEventType` for a Places Exit Event.
 *
 * Path is `payload.ACPExtensionEventData.regioneventtype`.
 *
 * @constant
 */
const REGION_EVENT_TYPE = 'exit';

/**
 * The value for `eventSource` for a Places Exit Event.
 *
 * Path is `payload.ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';

/**
 * The value for `eventType` for a Places Exit Event.
 *
 * Path is `payload.ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.places';

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
 * Returns the `POI` from the Places Exit Event.
 * This is the the POI that the user exited.
 *
 * Path is `payload.ACPExtensionEventData.triggeringregion`.
 *
 * @function
 * @param {object} source The Places Exit Event instance
 * @returns {undefined}
 */
const getPOI = kit.search(path.POI);

/**
 * Returns the `regionEventType` from the Places Exit Event.
 * This is the the type of action that took place. In this case it is exit.
 *
 * Path is `payload.ACPExtensionEventData.regioneventtype`.
 *
 * @function
 * @param {object} source The Places Exit Event instance
 * @returns {string}
 */
const getRegionEventType = kit.search(path.regionEventType);

/**
 * Matcher can be used to find matching Places Exit Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.regioneventtype==\'exit\'',
  'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
  'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
  'timestamp',
  'type'
]);

/**
 * Tests the provided source against the matcher to see if it's Places Exit Event event.
 *
 * @function
 * @param {object} source The Places Exit Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Places Exit Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  regionEventType: 'exit',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.places',
  ...input
});

/**
 * Generates a Places Exit Event with some default values set.
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
  type: 'test_suite',
  uuid: '423',
  regionEventType: 'exit',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.places',
  vendor: 'com.adobe.mobile.sdk',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootType: 'generic',
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
  getPOI,
  getRegionEventType,
  isMatch,
  matcher,
  REGION_EVENT_TYPE,
  EVENT_SOURCE,
  EVENT_TYPE,
  label,
  group,
  parentDepth
};
