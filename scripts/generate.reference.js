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

const fs = require('fs');

const filePath = require('path');
const packagePath = filePath.join(__dirname, '../packages');
const packageName = 'reference';
const fileName = 'reference.instructions.js'
const outputFile = filePath.join(packagePath, packageName, 'src', fileName);

import { writeFile, escapeQuote } from './utils/shared';

const writeOutput = ({ instructions }) => `/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * NOTE: this file is auto-generated. Any changes will be clobbered.
 */

import * as kit from '@adobe/griffon-toolkit';

export default [${instructions.join(`,`)}
];`;

const LABEL_REGEX = /getCustomLabel = ([^\/\*\*]*);\n+/s;
const DESC_REGEX = /getCustomShortDescription = ([^\/\*\*]*);\n+/s;
const EOL_REGEX = /\n/g;

const GET_REGEX = /get\('(.*)', (.*)\)/g;
const GET_ALT_REGEX = /get(.*)\((.*)\)/g;

const increaseSpace = (depth) => (str) => str.replace(EOL_REGEX, `
${' '.repeat(depth)}`);

const replaceGets = ({ paths }) => (str) => {
  let output = str;
  let matches = str.matchAll(GET_REGEX);
  for (const match of matches) {
    const replacement = match[0];
    const path = match[1];
    const data = match[2];
    output = output.replace(
      replacement,
      `kit.search('${paths[path]}', ${data})`
    );
  }

  matches = str.matchAll(GET_ALT_REGEX);
  for (const match of matches) {
    const replacement = match[0];
    const path = match[1].charAt(0).toLowerCase() + match[1].slice(1);
    const data = match[2];
    output = output.replace(
      replacement,
      `kit.search('${paths[path]}', ${data})`
    );
  }

  return output;
}

const prepareFactory = ({
  paths,
  spacing = 6
}) => R.pipe(
  increaseSpace(spacing),
  replaceGets({ paths })
)


const writeInstruction = ({
  customCode,
  matchers,
  paths,
  shortDesc
}) => {
  const prepareCustom = prepareFactory({
    paths
  });

  const labelMatch = customCode.match(LABEL_REGEX);
  const descMatch = customCode.match(DESC_REGEX);

  let mods = '';
  if (labelMatch && labelMatch[1]) {
    const customLabel = (labelMatch[1] === '() => label') ?
      `'${shortDesc}'` : prepareCustom(labelMatch[1]);
    mods += `,
      customLabel: ${customLabel}`;
  }
  if (descMatch && descMatch[1]) {
    mods += `,
      customShortDescription: ${prepareCustom(descMatch[1])}`;
  }

  return `
  {
    matcher: kit.combineAll([
      '${matchers.map(escapeQuote).join(`',
      '`)}'
    ]),
    mods: {
      staticLabel: '${shortDesc}'${mods}
    }
  }`;
}

export default (results) => {
  const instructions = R.pipe(
    R.filter(({ matchers }) => matchers.length > 0),
    R.sortBy(R.prop('depth')),
    R.map(writeInstruction)
  )(results);

  const output = writeOutput({ instructions });
  writeFile(outputFile, output);

  console.log(`generate reference => ${outputFile}`);
}
