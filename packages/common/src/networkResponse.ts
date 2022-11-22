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
import schema from '../schemas/networkResponse.json';

/**
 * Contains constants and functions for a Network Response.
 *
 * The structure for a Network Response is as follows:
 * ```
 * {
 *   payload: {
 *     fromCache: <boolean>,
 *     initiator: <string>,
 *     ip: <string>,
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
 *     responseHeaders: <object>,
 *     requestId: <string>,
 *     statusCode: <integer>,
 *     statusLine: <string>,
 *     url: <string>,
 *   },
 *   type: 'netres'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace networkResponse
 */

/**
 * Paths for the keys on a Network Response
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** Whether the data was loaded from the browser cache..<br />Path is `payload.fromCache`. */
  fromCache: 'payload.fromCache',

  /** The webpage that initiated the request..<br />Path is `payload.initiator`. */
  initiator: 'payload.initiator',

  /** The ip address of the server..<br />Path is `payload.ip`. */
  ip: 'payload.ip',

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

  /** The headers returned from the server..<br />Path is `payload.responseHeaders`. */
  responseHeaders: 'payload.responseHeaders',

  /** ID that can be used to pair requests with responses..<br />Path is `payload.requestId`. */
  requestId: 'payload.requestId',

  /** The resulting status code of the request..<br />Path is `payload.statusCode`. */
  statusCode: 'payload.statusCode',

  /** More details about the status of the request..<br />Path is `payload.statusLine`. */
  statusLine: 'payload.statusLine',

  /** The URL the request is being made to. Contains the full host, path, and query string..<br />Path is `payload.url`. */
  url: 'payload.url',

  /** The type of event. For network responses it's always 'netres'..<br />Path is `type`. */
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
const parentDepth = 1;

/**
 * The name of this event. Same as the file name
 */
const uniqueName = 'networkResponse';

/**
 * The package of this event
 */
const packageName = 'common';

/**
 * The unique name of this event
 */
const label = 'Network Response';

/**
 * A grouping for this object
 */
const group = 'network';

/**
 * The value for `rootType` for a Network Response.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'netres';

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
 * Returns the `fromCache` from the Network Response.
 * This is the whether the data was loaded from the browser cache..
 *
 * Path is `payload,fromCache`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {boolean}
 */
const getFromCache = kit.search(path.fromCache);

/**
 * Returns the `initiator` from the Network Response.
 * This is the the webpage that initiated the request..
 *
 * Path is `payload,initiator`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getInitiator = kit.search(path.initiator);

/**
 * Returns the `ip` from the Network Response.
 * This is the the ip address of the server..
 *
 * Path is `payload,ip`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getIp = kit.search(path.ip);

/**
 * Returns the `location` from the Network Response.
 * This is the parsed information from the request URL..
 *
 * Path is `payload,location`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {object}
 */
const getLocation = kit.search(path.location);

/**
 * Returns the data using the specified path from the location
 * of the Network Response.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Network Response instance
 * @returns {*}
 */
const getLocationKey = kit.curry(
  (searchPath, source) => kit.search(`${path.location}.${searchPath}`, source)
);

