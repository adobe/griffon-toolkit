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
import schema from '../schemas/configuration.json';

/**
 * Contains constants and functions for a Configuration Event.
 *
 * The structure for a Configuration Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       build.environment: <string>,
 *       experienceCloud.org: <string>,
 *       property.id: <string>,
 *       rules.url: <string>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.configuration'
 *     ACPExtensionEventName: <string>,
 *     ACPExtensionEventNumber: <integer>,
 *     ACPExtensionEventUniqueIdentifier: <string>,
 *   },
 *   type: 'generic'
 *   vendor: <string>,
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace configuration
 */

/**
 * Paths for the keys on a Configuration Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** The full list of current configuration values.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** In the Launch UI, the type of environment this configuration was generated for.<br />Path is `payload.ACPExtensionEventData."build.environment"`. */
  buildEnvironment: 'payload.ACPExtensionEventData."build.environment"',

  /** The IMS Org that the mobile app's config was created by.<br />Path is `payload.ACPExtensionEventData."experienceCloud.org"`. */
  experienceCloudOrg: 'payload.ACPExtensionEventData."experienceCloud.org"',

  /** The ID of the property inside launch.<br />Path is `payload.ACPExtensionEventData."property.id"`. */
  launchPropertyId: 'payload.ACPExtensionEventData."property.id"',

  /** The URL to download the rules configuration for the property.<br />Path is `payload.ACPExtensionEventData."rules.url"`. */
  rulesUrl: 'payload.ACPExtensionEventData."rules.url"',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** The name of the event.<br />Path is `payload.ACPExtensionEventName`. */
  eventName: 'payload.ACPExtensionEventName',

  /** The event number generated by the SDK.<br />Path is `payload.ACPExtensionEventNumber`. */
  sdkEventNumber: 'payload.ACPExtensionEventNumber',

  /** The unique event id.<br />Path is `payload.ACPExtensionEventUniqueIdentifier`. */
  eventId: 'payload.ACPExtensionEventUniqueIdentifier',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
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
const label = 'Configuration Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Configuration Event.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';

/**
 * The value for `eventType` for a Configuration Event.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.configuration';

/**
 * The value for `rootType` for a Configuration Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'generic';

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
 * Returns the `eventData` from the Configuration Event.
 * This is the the full list of current configuration values.
 *
 * Path is `payload,ACPExtensionEventData`.
 *
 * @function
 * @param {object} source The Configuration Event instance
 * @returns {object}
 */
const getEventData = kit.search(path.eventData);

/**
 * Returns the data using the specified path from the eventData
 * of the Configuration Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Configuration Event instance
 * @returns {*}
 */
const getEventDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.eventData}.${searchPath}`, source)
);

/**
 * Returns the `buildEnvironment` from the Configuration Event.
 * This is the in the Launch UI, the type of environment this configuration was generated for.
 *
 * Path is `payload,ACPExtensionEventData,build.environment`.
 *
 * @function
 * @param {object} source The Configuration Event instance
 * @returns {string}
 */
const getBuildEnvironment = kit.search(path.buildEnvironment);

/**
 * Returns the `experienceCloudOrg` from the Configuration Event.
 * This is the the IMS Org that the mobile app's config was created by.
 *
 * Path is `payload,ACPExtensionEventData,experienceCloud.org`.
 *
 * @function
 * @param {object} source The Configuration Event instance
 * @returns {string}
 */
const getExperienceCloudOrg = kit.search(path.experienceCloudOrg);

/**
 * Returns the `launchPropertyId` from the Configuration Event.
 * This is the the ID of the property inside launch.
 *
 * Path is `payload,ACPExtensionEventData,property.id`.
 *
 * @function
 * @param {object} source The Configuration Event instance
 * @returns {string}
 */
const getLaunchPropertyId = kit.search(path.launchPropertyId);

/**
 * Returns the `rulesUrl` from the Configuration Event.
 * This is the the URL to download the rules configuration for the property.
 *
 * Path is `payload,ACPExtensionEventData,rules.url`.
 *
 * @function
 * @param {object} source The Configuration Event instance
 * @returns {string}
 */
const getRulesUrl = kit.search(path.rulesUrl);

/**
 * Matcher can be used to find matching Configuration Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
  'payload.ACPExtensionEventType==\'com.adobe.eventtype.configuration\'',
  'type==\'generic\'',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Configuration Event event.
 *
 * @function
 * @param {object} source The Configuration Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Configuration Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.configuration',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Configuration Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  buildEnvironment: 'dev',
  experienceCloudOrg: 'abc@AdobeOrg',
  launchPropertyId: 'abcd1234',
  rulesUrl: 'http://assets.adobedtm.com/abc/abcdefg-development-rules.zip',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.configuration',
  rootType: 'generic',
  vendor: 'com.adobe.mobile.sdk',
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
  getEventData,
  getEventDataKey,
  getBuildEnvironment,
  getExperienceCloudOrg,
  getLaunchPropertyId,
  getRulesUrl,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
