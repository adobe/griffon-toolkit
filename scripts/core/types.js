import { compile } from 'json-schema-to-typescript';
import * as R from 'ramda';
import normalizeSchema from '../utils/normalize.for.legacy';

const fs = require('fs-extra');
const filePath = require('path');

export const generateTypeSchema = (schema, outputFile) => {
  const clone = R.clone(schema);

  const replaceRefKeys = (object) => {
    R.forEachObjIndexed((_, key) => {
      if (Array.isArray(object[key])) {
        object[key].forEach((item) => replaceRefKeys(item));
      } else if (typeof object[key] === 'object') {
        replaceRefKeys(object[key]);
      } else if (key === '$ref') {
        const refPaths = object.$ref.split('/');
        const refNamespace = refPaths[refPaths.length - 1];

        // eslint-disable-next-line no-param-reassign
        object.$ref = filePath.join(__dirname, `../../tmp/${refNamespace}.json`);
      }
    }, object);
    return object;
  };

  const flattened = replaceRefKeys(clone);
  const outputPath = filePath.join(__dirname, `../../tmp/${outputFile}`);

  fs.writeFileSync(outputPath, JSON.stringify(flattened));

  return outputPath;
};

export const generateTypeDefinition = (schema, fileName) => {
  compile(normalizeSchema(schema), fileName)
    .then((output) => fs.writeFileSync(fileName, output));
};
