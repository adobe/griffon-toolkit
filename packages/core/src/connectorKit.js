/*
 * ************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *   Copyright 2021 Adobe Systems Incorporated
 *   All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ************************************************************************
 */

/**
 * Takes the provided context object and returns a string representation of that object
 *
 * @function
 * @param {object} context Context to stringify
 * @returns {string} Stringified context
 */
export const generateConnectionContextString = (context) => {
  const keys = Object.keys(context).sort();
  let results = '';
  keys.forEach((key) => {
    if (results) { results += '<>'; }
    results += `${key}==${context[key]}`;
  });
  return results;
};

/**
 * Takes the provided context object and returns base64 encoded representation of that object
 *
 * @function
 * @param {object} context Context to encode
 * @returns {string} Encoded context
 */
export const generateConnectionContextHash = (context) => btoa(generateConnectionContextString(context));

/**
 * Takes the namespace and context object creates a unique id based on that data
 *
 * @function
 * @param {string} namespace Namespace of the connection
 * @param {object} context Context to stringify
 * @returns {string} unique connection id
 */
export const generateConnectionId = (namespace, context) => {
  let uuid = namespace;

  if (context && typeof context === 'object' && Object.keys(context).length > 0) {
    uuid = `${namespace}:${generateConnectionContextHash(context)}`;
  }
  return uuid;
};
