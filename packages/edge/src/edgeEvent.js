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
var edgeEvent_json_1 = __importDefault(require("../schemas/edgeEvent.json"));
/**
 * Contains constants and functions for a Generic Edge Event.
 *
 * The structure for a Generic Edge Event is as follows:
 * ```
 * {
 *   payload: {
 *     attributes: {
 *       requestId: <string>,
 *       source: <string>,
 *     },
 *     name: <string>,
 *     messages: <array>,
 *     context: <object>,
 *   },
 *   type: 'service'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace edgeEvent
 */
/**
 * Paths for the keys on a Generic Edge Event
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** An object containing metadata about the request.<br />Path is `payload.attributes`. */
    attributes: 'payload.attributes',
    /** The request id that is shared between the different service requests.<br />Path is `payload.attributes.requestId`. */
    requestId: 'payload.attributes.requestId',
    /** The event source.<br />Path is `payload.attributes.source`. */
    eventSource: 'payload.attributes.source',
    /** The name of the event.<br />Path is `payload.name`. */
    name: 'payload.name',
    /** Messages received from the service.<br />Path is `payload.messages`. */
    messages: 'payload.messages',
    /** Additional context provided by the service.<br />Path is `payload.context`. */
    context: 'payload.context',
    /** The type of event.<br />Path is `type`. */
    rootType: 'type',
    /** Array of Annotation objects.<br />Path is `annotations`. */
    annotations: 'annotations',
    /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
    clientId: 'clientId',
    /** When the event occurred.<br />Path is `timestamp`. */
    timestamp: 'timestamp',
    /** Uniquely identifies each event.<br />Path is `uuid`. */
    rootId: 'uuid'
};
/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
var parentDepth = 1;
/**
 * A label that can be used when describing this object
 */
var label = 'Generic Edge Event';
/**
 * A grouping for this object
 */
var group = 'event';
/**
 * The value for `rootType` for a Generic Edge Event.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'service';
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
 * Returns the `attributes` from the Generic Edge Event.
 * This is the an object containing metadata about the request.
 *
 * Path is `payload,attributes`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {object}
 */
var getAttributes = kit.search(path.attributes);
/**
 * Returns the data using the specified path from the attributes
 * of the Generic Edge Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Generic Edge Event instance
 * @returns {*}
 */
var getAttributesKey = kit.curry(function (searchPath, source) { return kit.search(path.attributes + "." + searchPath, source); });
/**
 * Returns the `requestId` from the Generic Edge Event.
 * This is the the request id that is shared between the different service requests.
 *
 * Path is `payload,attributes,requestId`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {string}
 */
var getRequestId = kit.search(path.requestId);
/**
 * Returns the `eventSource` from the Generic Edge Event.
 * This is the the event source.
 *
 * Path is `payload,attributes,source`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {string}
 */
var getEventSource = kit.search(path.eventSource);
/**
 * Returns the `name` from the Generic Edge Event.
 * This is the the name of the event.
 *
 * Path is `payload,name`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {string}
 */
var getName = kit.search(path.name);
/**
 * Returns the `messages` from the Generic Edge Event.
 * This is the messages received from the service.
 *
 * Path is `payload,messages`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {Array}
 */
var getMessages = kit.search(path.messages);
/**
 * Returns the `context` from the Generic Edge Event.
 * This is the additional context provided by the service.
 *
 * Path is `payload,context`.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {object}
 */
var getContext = kit.search(path.context);
/**
 * Returns the data using the specified path from the context
 * of the Generic Edge Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Generic Edge Event instance
 * @returns {*}
 */
var getContextKey = kit.curry(function (searchPath, source) { return kit.search(path.context + "." + searchPath, source); });
/**
 * Matcher can be used to find matching Generic Edge Event objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'payload.attributes.requestId',
    'payload.attributes.source',
    'type==`service`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Generic Edge Event event.
 *
 * @function
 * @param {object} source The Generic Edge Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Generic Edge Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ rootType: 'service' }, input)); };
/**
 * Generates a Generic Edge Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ requestId: '93619B4C-D4EE-4BA9-BE3F-DD430A155013', eventSource: 'com.adobe.edge.konductor', rootType: 'service', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: edgeEvent_json_1["default"], get: get }, customExports), { getAttributes: getAttributes, getAttributesKey: getAttributesKey, getRequestId: getRequestId, getEventSource: getEventSource, getName: getName, getMessages: getMessages, getContext: getContext, getContextKey: getContextKey, isMatch: isMatch, matcher: matcher, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
