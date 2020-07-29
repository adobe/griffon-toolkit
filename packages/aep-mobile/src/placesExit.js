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
 *       },
 *       regioneventtype: 'exit'
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
 * @namespace placesExit
 */

/**
 * Paths for the keys on a Places Exit Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** An object with the custom data describing the event.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a`. */
  data: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a',

  /** The POI that the user exited.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n`. */
  POI: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n',

  /** The POI latitude.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".l.a.t.i.t.u.d.e`. */
  latitude: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".l.a.t.i.t.u.d.e',

  /** The Places library the POI belongs to.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".l.i.b.r.a.r.y.i.d`. */
  libraryId: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".l.i.b.r.a.r.y.i.d',

  /** The POI longitude.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".l.o.n.g.i.t.u.d.e`. */
  longitude: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".l.o.n.g.i.t.u.d.e',

  /** The POI name.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.n.a.m.e`. */
  name: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.n.a.m.e',

  /** An object with some defined items and custom data items..<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a`. */
  metadata: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a',

  /** The POI category.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".c.a.t.e.g.o.r.y`. */
  category: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".c.a.t.e.g.o.r.y',

  /** The POI city.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".c.i.t.y`. */
  city: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".c.i.t.y',

  /** The POI country.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".c.o.u.n.t.r.y`. */
  country: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".c.o.u.n.t.r.y',

  /** The POI state.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".s.t.a.t.e`. */
  state: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".s.t.a.t.e',

  /** The POI street.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".s.t.r.e.e.t`. */
  street: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.m.e.t.a.d.a.t.a.".".s.t.r.e.e.t',

  /** The POI radius.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.a.d.i.u.s`. */
  radius: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.a.d.i.u.s',

  /** The unique region id.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.i.d`. */
  id: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".r.e.g.i.o.n.i.d',

  /** Is the user currently in the POI.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".u.s.e.r.i.s.w.i.t.h.i.n`. */
  within: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".u.s.e.r.i.s.w.i.t.h.i.n',

  /** The weight of the POI. It is used to prioritze POIs when a user is inside multile POIS.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".w.e.i.g.h.t`. */
  weight: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".t.r.i.g.g.e.r.i.n.g.r.e.g.i.o.n.".".w.e.i.g.h.t',

  /** The type of action that took place. In this case it is exit.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".r.e.g.i.o.n.e.v.e.n.t.t.y.p.e`. */
  regionEventType: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".r.e.g.i.o.n.e.v.e.n.t.t.y.p.e',

  /** The event source.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e`. */
  eventSource: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e',

  /** The event type.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e`. */
  eventType: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e',

  /** The name of the event.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.a.m.e`. */
  eventName: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.a.m.e',

  /** The event number generated by the SDK.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.u.m.b.e.r`. */
  sdkEventNumber: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.u.m.b.e.r',

  /** The unique event id.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.U.n.i.q.u.e.I.d.e.n.t.i.f.i.e.r`. */
  eventId: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.U.n.i.q.u.e.I.d.e.n.t.i.f.i.e.r',

  /** The type of event.<br />Path is `t.y.p.e`. */
  rootType: 't.y.p.e',

  /** The vendor of the plugin that sent the event.<br />Path is `v.e.n.d.o.r`. */
  vendor: 'v.e.n.d.o.r',

  /** Array of Annotation objects.<br />Path is `a.n.n.o.t.a.t.i.o.n.s`. */
  annotations: 'a.n.n.o.t.a.t.i.o.n.s',

  /** A unique id that differentiates clients from one another.<br />Path is `c.l.i.e.n.t.I.d`. */
  clientId: 'c.l.i.e.n.t.I.d',

  /** When the event occurred.<br />Path is `t.i.m.e.s.t.a.m.p`. */
  timestamp: 't.i.m.e.s.t.a.m.p',

  /** Uniquely identifies each event.<br />Path is `u.u.i.d`. */
  rootId: 'u.u.i.d'
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
 * The value for `rootType` for a Places Exit Event.
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
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".r.e.g.i.o.n.e.v.e.n.t.t.y.p.e==\'exit\'',
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e==\'com.adobe.eventsource.responsecontent\'',
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e==\'com.adobe.eventtype.places\'',
  't.y.p.e==\'generic\'',
  't.i.m.e.s.t.a.m.p'
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
  rootType: 'generic',
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
  regionEventType: 'exit',
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
