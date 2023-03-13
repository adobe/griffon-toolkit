/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import mobileEvent from '../src/mobileEvent';
import sharedStateConfig from '../src/sharedStateConfig';
import { MobileEvent } from '../src/types';

const events = [
  mobileEvent.mock({
    [mobileEvent.path.rootId]: '6',
    [mobileEvent.path.timestamp]: Date.parse('01 Jan 2023 01:10:00 GMT')
  }),
  mobileEvent.mock({
    [mobileEvent.path.rootId]: '5',
    [mobileEvent.path.timestamp]: Date.parse('01 Jan 2023 01:09:00 GMT')
  }),
  sharedStateConfig.mock({
    [mobileEvent.path.rootId]: '4',
    [mobileEvent.path.timestamp]: Date.parse('01 Jan 2023 01:08:00 GMT')
  }),
  mobileEvent.mock({
    [mobileEvent.path.rootId]: '3',
    [mobileEvent.path.timestamp]: Date.parse('01 Jan 2023 01:07:00 GMT')
  }),
  sharedStateConfig.mock({
    [mobileEvent.path.rootId]: '2',
    [mobileEvent.path.timestamp]: Date.parse('01 Jan 2023 01:06:00 GMT')
  }),
  mobileEvent.mock({
    [mobileEvent.path.rootId]: '1',
    [mobileEvent.path.timestamp]: Date.parse('01 Jan 2023 01:05:00 GMT')
  }),
];

describe('customExports', () => {
  describe('findCurrentConfigEvent', () => {
    it('finds the most recent shared state config relative to the event', () => {
      let event;
      event = sharedStateConfig.findCurrentConfigEvent(events[1], events);
      expect(event.uuid).toBe('4');

      event = sharedStateConfig.findCurrentConfigEvent(events[2], events);
      expect(event.uuid).toBe('4');

      event = sharedStateConfig.findCurrentConfigEvent(events[3], events);
      expect(event.uuid).toBe('2');

      event = sharedStateConfig.findCurrentConfigEvent(events[5], events);
      expect(event).not.toBeDefined();
    });
  });
});
