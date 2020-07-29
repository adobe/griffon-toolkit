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

/**
 * Paths for the keys on a Configuration Update
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** An object with the custom data describing the event.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a`. */
  eventData: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a',

  /** The configuration values to write.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".c.o.n.f.i.g.".".u.p.d.a.t.e`. */
  configData: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".c.o.n.f.i.g.".".u.p.d.a.t.e',

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
const get = R.curry((alias, data) => kit.search(path[alias] || alias, data));

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
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e==\'com.adobe.eventsource.requestcontent\'',
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e==\'com.adobe.eventtype.configuration\'',
  't.y.p.e==\'generic\'',
  't.i.m.e.s.t.a.m.p'
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
  configData: { 'analytics.debugApiEnabled': true },
  eventSource: 'com.adobe.eventsource.requestcontent',
  eventType: 'com.adobe.eventtype.configuration',
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
