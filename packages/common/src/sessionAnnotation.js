"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var kit = __importStar(require("@adobe/griffon-toolkit"));
var sessionAnnotation_json_1 = __importDefault(require("../schemas/sessionAnnotation.json"));
/**
 * Contains constants and functions for a Session Annotation Object.
 *
 * The structure for a Session Annotation Object is as follows:
 * ```
 * {
 *   payload: <object>,
 *   namespace: <string>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace sessionAnnotation
 */
/**
 * Paths for the keys on a Session Annotation Object
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the annotation.<br />Path is `payload`. */
    payload: 'payload',
    /** This is to scope annotations and prevent overwrites from other plugins. The type is usually determined by the plugin writing the annotation.<br />Path is `namespace`. */
    namespace: 'namespace',
    /** Uniquely identifies each annotation.<br />Path is `uuid`. */
    uuid: 'uuid'
};
/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
var parentDepth = 0;
/**
 * A label that can be used when describing this object
 */
var label = 'Session Annotation Object';
/**
 * A grouping for this object
 */
var group = 'undefined';
/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param {string} alias Path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
var get = function (alias, data) {
    var func = function (data2) { return kit.search(path[alias] || alias, data2); };
    if (!data) {
        return func;
    }
    return func(data);
};
/**
 * Returns the `payload` from the Session Annotation Object.
 * This is the an object with custom data describing the annotation.
 *
 * Path is `payload`.
 *
 * @function
 * @param {object} source The Session Annotation Object instance
 * @returns {object}
 */
var getPayload = kit.search(path.payload);
/**
 * Returns the data using the specified path from the payload
 * of the Session Annotation Object.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Session Annotation Object instance
 * @returns {*}
 */
var getPayloadKey = kit.curry(function (searchPath, source) { return kit.search(path.payload + "." + searchPath, source); });
/**
 * Returns the `namespace` from the Session Annotation Object.
 * This is the this is to scope annotations and prevent overwrites from other plugins. The type is usually determined by the plugin writing the annotation.
 *
 * Path is `namespace`.
 *
 * @function
 * @param {object} source The Session Annotation Object instance
 * @returns {string}
 */
var getNamespace = kit.search(path.namespace);
/**
 * Returns the `uuid` from the Session Annotation Object.
 * This is the uniquely identifies each annotation.
 *
 * Path is `uuid`.
 *
 * @function
 * @param {object} source The Session Annotation Object instance
 * @returns {string}
 */
var getUuid = kit.search(path.uuid);
/**
 * Generates a Session Annotation Object with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = kit.expand;
/**
 * Generates a Session Annotation Object with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ namespace: 'visibility', uuid: '423' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
/**
 * List of keys that are used in the public namespaces
 *
 * @enum {string}
 */
var publicKey = {
    /** Key used in session to mark a session as cleared before this timestamp */
    clearSessionTS: 'clearSessionTS'
};
/**
 * List of namespaces that are available to all plugins
 *
 * @enum {string}
 */
var publicNamespace = {
    /** Namespace for annotations that effect event visibility */
    visibility: 'visibility'
};
/**
 * Returns a path using the provided namespace. If the optional key is provided, it
 * will return that key from the payload.
 *
 * @example
 * import { kit, session, sessionAnnotation } from '@adobe/griffon-toolkit';
 * const publicPath = sessionAnnotation.makeNamespacePath('shared', 'pubic');
 *
 * const session = session.mock({
 *   annotations: [
 *     annotation.mock({
 *       [sessionAnnotation.path.namespace]: 'shared',
 *       [sessionAnnotation.path.payload]: { pubic: true }
 *     })
 *   ]
 * });
 *
 * console.log(kit.search(publicPath, session))); // [true]
 *
 * @function
 * @param {string} namespace The namespace to reference
 * @param {string} [key] Key inside payload
 * @returns {string}
 */
var makeNamespacePath = function (namespace, key) { return "(annotations[?namespace=='" + namespace + "'].payload" + (key ? "." + key : '') + ")[0]"; };
/**
 * Returns a the value of the path using the provided namespace and key.
 *
 * @example
 * import { kit, session, sessionAnnotation } from '@adobe/griffon-toolkit';
 * const isPublic = sessionAnnotation.search('shared', 'pubic');
 *
 * const session = session.mock({
 *   annotations: [
 *     annotation.mock({
 *       [sessionAnnotation.path.namespace]: 'shared',
 *       [sessionAnnotation.path.payload]: { pubic: true }
 *     })
 *   ]
 * });
 *
 * console.log(isPublic(session)); // true
 *
 * @function
 * @param {string} namespace The namespace to reference
 * @param {string} [key] Key inside payload
 * @param {*} data Data to search
 * @returns {string}
 */
var search = kit.curry(function (namespace, key, data) { return kit.search(makeNamespacePath(namespace, key), data); });
// additional exports should be added here:
var customExports = {
    publicKey: publicKey,
    publicNamespace: publicNamespace,
    makeNamespacePath: makeNamespacePath,
    search: search
};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: sessionAnnotation_json_1["default"], get: get }, customExports), { getPayload: getPayload, getPayloadKey: getPayloadKey, getNamespace: getNamespace, getUuid: getUuid, label: label, group: group, parentDepth: parentDepth });
