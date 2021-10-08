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

import {
  filterData,
  filterFromHash,
  filterToHash
} from '../';

import event from '../../common/src/event';
import annotation from '../../common/src/annotation';

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
const hiddenEvent = event.mock({
  [event.path.rootId]: 'hiddenEvent',
  [event.path.timestamp]: Date.parse('01 Jan 2020 02:01:00 GMT'),
  [event.path.annotations]: [
    makeHiddenAnnotation()
  ]
});

describe('Filter Kit', () => {
  describe('Match', () => {
    it('matches the provided events', () => {
      const filters = {
        rootId: `${event.path.rootId}=='plainEvent'`
      };

      expect(filterData(filters, [plainEvent, hiddenEvent]).length).toBe(1);
    });
    it('returns everything with no filters', () => {
      expect(filterData([], [plainEvent, hiddenEvent]).length).toBe(2);
    });
  });

  describe('Hash', () => {
    it('can hash the filters', () => {
      const filters = { test: 'abc' };
      const hash = filterToHash(filters);
      expect(hash).toBe('filters=eyJ0ZXN0IjoiYWJjIn0=');

      const url = `http://test.com/dev#${hash}`;
      expect(filterFromHash(url).test).toBe('abc');
    });

    it('returns empty on fail', () => {
      const url = 'http://test.com/dev#abcdefg';
      expect(filterFromHash(url)).toBeFalsy();
    });
  });
});
