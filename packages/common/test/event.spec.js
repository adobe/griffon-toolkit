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
import { event, annotation } from '../src';

const makeHiddenAnnotation = (value = true) => annotation.mock({
  [annotation.path.namespace]: annotation.publicNamespace.visibility,
  [annotation.path.payload]: {
    [annotation.publicKey.hidden]: value
  }
});
const plainEvent = event.mock({
  [event.path.rootId]: 'plainEvent',
  [event.path.clientId]: 'abc',
  [event.path.timestamp]: Date.parse('01 Jan 2020 01:01:00 GMT')
});
const plainEvent2 = event.mock({
  [event.path.rootId]: 'plainEvent2',
  [event.path.clientId]: 'abc',
  [event.path.timestamp]: Date.parse('01 Jan 2020 02:01:00 GMT')
});
const plainEvent3 = event.mock({
  [event.path.rootId]: 'plainEvent3',
  [event.path.clientId]: 'efg',
  [event.path.timestamp]: Date.parse('01 Jan 2020 03:01:00 GMT')
});
const hiddenEvent = event.mock({
  [event.path.rootId]: 'hiddenEvent',
  [event.path.timestamp]: Date.parse('01 Jan 2020 02:01:00 GMT'),
  [event.path.annotations]: [
    makeHiddenAnnotation()
  ]
});
const visibleEvent = event.mock({
  [event.path.rootId]: 'visibleEvent',
  [event.path.timestamp]: Date.parse('01 Jan 2020 01:01:00 GMT'),
  [event.path.annotations]: [
    makeHiddenAnnotation(false)
  ]
});

describe('Event Filters Kit', () => {
  describe('makeClientFilter', () => {
    it('makes a filter that chooses events by client id', () => {
      const match = kit.match(event.makeClientFilter(['abc']));
      const matchMore = kit.match(event.makeClientFilter(['abc', 'efg']));

      expect(match([plainEvent, plainEvent2, plainEvent3]).length).toBe(2);
      expect(matchMore([plainEvent, plainEvent2, plainEvent3]).length).toBe(3);
    });
  });

  describe('makeHiddenFilter', () => {
    it('should make a filter that hides events', () => {
      const match = kit.match(event.makeHiddenFilter());
      expect(match([plainEvent, hiddenEvent]).length).toBe(1);
      expect(match([plainEvent, hiddenEvent])[0].uuid).toBe('plainEvent');
    });
    it('should make a filter that hides events with a clear timestamp', () => {
      const match = kit.match(event.makeHiddenFilter(Date.parse('01 Jan 2020 02:00:00 GMT')));
      const results = match([plainEvent, plainEvent2, hiddenEvent, visibleEvent]);
      expect(results.length).toBe(2);

      // valid if after the filter date
      expect(results[0].uuid).toBe('plainEvent2');

      // valid if hidden is true
      expect(results[1].uuid).toBe('visibleEvent');
    });
  });
});
