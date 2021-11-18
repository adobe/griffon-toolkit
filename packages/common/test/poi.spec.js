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
var poi_1 = __importDefault(require("../src/poi"));
describe('POI', function () {
    it('can pull custom metadata', function () {
        var mock = poi_1["default"].mock({
            metadata: { capacity: 25, nearPark: true },
            category: 'coffee house',
            city: 'New York',
            country: 'USA',
            street: '34 ABC Way',
            state: 'NY'
        });
        expect(Object.keys(poi_1["default"].getMetadata(mock)).length).toBe(7);
        //@ts-ignore
        var custom = poi_1["default"].getCustomMetadata(mock);
        expect(Object.keys(custom).length).toBe(2);
        expect(poi_1["default"].getCity(mock)).toBe('New York'); // shoudln't disrupt the non custom metadata
        expect(custom.capacity).toBe(25);
        expect(custom.nearPark).toBe(true);
    });
});
