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
var session_1 = __importDefault(require("../src/session"));
var sessionAnnotation_1 = __importDefault(require("../src/sessionAnnotation"));
describe('Annotation Tests', function () {
    var _a;
    var publicSession = session_1["default"].mock({
        annotations: [
            sessionAnnotation_1["default"].mock((_a = {},
                _a[sessionAnnotation_1["default"].path.namespace] = 'visibility',
                _a[sessionAnnotation_1["default"].path.payload] = { public: true },
                _a))
        ]
    });
    var genericSession = session_1["default"].mock(null);
    it('can create paths', function () {
        var visibilityPath = sessionAnnotation_1["default"].makeNamespacePath('visibility');
        var publicPath = sessionAnnotation_1["default"].makeNamespacePath('visibility', 'public');
        expect(kit.isMatch(publicPath, publicSession)).toBe(true);
        expect(kit.isMatch(publicPath, genericSession)).toBe(false);
        expect(kit.search(publicPath, publicSession)).toBe(true);
        expect(kit.search(visibilityPath, publicSession).public).toBe(true);
        expect(kit.search(visibilityPath, genericSession)).toBeFalsy();
    });
    it('can search paths', function () {
        var isPublic = sessionAnnotation_1["default"].search('visibility', 'public');
        expect(isPublic(publicSession)).toBe(true);
        expect(isPublic(genericSession)).toBeFalsy();
    });
});
