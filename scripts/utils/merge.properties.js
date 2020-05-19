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

import * as R from 'ramda';

/*
 * Merges the object. It will nest if it finds any other objects.
 */
const mergeObject = (from, to) => {
  const results = { ...to };
  R.forEachObjIndexed(
    (property, key) => {
      if (property.properties) {
        results[key] = results[key] || {};
        results[key].properties = mergeObject(property.properties, results[key].properties);
      }
      results[key] = (!results[key])
        ? { ...property }
        : { ...property, ...results[key] };
    },
    from
  );
  return results;
};

/*
 * Looks for any $ref properties. If it finds any, it will merge that content into the object
 */
const inheritRefProperties = (schemaMap) => (properties) => {
  const results = { ...properties };

  R.forEachObjIndexed(
    (property, key) => {
      if (property.$ref) {
        const map = schemaMap[property.$ref];
        results[key] = {
          type: map.type,
          properties: { ...map.properties },
          ...property
        };
      }
      if (property.properties) {
        results[key].properties = inheritRefProperties(schemaMap)(property.properties);
      }
    },
    properties
  );

  return results;
};

/*
 * Looks for a `allOf` inheritance. If it has one, it will merge the properties.
 */
const mergeAllOfProperties = (schemaMap) => ({ allOf, properties }, mergeInto) => {
  let propertiesOut = properties;

  if (mergeInto) {
    propertiesOut = mergeObject(properties, mergeInto);
  }

  if (allOf) {
    allOf.forEach((ref) => {
      propertiesOut = mergeProperties(schemaMap[ref.$ref], schemaMap, propertiesOut); // eslint-disable-line no-use-before-define
    });
  }
  return propertiesOut;
};

/*
 * Takes the provided JSON schema. If it inherits via `allOf`, then it will merge
 * those properties into the other schema. If it detects a property with a $ref, it
 * will also bring in that ref and expand it.
 */
const mergeProperties = (schema, schemaMap, mergeInto) => {
  const merged = mergeAllOfProperties(schemaMap)(schema, mergeInto);
  return inheritRefProperties(schemaMap)(merged);
};

export default mergeProperties;
