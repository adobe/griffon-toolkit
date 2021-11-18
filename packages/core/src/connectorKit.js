"use strict";
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
exports.__esModule = true;
exports.generateConnectionId = exports.generateConnectionContextHash = exports.generateConnectionContextString = void 0;
/**
 * Takes the provided context object and returns a string representation of that object
 *
 * @function
 * @param {object} context Context to stringify
 * @returns {string} Stringified context
 */
var generateConnectionContextString = function (context) {
    var keys = Object.keys(context).sort();
    var results = '';
    keys.forEach(function (key) {
        if (results) {
            results += '<>';
        }
        results += key + "==" + context[key];
    });
    return results;
};
exports.generateConnectionContextString = generateConnectionContextString;
/**
 * Takes the provided context object and returns base64 encoded representation of that object
 *
 * @function
 * @param {object} context Context to encode
 * @returns {string} Encoded context
 */
var generateConnectionContextHash = function (context) { return btoa((0, exports.generateConnectionContextString)(context)); };
exports.generateConnectionContextHash = generateConnectionContextHash;
/**
 * Takes the namespace and context object creates a unique id based on that data
 *
 * @function
 * @param {string} namespace Namespace of the connection
 * @param {object} context Context to stringify
 * @returns {string} unique connection id
 */
var generateConnectionId = function (namespace, context) {
    var uuid = namespace;
    if (context && typeof context === 'object' && Object.keys(context).length > 0) {
        uuid = namespace + ":" + (0, exports.generateConnectionContextHash)(context);
    }
    return uuid;
};
exports.generateConnectionId = generateConnectionId;
