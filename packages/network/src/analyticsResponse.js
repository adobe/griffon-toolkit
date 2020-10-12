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
import schema from '../schemas/analyticsResponse.json';

/**
 * Contains constants and functions for a Network Request.
 *
 * The structure for a Network Request is as follows:
 * ```
 * {
 *   payload: {
 *     url: <string>,
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
 *   },
 *   type: 'netres'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace analyticsResponse
 */

/**
 * Paths for the keys on a Network Request
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The URL the request is being made to. Contains the full host, path, and query string..<br />Path is `payload.url`. */
  url: 'payload.url',

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
const parentDepth = 2;

/**
 * A label that can be used when describing this object
 */
const label = 'Network Request';

/**
 * A grouping for this object
 */
const group = 'network';

/**
 * The value for `rootType` for a Network Request.
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
 * @param path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = R.curry((alias, data) => kit.search(path[alias] || alias, data));

/**
 * Matcher can be used to find matching Network Request objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'matchRegEx(payload.url, \'/.*/b/ss/.*/\')',
  'type==\'netres\'',
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
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Network Request with the const values set.
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
 * Generates a Network Request with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  url: 'https://omnireportlaunch.112.2o7.net/b/ss/omnireport.launch/1/JS-2.20',
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
  isMatch,
  matcher,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
