"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
var __1 = require("../");
var event_1 = __importDefault(require("../../common/src/event"));
var annotation_1 = __importDefault(require("../../common/src/annotation"));
var makeHiddenAnnotation = function (value) {
    var _a, _b;
    if (value === void 0) { value = true; }
    return annotation_1["default"].mock((_a = {},
        _a[annotation_1["default"].path.namespace] = annotation_1["default"].publicNamespace.visibility,
        _a[annotation_1["default"].path.payload] = (_b = {},
            _b[annotation_1["default"].publicKey.hidden] = value,
            _b),
        _a));
};
var plainEvent = event_1["default"].mock((_a = {},
    _a[event_1["default"].path.rootId] = 'plainEvent',
    _a[event_1["default"].path.clientId] = 'abc',
    _a[event_1["default"].path.timestamp] = Date.parse('01 Jan 2020 01:01:00 GMT'),
    _a));
var hiddenEvent = event_1["default"].mock((_b = {},
    _b[event_1["default"].path.rootId] = 'hiddenEvent',
    _b[event_1["default"].path.timestamp] = Date.parse('01 Jan 2020 02:01:00 GMT'),
    _b[event_1["default"].path.annotations] = [
        makeHiddenAnnotation()
    ],
    _b));
describe('Filter Kit', function () {
    describe('Match', function () {
        it('matches the provided events', function () {
            var filters = {
                rootId: event_1["default"].path.rootId + "=='plainEvent'"
            };
            expect((0, __1.filterData)(filters, [plainEvent, hiddenEvent]).length).toBe(1);
        });
        it('returns everything with no filters', function () {
            expect((0, __1.filterData)([], [plainEvent, hiddenEvent]).length).toBe(2);
        });
    });
    describe('Hash', function () {
        it('can hash the filters', function () {
            var filters = { test: 'abc' };
            var hash = (0, __1.filterToHash)(filters);
            expect(hash).toBe('filters=eyJ0ZXN0IjoiYWJjIn0=');
            var url = "http://test.com/dev#" + hash;
            expect((0, __1.filterFromHash)(url).test).toBe('abc');
        });
        it('returns empty on fail', function () {
            var url = 'http://test.com/dev#abcdefg';
            expect((0, __1.filterFromHash)(url)).toBeFalsy();
        });
    });
});
