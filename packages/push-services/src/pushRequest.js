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
import schema from '../schemas/pushRequest.json';

/**
 * Contains constants and functions for a Push Request.
 *
 * The structure for a Push Request is as follows:
 * ```
 * {
 *   payload: {
 *     event: 'push request from pipeline'
 *     groupID: <string>,
 *     platform: <string>,
 *     pushTokens: <string>,
 *   },
 *   type: 'Push Service'
 *   vendor: 'com.adobe.cepheus'
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace pushRequest
 */

/**
 * Paths for the keys on a Push Request
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The name of the event.<br />Path is `payload.event`. */
  eventName: 'payload.event',

  /** id to stitch the requests together.<br />Path is `payload.groupID`. */
  groupId: 'payload.groupID',

  /** The platform to send the push to.<br />Path is `payload.platform`. */
  platform: 'payload.platform',

  /** The push token to send to.<br />Path is `payload.pushTokens`. */
  pushToken: 'payload.pushTokens',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  /** The vendor of the service that sent the event.<br />Path is `vendor`. */
  vendor: 'vendor',

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
const label = 'Push Request';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventName` for a Push Request.
 *
 * Path is `payload,event`.
 *
 * @constant
 */
const EVENT_NAME = 'push request from pipeline';

/**
 * The value for `rootType` for a Push Request.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'Push Service';

/**
 * The value for `vendor` for a Push Request.
 *
 * Path is `vendor`.
 *
 * @constant
 */
const VENDOR = 'com.adobe.cepheus';

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
 * Returns the `eventName` from the Push Request.
 * This is the the name of the event.
 *
 * Path is `payload,event`.
 *
 * @function
 * @param {object} source The Push Request instance
 * @returns {string}
 */
const getEventName = kit.search(path.eventName);

/**
 * Returns the `groupId` from the Push Request.
 * This is the id to stitch the requests together.
 *
 * Path is `payload,groupID`.
 *
 * @function
 * @param {object} source The Push Request instance
 * @returns {string}
 */
const getGroupId = kit.search(path.groupId);

/**
 * Returns the `platform` from the Push Request.
 * This is the the platform to send the push to.
 *
 * Path is `payload,platform`.
 *
 * @function
 * @param {object} source The Push Request instance
 * @returns {string}
 */
const getPlatform = kit.search(path.platform);

/**
 * Returns the `pushToken` from the Push Request.
 * This is the the push token to send to.
 *
 * Path is `payload,pushTokens`.
 *
 * @function
 * @param {object} source The Push Request instance
 * @returns {string}
 */
const getPushToken = kit.search(path.pushToken);

/**
 * Matcher can be used to find matching Push Request objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.event==`push request from pipeline`',
  'type==`Push Service`',
  'vendor==`com.adobe.cepheus`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Push Request event.
 *
 * @function
 * @param {object} source The Push Request instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Push Request with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventName: 'push request from pipeline',
  rootType: 'Push Service',
  vendor: 'com.adobe.cepheus',
  ...input
});

/**
 * Generates a Push Request with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  eventName: 'push request from pipeline',
  groupId: 'the-group-id',
  platform: 'fcmV1',
  pushToken: 'asdfasdf-asdfasdf-asdfasdf',
  rootType: 'Push Service',
  vendor: 'com.adobe.cepheus',
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
  getEventName,
  getGroupId,
  getPlatform,
  getPushToken,
  isMatch,
  matcher,
  EVENT_NAME,
  ROOT_TYPE,
  VENDOR,
  label,
  group,
  parentDepth
};
