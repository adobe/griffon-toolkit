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

// import jmespath from 'jmespath';
import entry from '../src/placesEntry';
import aep from '../src/aepMobile';
import root from '../src/event';

describe('Test Auto Generated Output', () => {
  it('exports paths', () => {
    expect(Object.keys(root.path).length).toBe(6);
  });
  it('exports inherited paths', () => {
    expect(Object.keys(aep.path).length).toBe(12);
  });
  it('exports paths from object refs', () => {
    expect(Object.keys(entry.path).length).toBe(30);
  });
  it('validates against schemas', () => {
    const mock = entry.mock();
    expect(entry.validate(mock)).toBe(true);
  });
  it('matches against matchers', () => {
    const events = [
      entry.mock(),
      aep.mock(),
      root.mock()
    ];
    expect(entry.isMatch(events[0])).toBe(true);
    expect(entry.isMatch(events[1])).toBe(false);
  });
  it('exports constants', () => {
    expect(entry.REGION_EVENT_TYPE).toBe('entry');
  });
  it('exports getters', () => {
    const mock = root.mock();
    expect(root.getClientId(mock)).toBe('appleABC');
    expect(root.getRootType(mock)).toBe('generic');
  });
  it('exports get from object functions', () => {
    const mock = root.mock({
      [root.path.payload]: {
        size: 'L',
        dimensions: { width: 800, height: 600 }
      }
    });
    expect(root.getPayloadKey('size', mock)).toBe('L');
    expect(root.getPayloadKey('dimensions.width', mock)).toBe(800);
  });
});
