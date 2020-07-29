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
import schema from '../schemas/lifecycleStart.json';

/**
 * Contains constants and functions for a Lifecycle Start.
 *
 * The structure for a Lifecycle Start is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       maxsessionlength: <integer>,
 *       sessionevent: <string>,
 *       lifecyclecontextdata: {
 *         appid: <string>,
 *         launches: <string>,
 *         crashevent: <string>,
 *         devicename: <string>,
 *         hourofday: <string>,
 *         dayssincelastuse: <string>,
 *         runmode: <string>,
 *         previousosversion: <string>,
 *         locale: <string>,
 *         carriername: <string>,
 *         dayssincefirstuse: <string>,
 *         dayofweek: <string>,
 *         launchevent: <string>,
 *         previousappid: <string>,
 *         resolution: <string>,
 *         ignoredsessionlength: <string>,
 *         osversion: <string>,
 *       },
 *       starttimestampseconds: <number>,
 *       previoussessionpausetimestampseconds: <number>,
 *       previoussessionstarttimestampseconds: <number>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.lifecycle'
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
 * @namespace lifecycleStart
 */

/**
 * Paths for the keys on a Lifecycle Start
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `p.a.y.l.o.a.d`. */
  payload: 'p.a.y.l.o.a.d',

  /** The lifecycle data.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a`. */
  eventData: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a',

  /** The amount of time before a session expires.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".m.a.x.s.e.s.s.i.o.n.l.e.n.g.t.h`. */
  maxSessionLength: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".m.a.x.s.e.s.s.i.o.n.l.e.n.g.t.h',

  /** The type of event that triggers the new session.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".s.e.s.s.i.o.n.e.v.e.n.t`. */
  sessionEvent: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".s.e.s.s.i.o.n.e.v.e.n.t',

  /** Context data about the device.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a`. */
  contextData: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a',

  /** The id of the application.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".a.p.p.i.d`. */
  appId: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".a.p.p.i.d',

  /** The number of times the app has launched.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".l.a.u.n.c.h.e.s`. */
  launches: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".l.a.u.n.c.h.e.s',

  /** The name of the applications crash event.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".c.r.a.s.h.e.v.e.n.t`. */
  crashEvent: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".c.r.a.s.h.e.v.e.n.t',

  /** The name of device.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.e.v.i.c.e.n.a.m.e`. */
  deviceName: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.e.v.i.c.e.n.a.m.e',

  /** The hour in the day that the app launched.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".h.o.u.r.o.f.d.a.y`. */
  hourOfDay: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".h.o.u.r.o.f.d.a.y',

  /** Number of days since the app was last launched.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.a.y.s.s.i.n.c.e.l.a.s.t.u.s.e`. */
  daysSinceLastUse: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.a.y.s.s.i.n.c.e.l.a.s.t.u.s.e',

  /** Type of application format. Will change if on a smart device..<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".r.u.n.m.o.d.e`. */
  runMode: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".r.u.n.m.o.d.e',

  /** The version of the OS the last time the app launched.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".p.r.e.v.i.o.u.s.o.s.v.e.r.s.i.o.n`. */
  previousOsVersion: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".p.r.e.v.i.o.u.s.o.s.v.e.r.s.i.o.n',

  /** The language the device is running under.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".l.o.c.a.l.e`. */
  locale: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".l.o.c.a.l.e',

  /** The phone provider the device goes through.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".c.a.r.r.i.e.r.n.a.m.e`. */
  carrierName: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".c.a.r.r.i.e.r.n.a.m.e',

  /** The number of days since the first launch of the application.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.a.y.s.s.i.n.c.e.f.i.r.s.t.u.s.e`. */
  daysSinceFirstUse: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.a.y.s.s.i.n.c.e.f.i.r.s.t.u.s.e',

  /** The day of week that the app launched.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.a.y.o.f.w.e.e.k`. */
  dayOfWeek: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".d.a.y.o.f.w.e.e.k',

  /** The name of the application launch event.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".l.a.u.n.c.h.e.v.e.n.t`. */
  launchEvent: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".l.a.u.n.c.h.e.v.e.n.t',

  /** The id of the application the last time the app was launched.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".p.r.e.v.i.o.u.s.a.p.p.i.d`. */
  previousAppId: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".p.r.e.v.i.o.u.s.a.p.p.i.d',

  /** The resolution of the device.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".r.e.s.o.l.u.t.i.o.n`. */
  resolution: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".r.e.s.o.l.u.t.i.o.n',

  /** Used in calculdating length of session.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".i.g.n.o.r.e.d.s.e.s.s.i.o.n.l.e.n.g.t.h`. */
  ignoredSessionLength: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".i.g.n.o.r.e.d.s.e.s.s.i.o.n.l.e.n.g.t.h',

  /** The version of the OS.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".o.s.v.e.r.s.i.o.n`. */
  osVersion: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".l.i.f.e.c.y.c.l.e.c.o.n.t.e.x.t.d.a.t.a.".".o.s.v.e.r.s.i.o.n',

  /** The timestamp when the session started.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".s.t.a.r.t.t.i.m.e.s.t.a.m.p.s.e.c.o.n.d.s`. */
  startTimestamp: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".s.t.a.r.t.t.i.m.e.s.t.a.m.p.s.e.c.o.n.d.s',

  /** The timestamp when the previous session was paused (if applicable).<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".p.r.e.v.i.o.u.s.s.e.s.s.i.o.n.p.a.u.s.e.t.i.m.e.s.t.a.m.p.s.e.c.o.n.d.s`. */
  previousSessionPauseTimestamp: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".p.r.e.v.i.o.u.s.s.e.s.s.i.o.n.p.a.u.s.e.t.i.m.e.s.t.a.m.p.s.e.c.o.n.d.s',

  /** The timestamp when the previous session was started.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".p.r.e.v.i.o.u.s.s.e.s.s.i.o.n.s.t.a.r.t.t.i.m.e.s.t.a.m.p.s.e.c.o.n.d.s`. */
  previousSessionStartTimestamp: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.D.a.t.a.".".p.r.e.v.i.o.u.s.s.e.s.s.i.o.n.s.t.a.r.t.t.i.m.e.s.t.a.m.p.s.e.c.o.n.d.s',

  /** The event source.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e`. */
  eventSource: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e',

  /** The event type.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e`. */
  eventType: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e',

  /** The name of the event.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.a.m.e`. */
  eventName: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.a.m.e',

  /** The event number generated by the SDK.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.u.m.b.e.r`. */
  sdkEventNumber: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.N.u.m.b.e.r',

  /** The unique event id.<br />Path is `p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.U.n.i.q.u.e.I.d.e.n.t.i.f.i.e.r`. */
  eventId: 'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.U.n.i.q.u.e.I.d.e.n.t.i.f.i.e.r',

  /** The type of event.<br />Path is `t.y.p.e`. */
  rootType: 't.y.p.e',

  /** The vendor of the plugin that sent the event.<br />Path is `v.e.n.d.o.r`. */
  vendor: 'v.e.n.d.o.r',

  /** Array of Annotation objects.<br />Path is `a.n.n.o.t.a.t.i.o.n.s`. */
  annotations: 'a.n.n.o.t.a.t.i.o.n.s',

  /** A unique id that differentiates clients from one another.<br />Path is `c.l.i.e.n.t.I.d`. */
  clientId: 'c.l.i.e.n.t.I.d',

  /** When the event occurred.<br />Path is `t.i.m.e.s.t.a.m.p`. */
  timestamp: 't.i.m.e.s.t.a.m.p',

  /** Uniquely identifies each event.<br />Path is `u.u.i.d`. */
  rootId: 'u.u.i.d'
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
const label = 'Lifecycle Start';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Lifecycle Start.
 *
 * Path is `payload.ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';

/**
 * The value for `eventType` for a Lifecycle Start.
 *
 * Path is `payload.ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.lifecycle';

