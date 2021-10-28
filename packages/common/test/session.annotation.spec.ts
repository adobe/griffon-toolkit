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
import session from '../src/session';
import sessionAnnotation from '../src/sessionAnnotation';

describe('Annotation Tests', () => {
  const publicSession = session.mock({
    annotations: [
      sessionAnnotation.mock({
        [sessionAnnotation.path.namespace]: 'visibility',
        [sessionAnnotation.path.payload]: { public: true }
      })
    ]
  });
  const genericSession = session.mock(null);

  it('can create paths', () => {
    const visibilityPath = sessionAnnotation.makeNamespacePath('visibility');
    const publicPath = sessionAnnotation.makeNamespacePath('visibility', 'public');

    expect(kit.isMatch(publicPath, publicSession)).toBe(true);
    expect(kit.isMatch(publicPath, genericSession)).toBe(false);
    expect(kit.search(publicPath, publicSession)).toBe(true);

    expect(kit.search(visibilityPath, publicSession).public).toBe(true);
    expect(kit.search(visibilityPath, genericSession)).toBeFalsy();
  });

  it('can search paths', () => {
    const isPublic = sessionAnnotation.search('visibility', 'public');
    expect(isPublic(publicSession)).toBe(true);
    expect(isPublic(genericSession)).toBeFalsy();
  });
});
