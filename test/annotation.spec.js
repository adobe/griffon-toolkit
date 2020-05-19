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

describe('Annotation Tests', () => {
  it('can create paths', () => {
    const visibilityPath = annotation.makeNamespacePath('visibility');
    const hiddenPath = annotation.makeNamespacePath('visibility', 'hidden');

    const hiddenEvent = event.mock({
      annotations: [
        annotation.mock({
          [annotation.path.namespace]: 'visibility',
          [annotation.path.payload]: { hidden: true }
        })
      ]
    });
    const genericEvent = event.mock();

    expect(kit.isMatch(hiddenPath, hiddenEvent)).toBe(true);
    expect(kit.isMatch(hiddenPath, genericEvent)).toBe(false);
    expect(kit.search(hiddenPath, hiddenEvent)).toBe(true);

    expect(kit.search(visibilityPath, hiddenEvent).hidden).toBe(true);
    expect(kit.search(visibilityPath, genericEvent)).toBeFalsy();
  });
});
