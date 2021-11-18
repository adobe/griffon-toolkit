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
exports.__esModule = true;
var ramda_1 = require("ramda");
var common = __importStar(require("@adobe/griffon-toolkit-common"));
var aep = __importStar(require("@adobe/griffon-toolkit-aep-mobile"));
var references = [common, aep];
var isProperSchemaSource = function (source) { return !!source.label && !!source.isMatch; };
/**
 * Takes an object and checks it against all known schemas to find any matches.
 * It will return the requested metadata from the match with the highest
 * parentDepth.
 *
 * @function
 * @param {string} type The metadata to request
 * @param {object} source The object to match against
 * @returns {string} label
 */
exports["default"] = (0, ramda_1.curry)(function (type, source) {
    var matchDepth = -1;
    var match = '';
    (0, ramda_1.forEach)((0, ramda_1.forEachObjIndexed)(function (file) {
        if (isProperSchemaSource(file)
            && file.parentDepth > matchDepth
            && file.isMatch
            && file.isMatch(source)) {
            match = file[type];
            matchDepth = file.parentDepth;
        }
    }), references);
    return match;
});
