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
var networkRequest_json_1 = __importDefault(require("../schemas/networkRequest.json"));
/**
 * Contains constants and functions for a Network Request.
 *
 * The structure for a Network Request is as follows:
 * ```
 * {
 *   payload: {
 *     body: <object>,
 *     initiator: <string>,
 *     location: {
 *       domain: <string>,
 *       hash: <string>,
 *       host: <string>,
 *       hostname: <string>,
 *       origin: <string>,
 *       path: <string>,
 *       port: <string>,
 *       protocol: <string>,
 *       query: <string>,
 *     },
 *     method: <string>,
 *     requestId: <string>,
 *     url: <string>,
 *   },
 *   type: 'netreq'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace networkRequest
 */
/**
 * Paths for the keys on a Network Request
 *
 * @enum {string}
 */
var path = {
    /** An object with custom data describing the event.<br />Path is `payload`. */
    payload: 'payload',
    /** The posted body. This is a fully parsed object..<br />Path is `payload.body`. */
    body: 'payload.body',
    /** The webpage that initiated the request..<br />Path is `payload.initiator`. */
    initiator: 'payload.initiator',
    /** Parsed information from the request URL..<br />Path is `payload.location`. */
    location: 'payload.location',
    /** The domain portion of the request URL..<br />Path is `payload.location.domain`. */
    domain: 'payload.location.domain',
    /** The hash portion of the request URL..<br />Path is `payload.location.hash`. */
    hash: 'payload.location.hash',
    /** The host portion of the request URL. Includes port number.<br />Path is `payload.location.host`. */
    host: 'payload.location.host',
    /** The host portion of the request URL without the port number..<br />Path is `payload.location.hostname`. */
    hostname: 'payload.location.hostname',
    /** The origin portion of the request URL..<br />Path is `payload.location.origin`. */
    origin: 'payload.location.origin',
    /** The path of the request URL..<br />Path is `payload.location.path`. */
    path: 'payload.location.path',
    /** The port of the request URL..<br />Path is `payload.location.port`. */
    port: 'payload.location.port',
    /** The protocol portion of the request URL..<br />Path is `payload.location.protocol`. */
    protocol: 'payload.location.protocol',
    /** The query string portion of the request URL..<br />Path is `payload.location.query`. */
    query: 'payload.location.query',
    /** HTTP method that the request is made with..<br />Path is `payload.method`. */
    method: 'payload.method',
    /** ID that can be used to pair requests with responses..<br />Path is `payload.requestId`. */
    requestId: 'payload.requestId',
    /** The URL the request is being made to. Contains the full host, path, and query string..<br />Path is `payload.url`. */
    url: 'payload.url',
    /** The type of event. For network requests it's always 'netreq'..<br />Path is `type`. */
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
var label = 'Network Request';
/**
 * A grouping for this object
 */
var group = 'network';
/**
 * The value for `rootType` for a Network Request.
 *
 * Path is `type`.
 *
 * @constant
 */
var ROOT_TYPE = 'netreq';
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
 * Returns the `body` from the Network Request.
 * This is the the posted body. This is a fully parsed object..
 *
 * Path is `payload,body`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {object}
 */
var getBody = kit.search(path.body);
/**
 * Returns the data using the specified path from the body
 * of the Network Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Network Request instance
 * @returns {*}
 */
var getBodyKey = kit.curry(function (searchPath, source) { return kit.search(path.body + "." + searchPath, source); });
/**
 * Returns the `initiator` from the Network Request.
 * This is the the webpage that initiated the request..
 *
 * Path is `payload,initiator`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getInitiator = kit.search(path.initiator);
/**
 * Returns the `location` from the Network Request.
 * This is the parsed information from the request URL..
 *
 * Path is `payload,location`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {object}
 */
var getLocation = kit.search(path.location);
/**
 * Returns the data using the specified path from the location
 * of the Network Request.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Network Request instance
 * @returns {*}
 */
var getLocationKey = kit.curry(function (searchPath, source) { return kit.search(path.location + "." + searchPath, source); });
/**
 * Returns the `domain` from the Network Request.
 * This is the the domain portion of the request URL..
 *
 * Path is `payload,location,domain`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getDomain = kit.search(path.domain);
/**
 * Returns the `hash` from the Network Request.
 * This is the the hash portion of the request URL..
 *
 * Path is `payload,location,hash`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getHash = kit.search(path.hash);
/**
 * Returns the `host` from the Network Request.
 * This is the the host portion of the request URL. Includes port number.
 *
 * Path is `payload,location,host`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getHost = kit.search(path.host);
/**
 * Returns the `hostname` from the Network Request.
 * This is the the host portion of the request URL without the port number..
 *
 * Path is `payload,location,hostname`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getHostname = kit.search(path.hostname);
/**
 * Returns the `origin` from the Network Request.
 * This is the the origin portion of the request URL..
 *
 * Path is `payload,location,origin`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getOrigin = kit.search(path.origin);
/**
 * Returns the `path` from the Network Request.
 * This is the the path of the request URL..
 *
 * Path is `payload,location,path`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getPath = kit.search(path.path);
/**
 * Returns the `port` from the Network Request.
 * This is the the port of the request URL..
 *
 * Path is `payload,location,port`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getPort = kit.search(path.port);
/**
 * Returns the `protocol` from the Network Request.
 * This is the the protocol portion of the request URL..
 *
 * Path is `payload,location,protocol`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getProtocol = kit.search(path.protocol);
/**
 * Returns the `query` from the Network Request.
 * This is the the query string portion of the request URL..
 *
 * Path is `payload,location,query`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getQuery = kit.search(path.query);
/**
 * Returns the `method` from the Network Request.
 * This is the hTTP method that the request is made with..
 *
 * Path is `payload,method`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getMethod = kit.search(path.method);
/**
 * Returns the `requestId` from the Network Request.
 * This is the iD that can be used to pair requests with responses..
 *
 * Path is `payload,requestId`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getRequestId = kit.search(path.requestId);
/**
 * Returns the `url` from the Network Request.
 * This is the the URL the request is being made to. Contains the full host, path, and query string..
 *
 * Path is `payload,url`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getUrl = kit.search(path.url);
/**
 * Returns the `rootType` from the Network Request.
 * This is the the type of event. For network requests it's always 'netreq'..
 *
 * Path is `type`.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {string}
 */
var getRootType = kit.search(path.rootType);
/**
 * Matcher can be used to find matching Network Request objects.
 *
 * @see kit.match
 * @constant
 */
var matcher = kit.combineAll([
    'type==`netreq`',
    'timestamp'
]);
/**
 * Tests the provided source against the matcher to see if it's Network Request event.
 *
 * @function
 * @param {object} source The Network Request instance
 * @returns {boolean}
 * @see kit.isMatch
 */
var isMatch = function (source) { return kit.isMatch(matcher, source); };
/**
 * Generates a Network Request with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = function (input) { return kit.expandWithPaths(path, __assign({ rootType: 'netreq' }, input)); };
/**
 * Generates a Network Request with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ body: { firstName: 'Harvey', lastName: 'Jacobs' }, initiator: 'http://test.demo.com', domain: 'demo.com', host: 'alt.demo.com', hostname: 'alt.demo.com', origin: 'http://alt.demo.com', path: '/path/to/demo', protocol: 'https', query: 'mode=details', method: 'GET', requestId: 'abcdefg', url: 'http://alt.demo.com/path/to/demo?mode=details', rootType: 'netreq', clientId: 'appleABC', timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'), rootId: '123' }, input)); };
/* ADD CUSTOM CONTENT BELOW */
// additional exports should be added here:
var customExports = {};
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: networkRequest_json_1["default"], get: get }, customExports), { getBody: getBody, getBodyKey: getBodyKey, getInitiator: getInitiator, getLocation: getLocation, getLocationKey: getLocationKey, getDomain: getDomain, getHash: getHash, getHost: getHost, getHostname: getHostname, getOrigin: getOrigin, getPath: getPath, getPort: getPort, getProtocol: getProtocol, getQuery: getQuery, getMethod: getMethod, getRequestId: getRequestId, getUrl: getUrl, getRootType: getRootType, isMatch: isMatch, matcher: matcher, ROOT_TYPE: ROOT_TYPE, label: label, group: group, parentDepth: parentDepth });
