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

import reference from '../src/reference';
import entry from '../src/placesEntry';
import aep from '../src/aepMobile';

const mockEntry = entry.mock({ });
const mockAEP = aep.mock({ });

describe('Reference', () => {
  it('gets a label for the provided event', () => {
    expect(reference.getLabel(mockEntry)).toBe('Places Entry Event');
    expect(reference.getLabel(mockAEP)).toBe('Generic Mobile Event');
    expect(reference.getLabel({})).toBe('');
  });
});
