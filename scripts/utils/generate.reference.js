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
import { writeFile } from './shared';

const output = (files) => `
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

${R.join(`
`, R.map((file) => (`import ${file} from './${file}';`), files))}

const schemaFiles = {
  ${R.join(', ', files)}
};

/**
 * Takes an object. It will loop through all the defined schemas and find any matches.
 * It will return the label from the match with the highest parentDepth.
 *
 * @function
 * @param {object} source The object to match against
 * @returns {string} label
 */
const getLabel = (source) => {
  let matchDepth = -1;
  let match = '';

  const keys = Object.keys(schemaFiles);
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const file = schemaFiles[key];
    if (file.parentDepth > matchDepth
      && file.isMatch
      && file.isMatch(source)
    ) {
      match = file.prettyLabel;
      matchDepth = file.parentDepth;
    }
  }
  return match;
};

export default { getLabel };
`;

export default (input, outputFile) => {
  const data = R.pipe(
    R.values,
    R.map(
      R.pipe(R.split('/'), R.last)
    )
  )(input);

  writeFile(outputFile, output(data));
};
