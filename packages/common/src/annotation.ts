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
import schema from '../schemas/annotation.json';

/**
 * Contains constants and functions for a Annotation Object.
 *
 * The structure for a Annotation Object is as follows:
 * ```
 * {
 *   payload: <object>,
 *   type: <string>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace annotation
 */

/**
 * Paths for the keys on a Annotation Object
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the annotation.<br />Path is `payload`. */
  payload: 'payload',

  /** This is to scope annotations and prevent overwrites from other plugins. The type is usually determined by the plugin writing the annotation.<br />Path is `type`. */
  namespace: 'type',

  /** Uniquely identifies each annotation.<br />Path is `uuid`. */
  uuid: 'uuid'
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
const uniqueName = 'annotation';

/**
 * The package of this event
 */
const packageName = 'common';

/**
 * The unique name of this event
 */
const label = 'Annotation Object';

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
 * Returns the `payload` from the Annotation Object.
 * This is the an object with custom data describing the annotation.
 *
 * Path is `payload`.
 *
 * @function
 * @param {object} source The Annotation Object instance
 * @returns {object}
 */
const getPayload = kit.search(path.payload);

/**
 * Returns the data using the specified path from the payload
 * of the Annotation Object.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Annotation Object instance
 * @returns {*}
 */
const getPayloadKey = kit.curry(
  (searchPath, source) => kit.search(`${path.payload}.${searchPath}`, source)
);

/**
 * Returns the `namespace` from the Annotation Object.
 * This is the this is to scope annotations and prevent overwrites from other plugins. The type is usually determined by the plugin writing the annotation.
 *
 * Path is `type`.
 *
 * @function
 * @param {object} source The Annotation Object instance
 * @returns {string}
 */
const getNamespace = kit.search(path.namespace);

/**
 * Returns the `uuid` from the Annotation Object.
 * This is the uniquely identifies each annotation.
 *
 * Path is `uuid`.
 *
 * @function
 * @param {object} source The Annotation Object instance
 * @returns {string}
 */
const getUuid = kit.search(path.uuid);

/**
 * Generates a Annotation Object with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = kit.expand;

/**
 * Generates a Annotation Object with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  namespace: 'test_suite',
  uuid: '423',
  ...input
});

/* ADD CUSTOM CONTENT BELOW */

/**
 * List of keys that are used in the public namespaces
 *
 * @enum {string}
 */
const publicKey = {
  /** Key that indicates if an event is hidden or not */
  hidden: 'hidden',

  /** Key to toggle important events  */
  important: 'important',

  /** Key used for the main note in the note namespace */
  note: 'note'
};

/**
 * List of namespaces that are available to all plugins
 *
 * @enum {string}
 */
const publicNamespace = {
  /** Namespace for holding event notes */
  notes: 'notes',

  /** Namespace for annotations that effect event visibility */
  visibility: 'visibility'
};

/**
 * Returns a path using the provided namespace. If the optional key is provided, it
 * will return that key from the payload.
 *
 * @example
 * import { kit, event, annotation } from '@adobe/griffon-toolkit';
 * const isHidden = annotation.makeNamespacePath('visibility', 'hidden');
 * // isHidden is annotations[?type=='visibility'].payload.hidden
 *
 * const hiddenEvent = event.mock({
 *   annotations: [
 *     annotation.mock({
 *       [annotation.path.namespace]: 'visibility',
 *       [annotation.path.payload]: { hidden: true }
 *     })
 *   ]
 * });
 *
 * console.log(kit.search(isHidden, hiddenEvent)); // [true]
 *
 * @function
 * @param {string} namespace The namespace to reference
 * @param {string} [key] Key inside payload
 * @returns {string}
 */
const makeNamespacePath = (namespace: string, key?: string) => `(annotations[?type=='${namespace}'].payload${key ? `.${key}` : ''})[0]`;

/**
 * List of matchers that can pull data from common annotations
 */
const publicMatcher = {
  /** Path for determining if an event is visible or not */
  hidden: makeNamespacePath(
    publicNamespace.visibility,
    publicKey.hidden
  ),
  important: makeNamespacePath(
    publicNamespace.visibility,
    publicKey.important
  ),
  note: makeNamespacePath(
    publicNamespace.notes,
    publicKey.note
  )
};

// additional exports should be added here:
const customExports = {
  publicKey, publicMatcher, publicNamespace, makeNamespacePath
};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getPayload,
  getPayloadKey,
  getNamespace,
  getUuid,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
