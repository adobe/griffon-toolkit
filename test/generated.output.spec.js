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
// import jmespath from 'jmespath';
var placesEntry_1 = __importDefault(require("../packages/aep-mobile/src/placesEntry"));
var mobileEvent_1 = __importDefault(require("../packages/aep-mobile/src/mobileEvent"));
var event_1 = __importDefault(require("../packages/common/src/event"));
var configuration_1 = __importDefault(require("../packages/aep-mobile/src/configuration"));
var clientInfoIOS_1 = __importDefault(require("../packages/aep-mobile/src/clientInfoIOS"));
describe('Test Auto Generated Output', function () {
    it('exports paths', function () {
        expect(Object.keys(event_1["default"].path).length).toBe(6);
    });
    it('exports inherited paths', function () {
        expect(Object.keys(mobileEvent_1["default"].path).length).toBe(13);
    });
    it('exports paths from object refs', function () {
        expect(Object.keys(placesEntry_1["default"].path).length).toBe(29);
    });
    it('creates a make command', function () {
        expect(event_1["default"].make({})).toEqual({});
        var entryEvent = placesEntry_1["default"].make(null);
        expect(Object.keys(entryEvent.payload).length).toBe(3);
        expect(placesEntry_1["default"].getRegionEventType(entryEvent)).toBe('entry');
    });
    it('matches against matchers', function () {
        var events = [
            placesEntry_1["default"].mock({}),
            mobileEvent_1["default"].mock({}),
            event_1["default"].mock({})
        ];
        expect(placesEntry_1["default"].isMatch(events[0])).toBe(true);
        expect(placesEntry_1["default"].isMatch(events[1])).toBe(false);
    });
    it('exports constants', function () {
        expect(placesEntry_1["default"].REGION_EVENT_TYPE).toBe('entry');
    });
    it('exports getters', function () {
        var mock = event_1["default"].mock({});
        expect(event_1["default"].getClientId(mock)).toBe('appleABC');
        expect(event_1["default"].getRootType(mock)).toBe('generic');
    });
    it('generates a generic get', function () {
        var entryEvent = placesEntry_1["default"].mock({
            city: 'Appleton'
        });
        expect(placesEntry_1["default"].get('city', entryEvent)).toBe('Appleton');
        expect(placesEntry_1["default"].get(placesEntry_1["default"].path.city, entryEvent)).toBe('Appleton');
    });
    it('exports the parent depth', function () {
        expect(event_1["default"].parentDepth).toBe(0);
        expect(mobileEvent_1["default"].parentDepth).toBe(1);
        expect(placesEntry_1["default"].parentDepth).toBe(3);
    });
    it('exports get from object functions', function () {
        var _a;
        var mock = event_1["default"].mock((_a = {},
            _a[event_1["default"].path.payload] = {
                size: 'L',
                dimensions: { width: 800, height: 600 }
            },
            _a));
        expect(event_1["default"].getPayloadKey('size', mock)).toBe('L');
        expect(event_1["default"].getPayloadKey('dimensions.width', mock)).toBe(800);
    });
    it('handles keys with spaces in them', function () {
        var _a;
        // some schemas have spaces in the key names. This test validates that those
        // schemas work correctly
        var mock = clientInfoIOS_1["default"].mock((_a = {},
            _a[clientInfoIOS_1["default"].path.os] = 'iOS 13',
            _a));
        expect(clientInfoIOS_1["default"].isMatch(mock)).toBe(true);
        expect(clientInfoIOS_1["default"].getPlatform(mock)).toBe('iOS');
        expect(clientInfoIOS_1["default"].getOs(mock)).toBe('iOS 13');
    });
    it('handles keys with dots in them', function () {
        var mock = configuration_1["default"].mock({
            launchPropertyId: 'abcd',
            eventData: { box: true }
        });
        expect(configuration_1["default"].getLaunchPropertyId(mock)).toBe('abcd');
        expect(configuration_1["default"].getEventData(mock)['property.id']).toBe('abcd');
    });
});
