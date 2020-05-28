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

import kit from '../src/kit';
import event from '../src/event';
import annotation from '../src/annotation';
import filterKit from '../src/filterKit';

const makeHiddenAnnotation = (value = true) => annotation.mock({
  [annotation.path.namespace]: annotation.publicNamespace.visibility,
  [annotation.path.payload]: {
    [annotation.publicKey.hidden]: value
  }
});

const plainEvent = event.mock({
  [event.path.rootId]: 'plainEvent',
  [event.path.timestamp]: Date.parse('01 Jan 2020 01:01:00 GMT')
});
const plainEvent2 = event.mock({
  [event.path.rootId]: 'plainEvent2',
  [event.path.timestamp]: Date.parse('01 Jan 2020 02:01:00 GMT')
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

describe('Filter Kit', () => {
  describe('makeHiddenFilter', () => {
    it('should make a filter that hides events', () => {
      const match = kit.match(filterKit.makeHiddenFilter());
      expect(match([plainEvent, hiddenEvent]).length).toBe(1);
      expect(match([plainEvent, hiddenEvent])[0].uuid).toBe('plainEvent');
    });
    it('should make a filter that hides events with a clear timestamp', () => {
      const match = kit.match(filterKit.makeHiddenFilter(Date.parse('01 Jan 2020 02:00:00 GMT')));
      const results = match([plainEvent, plainEvent2, hiddenEvent, visibleEvent]);
      expect(results.length).toBe(2);

      // valid if after the filter date
      expect(results[0].uuid).toBe('plainEvent2');

      // valid if hidden is true
      expect(results[1].uuid).toBe('visibleEvent');
    });
  });

  describe('Match', () => {
    it('matches the provided events', () => {
      const filters = {
        hidden: filterKit.makeHiddenFilter(),
        rootId: `${event.path.rootId}=='plainEvent'`
      };

      expect(filterKit.match(filters, [plainEvent, hiddenEvent]).length).toBe(1);
    });
    it('returns everything with no filters', () => {
      expect(filterKit.match([], [plainEvent, hiddenEvent]).length).toBe(2);
    });
  });

  describe('Hash', () => {
    it('can hash the filters', () => {
      const filters = { test: 'abc' };
      const hash = filterKit.toHash(filters);
      expect(hash).toBe('filters=eyJ0ZXN0IjoiYWJjIn0=');

      const url = `http://test.com/dev#${hash}`;
      expect(filterKit.fromHash(url).test).toBe('abc');
    });

    it('returns empty on fail', () => {
      const url = 'http://test.com/dev#abcdefg';
      expect(filterKit.fromHash(url)).toBeFalsy();
    });
  });
});
