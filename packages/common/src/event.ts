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
import schema from '../schemas/event.json';

/**
 * Contains constants and functions for a Generic Event.
 *
 * The structure for a Generic Event is as follows:
 * ```
 * {
 *   annotations: <array>,
 *   clientId: <string>,
 *   payload: <object>,
 *   timestamp: <number>,
 *   type: <enum(blob, client, control, generic, log, status)>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace event
 */

/**
 * Paths for the keys on a Generic Event
 *
 * @enum {string}
 */
const path = {
  /** Array of Annotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

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
const parentDepth = 0;

/**
 * The name of this event. Same as the file name
 */
const uniqueName = 'event';

/**
 * The package of this event
 */
const packageName = 'common';

/**
 * The unique name of this event
 */
const label = 'Generic Event';

/**
 * A grouping for this object
 */
const group = 'event';

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
 * Returns the `annotations` from the Generic Event.
 * This is the array of Annotation objects.
 *
 * Path is `annotations`.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {Array}
 */
const getAnnotations = kit.search(path.annotations);

/**
 * Returns the `clientId` from the Generic Event.
 * This is the a unique id that differentiates clients from one another.
 *
 * Path is `clientId`.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {string}
 */
const getClientId = kit.search(path.clientId);

/**
 * Returns the `payload` from the Generic Event.
 * This is the an object with custom data describing the event.
 *
 * Path is `payload`.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {object}
 */
const getPayload = kit.search(path.payload);

/**
 * Returns the data using the specified path from the payload
 * of the Generic Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Generic Event instance
 * @returns {*}
 */
const getPayloadKey = kit.curry(
  (searchPath, source) => kit.search(`${path.payload}.${searchPath}`, source)
);

/**
 * Returns the `timestamp` from the Generic Event.
 * This is the when the event occurred.
 *
 * Path is `timestamp`.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {number}
 */
const getTimestamp = kit.search(path.timestamp);

/**
 * Returns the `rootType` from the Generic Event.
 * This is the the type of event.
 *
 * Path is `type`.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {string}
 */
const getRootType = kit.search(path.rootType);

/**
 * Returns the `rootId` from the Generic Event.
 * This is the uniquely identifies each event.
 *
 * Path is `uuid`.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {string}
 */
const getRootId = kit.search(path.rootId);

/**
 * Matcher can be used to find matching Generic Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'timestamp',
  'type'
]);

/**
 * Tests the provided source against the matcher to see if it's Generic Event event.
 *
 * @function
 * @param {object} source The Generic Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Generic Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = kit.expand;

/**
 * Generates a Generic Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootType: 'generic',
  rootId: '123',
  ...input
});

/* ADD CUSTOM CONTENT BELOW */
/* eslint import/first: 0 */

import annotation from './annotation';

/**
 * Makes a event filter using the provided client ids.
 *
 * @function
 * @param {string[]} clients Array of clientIds to filter by
 * @returns {object} Filter object
 */
const makeClientFilter = (clients) => kit.combineAny(
  clients.map((client) => `${path.clientId} == \`${client}\``)
);

/**
 * Makes a hidden event filter based on the provided clear timestamp. If null, we'll filter all
 * events with a hidden annotation set. If provided, we'll also hide everything before that timestamp
 * unless the hidden annotation is explicitly set to `false`.
 *
 * @function
 * @param {number=} clearTS Hide events before this timestamp
 * @returns {object} Filter object
 */
const makeHiddenFilter = (clearTS?: number) => (clearTS
  ? kit.combineAll([
    kit.not(`${annotation.publicMatcher.hidden} == \`true\``),
    kit.combineAny([
      `${path.timestamp} > \`${clearTS}\``,
      `${annotation.publicMatcher.hidden} == \`false\``
    ])
  ])
  : kit.not(`${annotation.publicMatcher.hidden} == \`true\``)
);

// additional exports should be added here:
const customExports = { makeClientFilter, makeHiddenFilter };

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getAnnotations,
  getClientId,
  getPayload,
  getPayloadKey,
  getTimestamp,
  getRootType,
  getRootId,
  isMatch,
  matcher,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
