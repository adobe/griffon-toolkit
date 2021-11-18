/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as R from 'ramda';
import mergeProperties from '../utils/merge.properties';
import makePropertyProps from '../utils/make.property.props';
import preparePath from '../utils/prepare.path';

const makeMatcher = (definition) => ({
  type: 'matcher', definition
});

const makeCondition = (matches) => {
  if (matches.length === 1) {
    return makeMatcher(matches[0]);
  }
  return {
    type: 'group',
    definition: {
      logic: 'and',
      conditions: R.map(makeMatcher, matches)
    }
  };
};

const prepareRulePath = (path) => {
  const flat = preparePath(path).replace('payload.', '');

  if (flat === 'ACPExtensionEventSource') { return '~source'; }
  if (flat === 'ACPExtensionEventType') { return '~type'; }

  if (flat.indexOf('ACPExtensionEventData.') === 0) {
    return flat.replace('ACPExtensionEventData.', '');
  }
  if (flat === 'timestamp' || flat === 'ACPExtensionEventData') {
    return 'ignore';
  }
  return null;
};

/*
 * This is the code we want to generate for this class and everything it inherits.
 * We do export some things like path for all the inherited objects.
 */
const expandFullProperties = ({
  config,
  path = [],
  output: outputIn = {
    matches: [], children: []
  },
  depth,
  properties,
  parent
}) => {
  let output = { ...outputIn };
  const { hide = [] } = config;

  R.forEachObjIndexed(
    (property, key) => {
      const props = makePropertyProps(property, key, path, parent);

      if (props.useMatch && !props.useCombine) {
        const iKey = prepareRulePath(props.path);

        if (iKey && iKey !== 'ignore') {
          const matcher = { key: iKey };

          if (R.type(props.useConst) !== 'Undefined') {
            matcher.matcher = 'eq';
            matcher.values = [props.useConst];
          } else {
            matcher.matcher = 'ex';
          }

          output.matches.push(matcher);
        } else if (!iKey) {
          console.log('Invalid target', props);
        }
      } else {
        const iKey = prepareRulePath(props.path);

        if (iKey && iKey[0] !== '~' && iKey !== 'ignore' && hide.indexOf(iKey) < 0) {
          output.children.push({
            name: props.alias,
            description: props.description,
            dataType: props.type,
            path: iKey
          });
        }
      }

      if (property.properties) {
        output = expandFullProperties({
          config,
          path: [...path, key],
          output,
          properties: property.properties,
          depth: depth + 2,
          parent
        });
      }
    },
    properties
  );
  return output;
};

/*
 * Takes the provided schema, generates the rule information and returns it
 */
export default (schema, schemaMap, config) => {
  const expandedFull = expandFullProperties({
    properties: mergeProperties(schema, schemaMap),
    parent: schema.shortDesc,
    config
  });

  return {
    name: schema.shortDesc,
    conditionType: 'event',
    dataType: 'const',
    condition: makeCondition(expandedFull.matches),
    children: expandedFull.children
  };
};
