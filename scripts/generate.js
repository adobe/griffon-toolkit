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

/*
  eslint no-console: 0
*/

import * as R from 'ramda';
import Ajv from 'ajv';

import generateOutput from './utils/generate.output';
import generateReference from './utils/generate.reference';

const filePath = require('path');
const fs = require('fs');

const schemaPath = filePath.join(__dirname, '../schemas');
const srcPath = filePath.join(__dirname, '../src');

const ajv = new Ajv();
const schemaFiles = {};
const schemaMap = {};

// read in all the schemas
fs.readdirSync(schemaPath).map((fileName) => {
  const fullFile = filePath.join(schemaPath, fileName);

  try {
    const data = fs.readFileSync(fullFile, 'utf8');

    const schema = JSON.parse(data);
    schemaFiles[fullFile] = schema.$id;
    schemaMap[schema.$id] = schema;
    return ajv.addSchema(schema);
  } catch (err) {
    console.error(err);
    return false;
  }
});

/*
 * Takes all the schema files and outputs a script file with the generated content.
 */
R.mapObjIndexed((schemaName, schemaFile) => {
  const outputFile = schemaFile.replace('schemas', 'src').replace('json', 'js');
  const { schema } = ajv.getSchema(schemaName);
  generateOutput(schema, outputFile, schemaMap);
}, schemaFiles);

generateReference(schemaFiles, `${srcPath}/reference.js`);
