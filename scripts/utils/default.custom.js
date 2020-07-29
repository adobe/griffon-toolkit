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
 * Used when first generating the file. After that point, it will be replaced with the inner
 * contents of the string.
 */
export default ` */

/**
 * Generates a custom label that can be used when referencing this specific
 * object. By default, it just returns the schema's label, but can be customized
 * to something else.
 *
 * @param {*} data Data to extract the label from
 * @returns {string}
 */
const getCustomLabel = () => label;

/**
 * Generates a custom description that can be used in places where a short description
 * would be useful. By default, it just returns an empty string, but can be customized
 * to something else.
 *
 * @param {*} data Data to extract the label from
 * @returns {string}
 */
const getCustomShortDescription = () => '';

// additional exports should be added here:
const customExports = { getCustomLabel, getCustomShortDescription };

/* `;
