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

import { assoc, curry, forEach, forEachObjIndexed, reduce } from 'ramda';
import * as common from '@adobe/griffon-toolkit-common';
import * as aep from '@adobe/griffon-toolkit-aep-mobile';
import * as edge from '@adobe/griffon-toolkit-edge';
import * as pushServices from '@adobe/griffon-toolkit-push-services';

const references = [
  common,
  aep,
  edge,
  pushServices
];

const isProperSchemaSource = (source) => !!source.label && !!source.isMatch;

/**
 * Takes an object and checks it against all known schemas to find any matches.
 * It will return the requested metadata from the match with the highest
 * parentDepth.
 *
 * @function
 * @param {string[]} types The metadata to request
 * @param {object} source The object to match against
 * @returns {string} label
 */
export default curry((types, source): { [key: string]: any } => {
  let matchDepth = -1;
  let matches = {};

  forEach(
    forEachObjIndexed((file: any) => {
      if (isProperSchemaSource(file)
        && file.parentDepth > matchDepth
        && file.isMatch
        && file.isMatch(source)
      ) {
        matches = reduce(
          (acc, type: string) => assoc(type, type === 'file' ? file : file[type], acc),
          {},
          types
        );
        matchDepth = file.parentDepth;
      }
    }),
    references
  );
  return matches;
});
