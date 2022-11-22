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

const addQuotes = (arr) => arr.map((value) => `'${value}'`);

/*
 * Looks for a `allOf` inheritance. If it has one, it will merge the custom matchters
 */
const mergeAllOfCustomMatchers = (schemaMap) => ({ allOf, customMatchers }, mergeInto) => {
  let matchersOut = [...mergeInto, ...(addQuotes(customMatchers || []))];

  if (allOf) {
    allOf.forEach((ref) => {
      matchersOut = mergeCustomMatchers(schemaMap[ref.$ref], schemaMap, matchersOut); // eslint-disable-line no-use-before-define
    });
  }
  return matchersOut;
};

/*
 * Takes the provided JSON schema. If it inherits via `allOf`, then it will merge
 * the chstomMatchers into the other schema. If it detects a property with a $ref, it
 * will also bring in that ref and expand it.
 */
const mergeCustomMatchers = (schema, schemaMap, mergeInto = []) => mergeAllOfCustomMatchers(schemaMap)(schema, mergeInto);

export default mergeCustomMatchers;
