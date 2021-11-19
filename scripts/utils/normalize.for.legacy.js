/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as R from 'ramda';

const normalize = (data, root = []) => {
  let useData = data;
  const sourcePath = [...root, 'ACPExtensionEventSource', 'const'];
  const mockSourcePath = [...root, 'ACPExtensionEventSource', 'mock'];
  const typePath = [...root, 'ACPExtensionEventType', 'const'];
  const notEnumPath = [...root, 'ACPExtensionEventSource', 'not', 'enum'];
  if (R.path(sourcePath, useData)) {
    useData = R.assocPath(sourcePath, R.path(sourcePath, useData).toLowerCase(), useData);
  }
  if (R.path(mockSourcePath, useData)) {
    useData = R.assocPath(mockSourcePath, R.path(mockSourcePath, useData).toLowerCase(), useData);
  }
  if (R.path(typePath, useData)) {
    useData = R.assocPath(typePath, R.path(typePath, useData).toLowerCase(), useData);
  }
  if (R.path(notEnumPath, useData)) {
    const notEnum = R.path(notEnumPath, useData);
    for (let i = 0; i < notEnum.length; ++i) {
      useData = R.assocPath([...notEnumPath, i], notEnum[i].toLowerCase(), useData);
    }
  }
  return useData;
};

export default (schema) => normalize(schema, ['properties', 'payload', 'properties']);

export const normalizePropsForLegacy = (data) => normalize(data);
