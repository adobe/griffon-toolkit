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
import entry from '../packages/aep-mobile/src/placesEntry';
import { PlacesEntry } from '../packages/aep-mobile';
import aep from '../packages/aep-mobile/src/mobileEvent';
import root from '../packages/common/src/event';
import configuration from '../packages/aep-mobile/src/configuration';
import iosClient from '../packages/aep-mobile/src/clientInfoIOS';

describe('Test Auto Generated Output', () => {
  it('exports paths', () => {
    expect(Object.keys(root.path).length).toBe(6);
  });
  it('exports inherited paths', () => {
    expect(Object.keys(aep.path).length).toBe(13);
  });
  it('exports paths from object refs', () => {
    expect(Object.keys(entry.path).length).toBe(29);
  });
  it('creates a make command', () => {
    expect(root.make({})).toEqual({});

    const entryEvent = entry.make(null) as PlacesEntry;
    expect(Object.keys(entryEvent.payload).length).toBe(3);
    expect(entry.getRegionEventType(entryEvent)).toBe('entry');
  });
  it('matches against matchers', () => {
    const events = [
      entry.mock({}),
      aep.mock({}),
      root.mock({})
    ];
    expect(entry.isMatch(events[0])).toBe(true);
    expect(entry.isMatch(events[1])).toBe(false);
  });
  it('exports constants', () => {
    expect(entry.REGION_EVENT_TYPE).toBe('entry');
  });
  it('exports getters', () => {
    const mock = root.mock({});
    expect(root.getClientId(mock)).toBe('appleABC');
    expect(root.getRootType(mock)).toBe('generic');
  });
  it('generates a generic get', () => {
    const entryEvent = entry.mock({
      city: 'Appleton'
    });
    expect(entry.get('city', entryEvent)).toBe('Appleton');
    expect(entry.get(entry.path.city, entryEvent)).toBe('Appleton');
  });
  it('exports the parent depth', () => {
    expect(root.parentDepth).toBe(0);
    expect(aep.parentDepth).toBe(1);
    expect(entry.parentDepth).toBe(3);
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
  it('handles keys with spaces in them', () => {
    // some schemas have spaces in the key names. This test validates that those
    // schemas work correctly
    const mock = iosClient.mock({
      [iosClient.path.os]: 'iOS 13'
    });

    expect(iosClient.isMatch(mock)).toBe(true);
    expect(iosClient.getPlatform(mock)).toBe('iOS');
    expect(iosClient.getOs(mock)).toBe('iOS 13');
  });
  it('handles keys with dots in them', () => {
    const mock = configuration.mock({
      launchPropertyId: 'abcd',
      eventData: { box: true }
    });
    expect(configuration.getLaunchPropertyId(mock)).toBe('abcd');
    expect(configuration.getEventData(mock)['property.id']).toBe('abcd');
  });
});