/**
 * The value for `rootType` for a Lifecycle Start.
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
 * Returns the `maxSessionLength` from the Lifecycle Start.
 * This is the the amount of time before a session expires.
 *
 * Path is `payload.ACPExtensionEventData.maxsessionlength`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
const getMaxSessionLength = kit.search(path.maxSessionLength);

/**
 * Returns the `sessionEvent` from the Lifecycle Start.
 * This is the the type of event that triggers the new session.
 *
 * Path is `payload.ACPExtensionEventData.sessionevent`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getSessionEvent = kit.search(path.sessionEvent);

/**
 * Returns the `contextData` from the Lifecycle Start.
 * This is the context data about the device.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {object}
 */
const getContextData = kit.search(path.contextData);

/**
 * Returns the data using the specified path from the contextData
 * of the Lifecycle Start.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Lifecycle Start instance
 * @returns {*}
 */
const getContextDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.contextData}.${searchPath}`, source)
);

/**
 * Returns the `appId` from the Lifecycle Start.
 * This is the the id of the application.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.appid`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getAppId = kit.search(path.appId);

/**
 * Returns the `launches` from the Lifecycle Start.
 * This is the the number of times the app has launched.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.launches`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getLaunches = kit.search(path.launches);

/**
 * Returns the `crashEvent` from the Lifecycle Start.
 * This is the the name of the applications crash event.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.crashevent`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getCrashEvent = kit.search(path.crashEvent);

/**
 * Returns the `deviceName` from the Lifecycle Start.
 * This is the the name of device.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.devicename`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getDeviceName = kit.search(path.deviceName);

/**
 * Returns the `hourOfDay` from the Lifecycle Start.
 * This is the the hour in the day that the app launched.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.hourofday`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getHourOfDay = kit.search(path.hourOfDay);

/**
 * Returns the `daysSinceLastUse` from the Lifecycle Start.
 * This is the number of days since the app was last launched.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.dayssincelastuse`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getDaysSinceLastUse = kit.search(path.daysSinceLastUse);

/**
 * Returns the `runMode` from the Lifecycle Start.
 * This is the type of application format. Will change if on a smart device..
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.runmode`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getRunMode = kit.search(path.runMode);

/**
 * Returns the `previousOsVersion` from the Lifecycle Start.
 * This is the the version of the OS the last time the app launched.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.previousosversion`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getPreviousOsVersion = kit.search(path.previousOsVersion);

/**
 * Returns the `locale` from the Lifecycle Start.
 * This is the the language the device is running under.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.locale`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getLocale = kit.search(path.locale);

/**
 * Returns the `carrierName` from the Lifecycle Start.
 * This is the the phone provider the device goes through.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.carriername`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getCarrierName = kit.search(path.carrierName);

/**
 * Returns the `daysSinceFirstUse` from the Lifecycle Start.
 * This is the the number of days since the first launch of the application.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.dayssincefirstuse`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getDaysSinceFirstUse = kit.search(path.daysSinceFirstUse);

/**
 * Returns the `dayOfWeek` from the Lifecycle Start.
 * This is the the day of week that the app launched.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.dayofweek`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getDayOfWeek = kit.search(path.dayOfWeek);

/**
 * Returns the `launchEvent` from the Lifecycle Start.
 * This is the the name of the application launch event.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.launchevent`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getLaunchEvent = kit.search(path.launchEvent);

/**
 * Returns the `previousAppId` from the Lifecycle Start.
 * This is the the id of the application the last time the app was launched.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.previousappid`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getPreviousAppId = kit.search(path.previousAppId);

/**
 * Returns the `resolution` from the Lifecycle Start.
 * This is the the resolution of the device.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.resolution`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getResolution = kit.search(path.resolution);

/**
 * Returns the `ignoredSessionLength` from the Lifecycle Start.
 * This is the used in calculdating length of session.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.ignoredsessionlength`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getIgnoredSessionLength = kit.search(path.ignoredSessionLength);

/**
 * Returns the `osVersion` from the Lifecycle Start.
 * This is the the version of the OS.
 *
 * Path is `payload.ACPExtensionEventData.lifecyclecontextdata.osversion`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {string}
 */
