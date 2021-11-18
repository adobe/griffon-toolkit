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
var kit = __importStar(require("@adobe/griffon-toolkit"));
var event_1 = __importDefault(require("../src/event"));
var annotation_1 = __importDefault(require("../src/annotation"));
describe('Annotation Tests', function () {
    it('can create paths', function () {
        var _a;
        var visibilityPath = annotation_1["default"].makeNamespacePath('visibility');
        var hiddenPath = annotation_1["default"].makeNamespacePath('visibility', 'hidden');
        var hiddenEvent = event_1["default"].mock({
            annotations: [
                annotation_1["default"].mock((_a = {},
                    _a[annotation_1["default"].path.namespace] = 'visibility',
                    _a[annotation_1["default"].path.payload] = { hidden: true },
                    _a))
            ]
        });
        var genericEvent = event_1["default"].mock(null);
        expect(kit.isMatch(hiddenPath, hiddenEvent)).toBe(true);
        expect(kit.isMatch(hiddenPath, genericEvent)).toBe(false);
        expect(kit.search(hiddenPath, hiddenEvent)).toBe(true);
        expect(kit.search(visibilityPath, hiddenEvent).hidden).toBe(true);
        expect(kit.search(visibilityPath, genericEvent)).toBeFalsy();
    });
});
