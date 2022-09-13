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
import {
  ucFirst,
  lcFirst,
  CUSTOM_CONTENT_START,
  CUSTOM_CONTENT_END
} from './shared';
import preparePath from '../utils/prepare.path';

const makeStrValue = (value, type) => (type === 'string' ? `'${value}'` : value);

const normalizeType = (type) => (
  type === 'array' ? 'Array'
    : type === 'integer' ? 'number'
      : type
);

const escapeQuote = (str) => str.replace(/'/g, '\\\'');

/*
 * Writes a matcher. Is written if constants are found on the schema.
 */
export const writeMatches = (matches, parent) => (matches.length > 0
  ? `
/**
 * Matcher can be used to find matching ${parent} objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  ${matches.join(`,
  `)}
]);

/**
 * Tests the provided source against the matcher to see if it's ${parent} event.
 *
 * @function
 * @param {object} source The ${parent} instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);` : '');

/*
 * This merges all the content into a single string that will be written to the file
 */
export const writeFullContent = ({
  shortDesc,
  constants,
  customCode,
  depth,
  event,
  exports,
  paths,
  gets,
  group,
  make,
  mock,
  matches,
  namespace
}) => `/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/${namespace}.json';

/**
 * Contains constants and functions for a ${shortDesc}.
 *
 * The structure for a ${shortDesc} is as follows:
 * \`\`\`
 * {${event}
 * }
 * \`\`\`
 *
 * @namespace ${namespace}
 */

/**
 * Paths for the keys on a ${shortDesc}
 *
 * @enum {string}
 */
const path = {${paths.join(`,
`)}
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = ${depth};

/**
 * A label that can be used when describing this object
 */
const label = '${shortDesc}';

/**
 * A grouping for this object
 */
const group = '${group}';
${constants}
/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param {string} alias Path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = (alias, data) => {
  const func = (data2) => kit.search(path[alias] || alias, data2);
  if (!data) { return func; }
  return func(data);
};
${gets}${writeMatches(matches, shortDesc)}
${make}
${mock}
/* ${CUSTOM_CONTENT_START}${customCode}${CUSTOM_CONTENT_END} */
/* The content below is autogenerated. Do not make any changes */

export default {
  ${exports.join(`,
  `)}
};
`;

/*
 * Writes a comment line for a path declaration
 */
export const writeCommentLine = ({ description, path }) => `
  /** ${description}.<br />Path is \`${preparePath(path)}\`. */`;

/*
 * Writes a path declaration
 */
export const writePathLine = ({ alias, path }) => `
  ${alias}: '${preparePath(path)}'`;

const writeEventType = (props, name) => (props
  ? props === '{'
    ? '{'
    : props.useConst
      ? `'${props.useConst}'`
      : props.enum
        ? `<enum(${props.enum.join(', ')})>,`
        : `<${props.type}>,`
  : name === '...' ? '' : '},'
);
const writeEventName = (name) => (
  name === '...' ? name
    : name ? `${name}: ` : ''
);

/*
 * Writes a line about the structure. This will be spit out in the comments
 * of the object and is used to document the object structure.
 */
export const writeStructureLine = (pad, name, props) => `
 * ${''.padStart(pad, ' ')}${writeEventName(name)}${writeEventType(props, name)}`;

/*
 * Writes a getter that gets a piece of content from the object
 */
export const writeGet = ({
  description, alias, type, parent, path
}) => `
/**
 * Returns the \`${alias}\` from the ${parent}.
 * This is the ${lcFirst(description)}.
 *
 * Path is \`${path}\`.
 *
 * @function
 * @param {object} source The ${parent} instance
 * @returns {${normalizeType(type)}}
 */
const get${ucFirst(alias)} = kit.search(path.${alias});
`;

/*
 * Writes a getter that pulls values from an object. This is only written for object data types.
 */
export const writeGetFromObject = ({
  alias, parent
}) => `
/**
 * Returns the data using the specified path from the ${alias}
 * of the ${parent}.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The ${parent} instance
 * @returns {*}
 */
const get${ucFirst(alias)}Key = kit.curry(
  (searchPath, source) => kit.search(\`\${path.${alias}}.\${searchPath}\`, source)
);
`;

/*
 * Writes a function that can be used to mock this object. Looks for `mock` declarations in the schema def.
 */
export const writeMock = ({
  shortDesc,
  mocks
}) => `
/**
 * Generates a ${shortDesc} with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {${mocks || ''}
  ...input
});
`;

/*
 * Writes a function that can be used to create this object. Looks for `const` declarations in the schema def.
 */
export const writeMake = ({
  shortDesc,
  makes
}) => `/**
 * Generates a ${shortDesc} with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = ${makes ? `(input) => kit.expandWithPaths(path, {${makes}
  ...input
})` : 'kit.expand'};`;

/*
 * Writes a single mock line. Looks for `mock` declarations in the schema def.
 */
export const writeMockLine = ({
  alias,
  type,
  useMock
}) => `
  ${alias}: ${makeStrValue(
  useMock, type
)},`;

export const writeCombineMatch = ({
  not = {}, oneOf = {}, path
}) => {
  const enums = not.enum || oneOf.enum;
  const matchType = not.enum ? '!=' : '==';
  const matches = R.map((val) => `${preparePath(path)}${matchType}\`${val}\``, enums);
  const join = not.enum ? ' && ' : ' || ';
  return `'${R.join(join, matches)}'`;
};

const formatMatch = (path, useConst) => {
  const value = R.type(useConst) !== 'Undefined'
    ? `${preparePath(path)}==\`${useConst}\``
    : `${preparePath(path)}`;
  return `'${escapeQuote(value)}'`;
};

export const writeMatch = ({
  path, useConst, useLegacy
}) => (
  R.type(useConst) !== 'Undefined' && useLegacy
    ? `kit.combineAny([
    ${formatMatch(path, useConst)},
    ${formatMatch(path, useConst.toLowerCase())}
  ])` : formatMatch(path, useConst)
);

/*
 * Writes a constant. This occurs when a `const` is declared in the schema.
 */
export const writeConstant = ({
  parent,
  alias,
  path,
  type,
  snakeName,
  useConst
}) => `
/**
 * The value for \`${alias}\` for a ${parent}.
 *
 * Path is \`${path}\`.
 *
 * @constant
 */
const ${snakeName} = ${makeStrValue(
  useConst, type
)};
`;