const getOsVersion = kit.search(path.osVersion);

/**
 * Returns the `startTimestamp` from the Lifecycle Start.
 * This is the the timestamp when the session started.
 *
 * Path is `payload.ACPExtensionEventData.starttimestampseconds`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
const getStartTimestamp = kit.search(path.startTimestamp);

/**
 * Returns the `previousSessionPauseTimestamp` from the Lifecycle Start.
 * This is the the timestamp when the previous session was paused (if applicable).
 *
 * Path is `payload.ACPExtensionEventData.previoussessionpausetimestampseconds`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
const getPreviousSessionPauseTimestamp = kit.search(path.previousSessionPauseTimestamp);

/**
 * Returns the `previousSessionStartTimestamp` from the Lifecycle Start.
 * This is the the timestamp when the previous session was started.
 *
 * Path is `payload.ACPExtensionEventData.previoussessionstarttimestampseconds`.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {number}
 */
const getPreviousSessionStartTimestamp = kit.search(path.previousSessionStartTimestamp);

/**
 * Matcher can be used to find matching Lifecycle Start objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.S.o.u.r.c.e==\'com.adobe.eventsource.responsecontent\'',
  'p.a.y.l.o.a.d.".".A.C.P.E.x.t.e.n.s.i.o.n.E.v.e.n.t.T.y.p.e==\'com.adobe.eventtype.lifecycle\'',
  't.y.p.e==\'generic\'',
  't.i.m.e.s.t.a.m.p'
]);

/**
 * Tests the provided source against the matcher to see if it's Lifecycle Start event.
 *
 * @function
 * @param {object} source The Lifecycle Start instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Lifecycle Start with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.lifecycle',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Lifecycle Start with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  maxSessionLength: 604800,
  sessionEvent: 'start',
  appId: 'TestApp-Swift 1.0',
  launches: '5',
  crashEvent: 'CrashEvent',
  deviceName: 'iPhone XR',
  hourOfDay: '10',
  daysSinceLastUse: '1',
  runMode: 'Application',
  previousOsVersion: 'iOS 14.0',
  locale: 'en-US',
  carrierName: 'Verizon',
  daysSinceFirstUse: '7',
  dayOfWeek: '3',
  launchEvent: 'LaunchEvent',
  previousAppId: 'TestApp-Swift 0.9',
  resolution: '1242x2688',
  ignoredSessionLength: '-1595526608',
  osVersion: 'iOS 14.0',
  startTimestamp: 1595526618,
  previousSessionStartTimestamp: 1595526608,
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.lifecycle',
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
  getMaxSessionLength,
  getSessionEvent,
  getContextData,
  getContextDataKey,
  getAppId,
  getLaunches,
  getCrashEvent,
  getDeviceName,
  getHourOfDay,
  getDaysSinceLastUse,
  getRunMode,
  getPreviousOsVersion,
  getLocale,
  getCarrierName,
  getDaysSinceFirstUse,
  getDayOfWeek,
  getLaunchEvent,
  getPreviousAppId,
  getResolution,
  getIgnoredSessionLength,
  getOsVersion,
  getStartTimestamp,
  getPreviousSessionPauseTimestamp,
  getPreviousSessionStartTimestamp,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
