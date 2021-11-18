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
var session_json_1 = __importDefault(require("../schemas/session.json"));
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
var path = {
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
var parentDepth = 0;
/**
 * A label that can be used when describing this object
 */
var label = 'Griffon Session';
/**
 * A grouping for this object
 */
var group = 'construct';
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
 * Returns the `annotations` from the Griffon Session.
 * This is the array of SessionAnnotation objects.
 *
 * Path is `annotations`.
 *
 * @function
 * @param {object} source The Griffon Session instance
 * @returns {Array}
 */
var getAnnotations = kit.search(path.annotations);
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
var getLink = kit.search(path.link);
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
var getFirstName = kit.search(path.firstName);
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
var getLastName = kit.search(path.lastName);
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
var getName = kit.search(path.name);
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
var getSessionId = kit.search(path.sessionId);
/**
 * Generates a Griffon Session with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = kit.expand;
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
var mock = function (input) { return kit.expandWithPaths(path, __assign({ link: 'test://', firstName: 'John', lastName: 'Doe', name: 'Test', sessionId: 'abc' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: session_json_1["default"], get: get }, customExports), { getAnnotations: getAnnotations, getLink: getLink, getFirstName: getFirstName, getLastName: getLastName, getName: getName, getSessionId: getSessionId, label: label, group: group, parentDepth: parentDepth });
