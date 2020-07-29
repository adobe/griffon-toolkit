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
import {
  mobileEvent, placesEntry
} from '../../aep-mobile/src';
import referenceInstructions from '../src/reference.instructions';

describe('reference instructions', () => {
  it('will use the default label', () => {
    const events = kit.modifyBulk(
      referenceInstructions,
      [mobileEvent.mock()]
    );
    expect(events[0].staticLabel).toEqual('Generic Mobile Event');
    expect(events[0].customLabel).toEqual('Generic Mobile Event');
  });
  it('uses more specific labels - ranks them by depth', () => {
    const events = kit.modifyBulk(
      referenceInstructions,
      [placesEntry.mock()]
    );
    expect(events[0].staticLabel).toEqual('Places Entry Event');
  });
  it('can use custom functions for custom label', () => {
    const events = kit.modifyBulk(
      referenceInstructions,
      [placesEntry.mock()]
    );
    expect(events[0].customLabel).toEqual('POI Entry: Adobe');
  });
  it('can use custom functions for short description', () => {
    const events = kit.modifyBulk(
      referenceInstructions,
      [
        placesEntry.mock(),
        placesEntry.mock({ street: '123 abc', city: 'New York' })
      ]
    );

    expect(events[0].customShortDescription).toEqual('POI: Adobe');
    expect(events[1].customShortDescription).toEqual('POI: Adobe - 123 abc, New York');
  });

});



