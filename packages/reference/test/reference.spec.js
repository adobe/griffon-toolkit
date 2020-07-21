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

import { findLabel, findGroup, classesForGroup } from '../src';
import entry from '../../aep-mobile/src/placesEntry';
import aep from '../../aep-mobile/src/mobileEvent';
import event from '../../common/src/event';
import command from '../../common/src/command';

const mockEntry = entry.mock();
const mockAEP = aep.mock();
const mockEvent = event.mock();
const mockCommand = command.mock();

describe('findLabel', () => {
  it('gets a label for the provided event', () => {
    expect(findLabel(mockEntry)).toBe('Places Entry Event');
    expect(findLabel(mockAEP)).toBe('Generic Mobile Event');
    expect(findLabel(mockEvent)).toBe('Generic Event');
    expect(findLabel({})).toBe('');
  });
});

describe('findGroup', () => {
  it('gets a group for the provided data', () => {
    expect(findGroup(mockEntry)).toBe('event');
    expect(findGroup(mockCommand)).toBe('command');
    expect(findGroup({})).toBe('');
  });
});

describe('classesForGroup', () => {
  it('retrieves all the classes for a group', () => {
    expect(Object.keys(classesForGroup('construct')).indexOf('annotation')).not.toBe(-1);
  });
});

