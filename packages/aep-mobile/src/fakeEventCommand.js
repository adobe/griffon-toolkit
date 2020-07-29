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
import schema from '../schemas/fakeEventCommand.json';

/**
 * Contains constants and functions for a Fake Event Command.
 *
 * The structure for a Fake Event Command is as follows:
 * ```
 * {
 *   payload: {
 *     type: 'fakeEvent'
 *     detail: {
 *       eventName: <string>,
 *       eventType: <string>,
 *       eventSource: <string>,
 *       eventData: <object>,
 *     },
 *   },
 *   vendor: 'com.adobe.griffon.mobile'
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: 'control'
 * }
 * ```
 *
 * @namespace fakeEventCommand
 */

/**
 * Paths for the keys on a Fake Event Command
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** The type of command.<br />Path is `p.a.y.l.o.a.d.".".t.y.p.e`. */
  type: 'p.a.y.l.o.a.d.".".t.y.p.e',

  /** Additional command detail.<br />Path is `p.a.y.l.o.a.d.".".d.e.t.a.i.l`. */
  detail: 'p.a.y.l.o.a.d.".".d.e.t.a.i.l',

  /** The name of the event.<br />Path is `p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.N.a.m.e`. */
  eventName: 'p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.N.a.m.e',

  /** The event type.<br />Path is `p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.T.y.p.e`. */
  eventType: 'p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.T.y.p.e',

  /** The event source.<br />Path is `p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.S.o.u.r.c.e`. */
  eventSource: 'p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.S.o.u.r.c.e',

  /** An object with the custom data describing the event.<br />Path is `p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.D.a.t.a`. */
  eventData: 'p.a.y.l.o.a.d.".".d.e.t.a.i.l.".".e.v.e.n.t.D.a.t.a',

  /** The vendor of the plugin to receive the command.<br />Path is `v.e.n.d.o.r`. */
  vendor: 'v.e.n.d.o.r',

  /** A unique id that differentiates clients from one another.<br />Path is `c.l.i.e.n.t.I.d`. */
  clientId: 'c.l.i.e.n.t.I.d',

  /** When the command was triggered.<br />Path is `t.i.m.e.s.t.a.m.p`. */
  timestamp: 't.i.m.e.s.t.a.m.p',

  /** The type of event. For commands it's always 'control'..<br />Path is `t.y.p.e`. */
  rootType: 't.y.p.e'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 1;

/**
 * A label that can be used when describing this object
 */
const label = 'Fake Event Command';

/**
 * A grouping for this object
 */
const group = 'command';

/**
 * The value for `type` for a Fake Event Command.
 *
 * Path is `payload.type`.
 *
 * @constant
 */
const TYPE = 'fakeEvent';

/**
 * The value for `vendor` for a Fake Event Command.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.griffon.mobile';

/**
 * The value for `rootType` for a Fake Event Command.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'control';

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
 * Returns the `type` from the Fake Event Command.
 * This is the the type of command.
 *
 * Path is `payload.type`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
const getType = kit.search(path.type);

/**
 * Returns the `detail` from the Fake Event Command.
 * This is the additional command detail.
 *
 * Path is `payload.detail`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {object}
 */
const getDetail = kit.search(path.detail);

/**
 * Returns the data using the specified path from the detail
 * of the Fake Event Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Fake Event Command instance
 * @returns {*}
 */
const getDetailKey = kit.curry(
  (searchPath, source) => kit.search(`${path.detail}.${searchPath}`, source)
);

/**
 * Returns the `eventName` from the Fake Event Command.
 * This is the the name of the event.
 *
 * Path is `payload.detail.eventName`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
const getEventName = kit.search(path.eventName);

/**
 * Returns the `eventType` from the Fake Event Command.
 * This is the the event type.
 *
 * Path is `payload.detail.eventType`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
const getEventType = kit.search(path.eventType);

/**
 * Returns the `eventSource` from the Fake Event Command.
 * This is the the event source.
 *
 * Path is `payload.detail.eventSource`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {string}
 */
const getEventSource = kit.search(path.eventSource);

/**
 * Returns the `eventData` from the Fake Event Command.
 * This is the an object with the custom data describing the event.
 *
 * Path is `payload.detail.eventData`.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {object}
 */
const getEventData = kit.search(path.eventData);

/**
 * Returns the data using the specified path from the eventData
 * of the Fake Event Command.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Fake Event Command instance
 * @returns {*}
 */
const getEventDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.eventData}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Fake Event Command objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'p.a.y.l.o.a.d.".".t.y.p.e==\'fakeEvent\'',
  'v.e.n.d.o.r==\'com.adobe.griffon.mobile\'',
  't.i.m.e.s.t.a.m.p',
  't.y.p.e==\'control\''
]);

/**
 * Tests the provided source against the matcher to see if it's Fake Event Command event.
 *
 * @function
 * @param {object} source The Fake Event Command instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Fake Event Command with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  type: 'fakeEvent',
  vendor: 'com.adobe.griffon.mobile',
  rootType: 'control',
  ...input
});

/**
 * Generates a Fake Event Command with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  type: 'fakeEvent',
  eventName: 'Fake Event',
  eventType: 'com.adobe.eventtype.fake',
  eventSource: 'com.adobe.eventsource.responsecontent',
  vendor: 'com.adobe.griffon.mobile',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootType: 'control',
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
  getType,
  getDetail,
  getDetailKey,
  getEventName,
  getEventType,
  getEventSource,
  getEventData,
  getEventDataKey,
  isMatch,
  matcher,
  TYPE,
  VENDOR,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
