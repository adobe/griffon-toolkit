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

import lodash from 'lodash';
import * as R from 'ramda';

/*
 * Formats the data into a common structure so it can be used by all the writes
 */
export default (property, key, path, parent) => {
  const constDefined = R.type(property.const) !== 'Undefined';
  const mockDefined = R.type(property.mock) !== 'Undefined';

  return {
    ...property,
    path: [...path, key],
    alias: property.alias || key,
    useCombine: property.oneOf || property.not,
    useConst: property.const,
    useMock: constDefined ? property.const : mockDefined ? property.mock : undefined,
    useMatch: (constDefined && property.match !== false) || property.match,
    useLegacy: property.legacyCase,
    parent,
    snakeName: lodash.snakeCase(property.alias || key).toUpperCase()
  };
};
