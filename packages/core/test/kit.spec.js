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
exports.__esModule = true;
var kit = __importStar(require("../"));
var placesEntry_1 = __importDefault(require("../../aep-mobile/src/placesEntry"));
var mobileEvent_1 = __importDefault(require("../../aep-mobile/src/mobileEvent"));
var annotation_1 = __importDefault(require("../../common/src/annotation"));
var mockEntry = placesEntry_1["default"].mock({
    annotations: [annotation_1["default"].mock(null)]
});
var mockAEP = mobileEvent_1["default"].mock(null);
var events = [mockEntry, mockAEP];
var matchAEP = mobileEvent_1["default"].path.eventSource;
describe('Kit Tests', function () {
    it('can match events', function () {
        expect(kit.match(placesEntry_1["default"].matcher, events)).toEqual([mockEntry]);
    });
    it('can match against all events', function () {
        expect(kit.match(kit.combineAll([matchAEP, placesEntry_1["default"].matcher]), events).length).toBe(1);
    });
    it('can match against any events', function () {
        expect(kit.match(kit.combineAny([matchAEP, placesEntry_1["default"].matcher]), events).length).toBe(2);
    });
    it('can match against none of the events', function () {
        expect(kit.match(kit.combineNone([matchAEP, placesEntry_1["default"].matcher]), events).length).toBe(0);
        expect(kit.match(kit.combineNone([placesEntry_1["default"].matcher]), events).length).toBe(1);
    });
    it('will expand provided paths', function () {
        expect(kit.expand({ size: 's' })).toEqual({ size: 's' });
        expect(kit
            .expand({ 'size.width': 200, 'size.height': 300 }))
            .toEqual({ size: { width: 200, height: 300 } });
    });
    it('will map and expand provided paths', function () {
        var path = {
            width: 'size.width',
            height: 'size.height'
        };
        expect(kit.expandWithPaths(path, { width: 200, height: 300 })).toEqual({ size: { width: 200, height: 300 } });
    });
    it('will map quoted paths', function () {
        var path = {
            width: 'size."the.dimensions"."the.width"',
            height: 'size."the.dimensions"."the.height"',
            dims: 'size."the.dimensions".dims'
        };
        expect(kit.expandWithPaths(path, { width: 200, height: 300, dims: '200x300' })).toEqual({
            size: {
                'the.dimensions': {
                    'the.width': 200,
                    'the.height': 300,
                    dims: '200x300'
                }
            }
        });
    });
    it('will merge while expanding', function () {
        var path = {
            size: 'size',
            width: 'size.width',
            height: 'size.height'
        };
        expect(kit.expandWithPaths(path, { width: 200, height: 300, size: { mode: 'resize' } })).toEqual({ size: { width: 200, height: 300, mode: 'resize' } });
    });
    it('can modify data in the results', function () {
        var results = kit.modify({ color: 'red' }, placesEntry_1["default"].matcher, events);
        expect(results.length).toBe(2);
        expect(results[0].color).toBe('red');
        expect(results[0].uuid).toBe('123');
        expect(results[1].color).toBeFalsy();
    });
    it('can mod with a function', function () {
        var results = kit.modify(function (_a) {
            var uuid = _a.uuid;
            return ({ theUUID: uuid });
        }, placesEntry_1["default"].matcher, events);
        expect(results[0].theUUID).toBe('123');
        expect(results[1].theUUID).toBeFalsy();
    });
    it('can modify the results in bulk', function () {
        var results = kit.modifyBulk([
            { matcher: placesEntry_1["default"].matcher, modifications: { color: 'red' } },
            {
                matcher: matchAEP,
                mods: {
                    size: 'large',
                    theUUID: function (_a) {
                        var uuid = _a.uuid;
                        return uuid;
                    },
                    colors: ['green', function () { return 'red'; }]
                }
            }
        ], events);
        expect(results.length).toBe(2);
        expect(results[0].color).toBe('red');
        expect(results[0].uuid).toBe('123');
        expect(results[1].color).toBeFalsy();
        expect(results[0].size).toBe('large');
        expect(results[1].size).toBe('large');
        expect(results[1].theUUID).toBe('123');
        expect(results[1].colors).toEqual(['green', 'red']);
    });
    it('correctly wraps paths', function () {
        expect(kit.not('a')).toBe('!a');
        expect(kit.not('a && b')).toBe('!(a && b)');
        expect(kit.combineAll(['a', 'b'])).toBe('a && b');
        expect(kit.combineAll(['a', 'b && c'])).toBe('a && (b && c)');
        expect(kit.combineAll(['a', '(b && c)'])).toBe('a && (b && c)');
        expect(kit.combineAll(['a', '(b) && (c)'])).toBe('a && ((b) && (c))');
    });
    it('correctly parses paths', function () {
        expect(kit.convertPath('a.b.c')).toEqual(['a', 'b', 'c']);
        expect(kit.convertPath('a."b.e".c')).toEqual(['a', 'b.e', 'c']);
    });
});
// ^(([^\n."])|(\".*\")*\.?)*$
