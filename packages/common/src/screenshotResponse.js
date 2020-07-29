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
import schema from '../schemas/screenshotResponse.json';

/**
 * Contains constants and functions for a Screenshot Response Event.
 *
 * The structure for a Screenshot Response Event is as follows:
 * ```
 * {
 *   payload: {
 *     blobId: <string>,
 *     mimeType: <string>,
 *   },
 *   type: 'blob'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace screenshotResponse
 */

/**
 * Paths for the keys on a Screenshot Response Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** ID returned from the blob service.<br />Path is `p.a.y.l.o.a.d.".".b.l.o.b.I.d`. */
  blobId: 'p.a.y.l.o.a.d.".".b.l.o.b.I.d',

  /** Describes the type of blob content uploaded.<br />Path is `p.a.y.l.o.a.d.".".m.i.m.e.T.y.p.e`. */
  mimeType: 'p.a.y.l.o.a.d.".".m.i.m.e.T.y.p.e',

  /** The type of event.<br />Path is `t.y.p.e`. */
  rootType: 't.y.p.e',

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
const parentDepth = 1;

/**
 * A label that can be used when describing this object
 */
const label = 'Screenshot Response Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `rootType` for a Screenshot Response Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'blob';

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
 * Returns the `blobId` from the Screenshot Response Event.
 * This is the iD returned from the blob service.
 *
 * Path is `payload.blobId`.
 *
 * @function
 * @param {object} source The Screenshot Response Event instance
 * @returns {string}
 */
const getBlobId = kit.search(path.blobId);

/**
 * Returns the `mimeType` from the Screenshot Response Event.
 * This is the describes the type of blob content uploaded.
 *
 * Path is `payload.mimeType`.
 *
 * @function
 * @param {object} source The Screenshot Response Event instance
 * @returns {string}
 */
const getMimeType = kit.search(path.mimeType);

/**
 * Matcher can be used to find matching Screenshot Response Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  't.y.p.e==\'blob\'',
  't.i.m.e.s.t.a.m.p'
]);

/**
 * Tests the provided source against the matcher to see if it's Screenshot Response Event event.
 *
 * @function
 * @param {object} source The Screenshot Response Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Screenshot Response Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'blob',
  ...input
});

/**
 * Generates a Screenshot Response Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  blobId: 'abcdefg',
  mimeType: 'images/jpg',
  rootType: 'blob',
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
  getBlobId,
  getMimeType,
  isMatch,
  matcher,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
