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
import Ajv from 'ajv';

import generateOutput from './utils/generate.output';
import { generateTypeSchema } from './utils/types';

const filePath = require('path');
const fs = require('fs-extra');

const packagePath = filePath.join(__dirname, '../packages');

const ajv = new Ajv();
const schemaFiles = {};
const schemaMap = {};
const typeFiles = {};

const TEMP_DIR = 'tmp';

fs.ensureDirSync(TEMP_DIR);

fs.readdirSync(packagePath).forEach((dirName) => {
  const schemaPath = filePath.join(packagePath, dirName, '/schemas');

  try {
    // read in all the schemas
    fs.readdirSync(schemaPath).forEach((fileName) => {
      const fullFile = filePath.join(schemaPath, fileName);

      try {
        const data = fs.readFileSync(fullFile, 'utf8');

        const schema = JSON.parse(data);
        schemaFiles[fullFile] = schema.$id;
        schemaMap[schema.$id] = schema;
        typeFiles[schema.$id] = generateTypeSchema(schema, fileName);
        return ajv.addSchema(schema);
      } catch (err) {
        console.error(err);
      }
      return false;
    });
  } catch (e) {
    // skip
  }
});

/*
 * Takes all the schema files and outputs a script file with the generated content.
 */
R.mapObjIndexed((schemaName, schemaFile) => {
  const outputFile = schemaFile.replace('schemas', 'src').replace('json', 'ts');
  const { schema } = ajv.getSchema(schemaName);
  generateOutput(schema, outputFile, schemaMap, typeFiles[schemaName]);
}, schemaFiles);

fs.emptyDirSync(TEMP_DIR);
fs.removeSync(TEMP_DIR);
