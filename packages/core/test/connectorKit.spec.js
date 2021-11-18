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
var connectorKit_1 = require("../src/connectorKit");
describe('generateConnectionContextString', function () {
    it('converts to a string', function () {
        expect((0, connectorKit_1.generateConnectionContextString)({ a: 'b', c: 'd' })).toBe('a==b<>c==d');
    });
    it('sorts the data', function () {
        expect((0, connectorKit_1.generateConnectionContextString)({ c: 'd', a: 'b' })).toBe('a==b<>c==d');
    });
});
describe('generateConnectionContextHash', function () {
    it('hashes the context string', function () {
        expect((0, connectorKit_1.generateConnectionContextHash)({ a: 'b', c: 'd' })).toBe('YT09Yjw+Yz09ZA==');
    });
});
describe('generateConnectionId', function () {
    it('returns the namespace if no context', function () {
        expect((0, connectorKit_1.generateConnectionId)('test')).toBe('test');
        expect((0, connectorKit_1.generateConnectionId)('test', {})).toBe('test');
    });
    it('encodes the context', function () {
        expect((0, connectorKit_1.generateConnectionId)('test', { a: 'b', c: 'd' })).toBe('test:YT09Yjw+Yz09ZA==');
    });
});
