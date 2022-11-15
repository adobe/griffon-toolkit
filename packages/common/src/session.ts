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
import schema from '../schemas/session.json';

/**
 * Contains constants and functions for a Griffon Session.
 *
 * The structure for a Griffon Session is as follows:
 * ```
 * {
 *   annotations: <array>,
 *   link: <string>,
 *   firstName: <string>,
 *   lastName: <string>,
 *   name: <string>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace session
 */

/**
 * Paths for the keys on a Griffon Session
 *
 * @enum {string}
 */
const path = {
  /** Array of SessionAnnotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** The base url of the application connected to this session.<br />Path is `link`. */
  link: 'link',

  /** The first name of the user who created the session.<br />Path is `firstName`. */
  firstName: 'firstName',

  /** The last name of the user who created the session.<br />Path is `lastName`. */
  lastName: 'lastName',

  /** The name of the session.<br />Path is `name`. */
  name: 'name',

  /** Uniquely identifies each session.<br />Path is `uuid`. */
  sessionId: 'uuid'
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
const uniqueName = 'session';

/**
 * The package of this event
 */
const packageName = 'common';

/**
 * The unique name of this event
 */
const label = 'Griffon Session';

/**
 * A grouping for this object
 */
const group = 'construct';

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
 * Returns the `annotations` from the Griffon Session.
 * This is the array of SessionAnnotation objects.
 *
 * Path is `annotations`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {Array}
 */
const getAnnotations = kit.search(path.annotations);

/**
 * Returns the `link` from the Griffon Session.
 * This is the the base url of the application connected to this session.
 *
 * Path is `link`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {string}
 */
const getLink = kit.search(path.link);

/**
 * Returns the `firstName` from the Griffon Session.
 * This is the the first name of the user who created the session.
 *
 * Path is `firstName`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {string}
 */
const getFirstName = kit.search(path.firstName);

/**
 * Returns the `lastName` from the Griffon Session.
 * This is the the last name of the user who created the session.
 *
 * Path is `lastName`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {string}
 */
const getLastName = kit.search(path.lastName);

/**
 * Returns the `name` from the Griffon Session.
 * This is the the name of the session.
 *
 * Path is `name`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {string}
 */
const getName = kit.search(path.name);

/**
 * Returns the `sessionId` from the Griffon Session.
 * This is the uniquely identifies each session.
 *
 * Path is `uuid`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {string}
 */
const getSessionId = kit.search(path.sessionId);

/**
 * Generates a Griffon Session with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = kit.expand;

/**
 * Generates a Griffon Session with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  link: 'test://',
  firstName: 'John',
  lastName: 'Doe',
  name: 'Test',
  sessionId: 'abc',
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
  getAnnotations,
  getLink,
  getFirstName,
  getLastName,
  getName,
  getSessionId,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
