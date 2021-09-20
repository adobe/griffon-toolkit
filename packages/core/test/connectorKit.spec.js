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

import {
  generateConnectionContextHash,
  generateConnectionContextString,
  generateConnectionId
} from '../src/connectorKit';

describe('generateConnectionContextString', () => {
  it('converts to a string', () => {
    expect(generateConnectionContextString({ a: 'b', c: 'd' })).toBe('a==b<>c==d');
  });
  it('sorts the data', () => {
    expect(generateConnectionContextString({ c: 'd', a: 'b' })).toBe('a==b<>c==d');
  });
});

describe('generateConnectionContextHash', () => {
  it('hashes the context string', () => {
    expect(generateConnectionContextHash({ a: 'b', c: 'd' })).toBe('YT09Yjw+Yz09ZA==');
  });
});


describe('generateConnectionId', () => {
  it('returns the namespace if no context', () => {
    expect(generateConnectionId('test')).toBe('test');
    expect(generateConnectionId('test', {})).toBe('test');
  });

  it('encodes the context', () => {
    expect(generateConnectionId('test', { a: 'b', c: 'd' })).toBe(
      'test:YT09Yjw+Yz09ZA=='
    );
  });
});
