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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
exports.__esModule = true;
var kit = __importStar(require("@adobe/griffon-toolkit"));
var annotation_1 = __importDefault(require("../src/annotation"));
var event_1 = __importDefault(require("../src/event"));
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
var plainEvent2 = event_1["default"].mock((_b = {},
    _b[event_1["default"].path.rootId] = 'plainEvent2',
    _b[event_1["default"].path.clientId] = 'abc',
    _b[event_1["default"].path.timestamp] = Date.parse('01 Jan 2020 02:01:00 GMT'),
    _b));
var plainEvent3 = event_1["default"].mock((_c = {},
    _c[event_1["default"].path.rootId] = 'plainEvent3',
    _c[event_1["default"].path.clientId] = 'efg',
    _c[event_1["default"].path.timestamp] = Date.parse('01 Jan 2020 03:01:00 GMT'),
    _c));
var hiddenEvent = event_1["default"].mock((_d = {},
    _d[event_1["default"].path.rootId] = 'hiddenEvent',
    _d[event_1["default"].path.timestamp] = Date.parse('01 Jan 2020 02:01:00 GMT'),
    _d[event_1["default"].path.annotations] = [
        makeHiddenAnnotation()
    ],
    _d));
var visibleEvent = event_1["default"].mock((_e = {},
    _e[event_1["default"].path.rootId] = 'visibleEvent',
    _e[event_1["default"].path.timestamp] = Date.parse('01 Jan 2020 01:01:00 GMT'),
    _e[event_1["default"].path.annotations] = [
        makeHiddenAnnotation(false)
    ],
    _e));
describe('Event Filters Kit', function () {
    describe('makeClientFilter', function () {
        it('makes a filter that chooses events by client id', function () {
            var match = kit.match(event_1["default"].makeClientFilter(['abc']));
            var matchMore = kit.match(event_1["default"].makeClientFilter(['abc', 'efg']));
            expect(match([plainEvent, plainEvent2, plainEvent3]).length).toBe(2);
            expect(matchMore([plainEvent, plainEvent2, plainEvent3]).length).toBe(3);
        });
    });
    describe('makeHiddenFilter', function () {
        it('should make a filter that hides events', function () {
            var match = kit.match(event_1["default"].makeHiddenFilter());
            expect(match([plainEvent, hiddenEvent]).length).toBe(1);
            expect(match([plainEvent, hiddenEvent])[0].uuid).toBe('plainEvent');
        });
        it('should make a filter that hides events with a clear timestamp', function () {
            var match = kit.match(event_1["default"].makeHiddenFilter(Date.parse('01 Jan 2020 02:00:00 GMT')));
            var results = match([plainEvent, plainEvent2, hiddenEvent, visibleEvent]);
            expect(results.length).toBe(2);
            // valid if after the filter date
            expect(results[0].uuid).toBe('plainEvent2');
            // valid if hidden is true
            expect(results[1].uuid).toBe('visibleEvent');
        });
    });
});
