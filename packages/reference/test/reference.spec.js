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
exports.__esModule = true;
var classesForGroup_1 = __importDefault(require("../src/classesForGroup"));
var findGroup_1 = __importDefault(require("../src/findGroup"));
var findLabel_1 = __importDefault(require("../src/findLabel"));
var placesEntry_1 = __importDefault(require("../../aep-mobile/src/placesEntry"));
var mobileEvent_1 = __importDefault(require("../../aep-mobile/src/mobileEvent"));
var event_1 = __importDefault(require("../../common/src/event"));
var command_1 = __importDefault(require("../../common/src/command"));
var mockEntry = placesEntry_1["default"].mock({});
var mockAEP = mobileEvent_1["default"].mock({});
var mockEvent = event_1["default"].mock({});
var mockCommand = command_1["default"].mock({});
describe('findLabel', function () {
    it('gets a label for the provided event', function () {
        expect((0, findLabel_1["default"])(mockEntry)).toBe('Places Entry Event');
        expect((0, findLabel_1["default"])(mockAEP)).toBe('Generic Mobile Event');
        expect((0, findLabel_1["default"])(mockEvent)).toBe('Generic Event');
        expect((0, findLabel_1["default"])({})).toBe('');
    });
});
describe('findGroup', function () {
    it('gets a group for the provided data', function () {
        expect((0, findGroup_1["default"])(mockEntry)).toBe('event');
        expect((0, findGroup_1["default"])(mockCommand)).toBe('command');
        expect((0, findGroup_1["default"])({})).toBe('');
    });
});
describe('classesForGroup', function () {
    it('retrieves all the classes for a group', function () {
        expect(Object.keys((0, classesForGroup_1["default"])('construct')).indexOf('annotation')).not.toBe(-1);
    });
});
