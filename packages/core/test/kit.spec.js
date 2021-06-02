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

import * as kit from '../src';
import entry from '../../aep-mobile/src/placesEntry';
import aep from '../../aep-mobile/src/mobileEvent';
import annotation from '../../common/src/annotation';

const mockEntry = entry.mock({
  annotations: [annotation.mock()]
});
const mockAEP = aep.mock();
const events = [mockEntry, mockAEP];
const matchAEP = aep.path.eventSource;

describe('Kit Tests', () => {
  it('can match events', () => {
    expect(kit.match(entry.matcher, events)).toEqual([mockEntry]);
  });
  it('can match against all events', () => {
    expect(kit.match(
      kit.combineAll([matchAEP, entry.matcher]),
      events
    ).length).toBe(1);
  });
  it('can match against any events', () => {
    expect(kit.match(
      kit.combineAny([matchAEP, entry.matcher]),
      events
    ).length).toBe(2);
  });
  it('can match against none of the events', () => {
    expect(kit.match(
      kit.combineNone([matchAEP, entry.matcher]), events
    ).length).toBe(0);
    expect(kit.match(
      kit.combineNone([entry.matcher]),
      events
    ).length).toBe(1);
  });
  it('will expand provided paths', () => {
    expect(kit.expand({ size: 's' })).toEqual({ size: 's' });
    expect(kit
      .expand({ 'size.width': 200, 'size.height': 300 }))
      .toEqual({ size: { width: 200, height: 300 } });
  });
  it('will map and expand provided paths', () => {
    const path = {
      width: 'size.width',
      height: 'size.height'
    };
    expect(kit.expandWithPaths(
      path,
      { width: 200, height: 300 }
    )).toEqual({ size: { width: 200, height: 300 } });
  });
  fit('will map quoted paths', () => {
    const path = {
      width: 'size."the.dimensions"."the.width"',
      height: 'size."the.dimensions"."the.height"',
      dims: 'size."the.dimensions".dims',
    };
    expect(kit.expandWithPaths(
      path,
      { width: 200, height: 300, dims: '200x300' }
    )).toEqual({ size: {
      'the.dimensions': {
        'the.width': 200,
        'the.height': 300,
        dims: '200x300'
      }
    } });
  });

  it('will merge while expanding', () => {
    const path = {
      size: 'size',
      width: 'size.width',
      height: 'size.height'
    };
    expect(kit.expandWithPaths(
      path,
      { width: 200, height: 300, size: { mode: 'resize' } }
    )).toEqual({ size: { width: 200, height: 300, mode: 'resize' } });
  });
  it('can modify data in the results', () => {
    const results = kit.modify(
      { color: 'red' },
      entry.matcher,
      events
    );
    expect(results.length).toBe(2);
    expect(results[0].color).toBe('red');
    expect(results[0].uuid).toBe('123');
    expect(results[1].color).toBeFalsy();
  });
  it('can mod with a function', () => {
    const results = kit.modify(
      ({ uuid }) => ({ theUUID: uuid }),
      entry.matcher,
      events
    );
    expect(results[0].theUUID).toBe('123');
    expect(results[1].theUUID).toBeFalsy();
  });
  it('can modify the results in bulk', () => {
    const results = kit.modifyBulk([
      { matcher: entry.matcher, modifications: { color: 'red' } },
      {
        matcher: matchAEP,
        mods: {
          size: 'large',
          theUUID: ({ uuid }) => uuid,
          colors: ['green', () => 'red']
        }
      }
    ], events);

    expect(results.length).toBe(2);
    expect(results[0].color).toBe('red');
    expect(results[0].uuid).toBe('123');
    expect(results[1].color).toBeFalsy();
    expect(results[0].size).toBe('large');
    expect(results[1].size).toBe('large');
    expect(results[1].theUUID).toBe('123');
    expect(results[1].colors).toEqual(['green', 'red']);
  });
  it('correctly wraps paths', () => {
    expect(kit.not('a')).toBe('!a');
    expect(kit.not('a && b')).toBe('!(a && b)');
    expect(kit.combineAll(['a', 'b'])).toBe('a && b');
    expect(kit.combineAll(['a', 'b && c'])).toBe('a && (b && c)');
    expect(kit.combineAll(['a', '(b && c)'])).toBe('a && (b && c)');
    expect(kit.combineAll(['a', '(b) && (c)'])).toBe('a && ((b) && (c))');
  });
  it('correctly parses paths', () => {
    expect(kit.convertPath('a.b.c')).toEqual(['a', 'b', 'c']);
    expect(kit.convertPath('a."b.e".c')).toEqual(['a', 'b.e', 'c']);
  });
});

// ^(([^\n."])|(\".*\")*\.?)*$
