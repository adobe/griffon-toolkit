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

import classesForGroup from '../src/classesForGroup';
import findGroup from '../src/findGroup';
import findLabel from '../src/findLabel';
import findMetadata from '../src/findMetadata';
import entry from '../../aep-mobile/src/placesEntry';
import aep from '../../aep-mobile/src/mobileEvent';
import event from '../../common/src/event';
import command from '../../common/src/command';

const mockEntry = entry.mock({});
const mockAEP = aep.mock({});
const mockEvent = event.mock({});
const mockCommand = command.mock({});

describe('findLabel', () => {
  it('gets a label for the provided event', () => {
    expect(findLabel(mockEntry)).toBe('Places Entry Event');
    expect(findLabel(mockAEP)).toBe('Generic Mobile Event');
    expect(findLabel(mockEvent)).toBe('Generic Event');
    expect(findLabel({})).toBe(undefined);
  });
});

describe('findGroup', () => {
  it('gets a group for the provided data', () => {
    expect(findGroup(mockEntry)).toBe('event');
    expect(findGroup(mockCommand)).toBe('command');
    expect(findGroup({})).toBe(undefined);
  });
});

describe('classesForGroup', () => {
  it('retrieves all the classes for a group', () => {
    expect(Object.keys(classesForGroup('construct')).indexOf('annotation')).not.toBe(-1);
  });
});

describe('classesForGroup', () => {
  it('retrieves all the classes for a group', () => {
    const metadata = findMetadata(['file', 'uniqueName', 'packageName'], mockEntry);
    expect(metadata.file.matcher).toMatchSnapshot();
    expect(metadata.uniqueName).toBe('placesEntry');
    expect(metadata.packageName).toBe('aep-mobile');
  });
});

