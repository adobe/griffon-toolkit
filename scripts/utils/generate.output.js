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

import lodash from 'lodash';
import * as R from 'ramda';

import mergeProperties from './merge.properties';
import {
  writeFullContent,
  writeCommentLine,
  writePathLine,
  writeStructureLine,
  writeGet,
  writeGetFromObject,
  writeMake,
  writeMock,
  writeMockLine,
  writeMatch,
  writeConstant
} from './write.outputs';
import {
  ucFirst,
  CUSTOM_CONTENT_START,
  CUSTOM_CONTENT_END,
  writeFile
} from './shared';

const fs = require('fs');

/*
 * Formats the data into a common structure so it can be used by all the writes
 */
const makePropertyProps = (property, key, path, parent) => ({
  ...property,
  path: [...path, key].join('.'),
  alias: property.alias || key,
  useConst: property.const,
  useMock: property.const || property.mock,
  useMatch: property.const || property.match,
  parent,
  snakeName: lodash.snakeCase(property.alias || key).toUpperCase()
});

/*
 * This is the code we want to generate for just this class. We don't export
 * inherited gets for example. If you need to get data from another schema,
 * you can just use that schema.
 */
export const expandMyProperties = ({
  path = [],
  output: outputIn = { gets: '', exports: ['path', 'mock', 'make', 'schema', 'get', '...customExports'] },
  properties,
  parent
}) => {
  let output = { ...outputIn };
  R.forEachObjIndexed(
    (property, key) => {
      const props = makePropertyProps(property, key, path, parent);
      if (!property.inherit) {
        output.gets += writeGet(props);
        output.exports.push(`get${ucFirst(props.alias)}`);
        if (property.type === 'object') {
          output.gets += writeGetFromObject(props);
          output.exports.push(`get${ucFirst(props.alias)}Key`);
        }
      }
      if (property.properties) {
        output = expandMyProperties({
          path: [...path, key],
          output,
          properties: property.properties,
          parent
        });
      }
    },
    properties
  );
  return output;
};

/*
 * This is the code we want to generate for this class and everything it inherits.
 * We do export some things like path for all the inherited objects.
 */
const expandFullProperties = ({
  path = [],
  output: outputIn = {
    paths: [], event: '', makes: '', mocks: '', matches: [], constants: '', exports: []
  },
  properties,
  depth = 2,
  parent
}) => {
  let output = { ...outputIn };
  R.forEachObjIndexed(
    (property, key) => {
      const props = makePropertyProps(property, key, path, parent);
      let writePath = '';
      if (property.description) {
        writePath += writeCommentLine(props);
      }
      if (props.mock || props.const) {
        output.mocks += writeMockLine(props);
      }
      if (props.const) {
        output.makes += writeMockLine(props);
      }
      writePath += writePathLine(props);
      output.paths.push(writePath);

      if (props.useMatch) {
        output.matches.push(writeMatch(props));
      }

      if (props.useConst) {
        output.constants += writeConstant(props);
        output.exports.push(props.snakeName);
      }

      if (property.properties) {
        output.event += writeStructureLine(depth, key, '{');
        output = expandFullProperties({
          path: [...path, key],
          output,
          properties: property.properties,
          depth: depth + 2,
          parent
        });
        output.event += writeStructureLine(depth);
      } else {
        output.event += writeStructureLine(depth, key, props);
      }
    },
    properties
  );
  return output;
};

/*
 * Used when first genreating the file. After that point, it will be replaced with the inner
 * contents of the string.
 */
const DEFAULT_CUSTOM = ` */

// additional exports should be added here:
const customExports = {};

/* `;

/*
 * Pulls out the custom content for existing generated files.
 */
const extractCustom = (outputFile) => {
  if (fs.existsSync(outputFile)) {
    try {
      const data = fs.readFileSync(outputFile, 'utf8');
      const re = new RegExp(`${CUSTOM_CONTENT_START}(?<inner>[\\D\\d]*)${CUSTOM_CONTENT_END}`);
      const match = data.match(re);
      if (match) { return match.groups.inner; }
    } catch (err) {
      console.log(err);
    }
  }
  return DEFAULT_CUSTOM;
};

const calculateDepth = (schema, schemaMap, depth = 0) => {
  if (!schema.allOf) { return depth; }

  let maxDepth = depth;
  schema.allOf.forEach((ref) => {
    maxDepth = Math.max(maxDepth, calculateDepth(schemaMap[ref.$ref], schemaMap, depth + 1));
  });
  return maxDepth;
};

/*
 * Takes the provided schema, generates the content, and writes it to disk.
 */
export default (schema, outputFile, schemaMap) => {
  const expanded = expandMyProperties({
    properties: schema.properties,
    parent: schema.shortDesc
  });
  const expandedFull = expandFullProperties({
    properties: mergeProperties(schema, schemaMap),
    parent: schema.shortDesc
  });

  let { exports } = expanded;
  if (expandedFull.matches.length) {
    exports = [...exports, 'isMatch', 'matcher', ...expandedFull.exports];
  }

  const namespace = outputFile.match(/src\/(.*).js/)[1];

  const depth = calculateDepth(schema, schemaMap);

  const output = writeFullContent({
    namespace,
    shortDesc: schema.shortDesc,
    group: schema.group,
    customCode: extractCustom(outputFile),
    depth,
    mock: writeMock({
      shortDesc: schema.shortDesc,
      mocks: expandedFull.mocks
    }),
    make: writeMake({
      shortDesc: schema.shortDesc,
      makes: expandedFull.makes
    }),
    ...expanded,
    ...expandedFull,
    exports: [...exports, 'label', 'group', 'parentDepth']
  });

  writeFile(outputFile, output);
};