/**
 * Returns the `domain` from the Network Response.
 * This is the the domain portion of the request URL..
 *
 * Path is `payload,location,domain`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getDomain = kit.search(path.domain);

/**
 * Returns the `hash` from the Network Response.
 * This is the the hash portion of the request URL..
 *
 * Path is `payload,location,hash`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getHash = kit.search(path.hash);

/**
 * Returns the `host` from the Network Response.
 * This is the the host portion of the request URL. Includes port number.
 *
 * Path is `payload,location,host`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getHost = kit.search(path.host);

/**
 * Returns the `hostname` from the Network Response.
 * This is the the host portion of the request URL without the port number..
 *
 * Path is `payload,location,hostname`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getHostname = kit.search(path.hostname);

/**
 * Returns the `origin` from the Network Response.
 * This is the the origin portion of the request URL..
 *
 * Path is `payload,location,origin`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getOrigin = kit.search(path.origin);

/**
 * Returns the `path` from the Network Response.
 * This is the the path of the request URL..
 *
 * Path is `payload,location,path`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getPath = kit.search(path.path);

/**
 * Returns the `port` from the Network Response.
 * This is the the port of the request URL..
 *
 * Path is `payload,location,port`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getPort = kit.search(path.port);

/**
 * Returns the `protocol` from the Network Response.
 * This is the the protocol portion of the request URL..
 *
 * Path is `payload,location,protocol`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getProtocol = kit.search(path.protocol);

/**
 * Returns the `query` from the Network Response.
 * This is the the query string portion of the request URL..
 *
 * Path is `payload,location,query`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getQuery = kit.search(path.query);

/**
 * Returns the `method` from the Network Response.
 * This is the hTTP method that the request is made with..
 *
 * Path is `payload,method`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getMethod = kit.search(path.method);

/**
 * Returns the `responseHeaders` from the Network Response.
 * This is the the headers returned from the server..
 *
 * Path is `payload,responseHeaders`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {object}
 */
const getResponseHeaders = kit.search(path.responseHeaders);

/**
 * Returns the data using the specified path from the responseHeaders
 * of the Network Response.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Network Response instance
 * @returns {*}
 */
const getResponseHeadersKey = kit.curry(
  (searchPath, source) => kit.search(`${path.responseHeaders}.${searchPath}`, source)
);

/**
 * Returns the `requestId` from the Network Response.
 * This is the iD that can be used to pair requests with responses..
 *
 * Path is `payload,requestId`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getRequestId = kit.search(path.requestId);

/**
 * Returns the `statusCode` from the Network Response.
 * This is the the resulting status code of the request..
 *
 * Path is `payload,statusCode`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {number}
 */
const getStatusCode = kit.search(path.statusCode);

/**
 * Returns the `statusLine` from the Network Response.
 * This is the more details about the status of the request..
 *
 * Path is `payload,statusLine`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getStatusLine = kit.search(path.statusLine);

/**
 * Returns the `url` from the Network Response.
 * This is the the URL the request is being made to. Contains the full host, path, and query string..
 *
 * Path is `payload,url`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getUrl = kit.search(path.url);

/**
 * Returns the `rootType` from the Network Response.
 * This is the the type of event. For network responses it's always 'netres'..
 *
 * Path is `type`.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {string}
 */
const getRootType = kit.search(path.rootType);

/**
 * Matcher can be used to find matching Network Response objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'type==`netres`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Network Response event.
 *
 * @function
 * @param {object} source The Network Response instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Network Response with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'netres',
  ...input
});

/**
 * Generates a Network Response with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  fromCache: false,
  initiator: 'http://test.demo.com',
  ip: '50.51.52.53',
  domain: 'demo.com',
  host: 'alt.demo.com',
  hostname: 'alt.demo.com',
  origin: 'http://alt.demo.com',
  path: '/path/to/demo',
  protocol: 'https',
  query: 'mode=details',
  method: 'GET',
  responseHeaders: { 'Content-Type': 'image/png' },
  requestId: 'abcdefg',
  statusCode: 200,
  statusLine: 'HTTP/1.1 200 OK',
  url: 'http://alt.demo.com/path/to/demo?mode=details',
  rootType: 'netres',
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
  getFromCache,
  getInitiator,
  getIp,
  getLocation,
  getLocationKey,
  getDomain,
  getHash,
  getHost,
  getHostname,
  getOrigin,
  getPath,
  getPort,
  getProtocol,
  getQuery,
  getMethod,
  getResponseHeaders,
  getResponseHeadersKey,
  getRequestId,
  getStatusCode,
  getStatusLine,
  getUrl,
  getRootType,
  isMatch,
  matcher,
  ROOT_TYPE,
  label,
  group,
  parentDepth,
  uniqueName,
  packageName
};
