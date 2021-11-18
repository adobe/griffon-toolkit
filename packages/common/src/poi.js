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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var poi_json_1 = __importDefault(require("../schemas/poi.json"));
/**
 * Contains constants and functions for a POI Object.
 *
 * The structure for a POI Object is as follows:
 * ```
 * {
 *   latitude: <number>,
 *   libraryid: <string>,
 *   longitude: <number>,
 *   regionname: <string>,
 *   regionmetadata: {
 *     category: <string>,
 *     city: <string>,
 *     country: <string>,
 *     state: <string>,
 *     street: <string>,
 *   },
 *   radius: <number>,
 *   regionid: <string>,
 *   useriswithin: <boolean>,
 *   weight: <number>,
 * }
 * ```
 *
 * @namespace poi
 */
/**
 * Paths for the keys on a POI Object
 *
 * @enum {string}
 */
var path = {
    /** The POI latitude.<br />Path is `latitude`. */
    latitude: 'latitude',
    /** The Places library the POI belongs to.<br />Path is `libraryid`. */
    libraryId: 'libraryid',
    /** The POI longitude.<br />Path is `longitude`. */
    longitude: 'longitude',
    /** The POI name.<br />Path is `regionname`. */
    name: 'regionname',
    /** An object with some defined items and custom data items..<br />Path is `regionmetadata`. */
    metadata: 'regionmetadata',
    /** The POI category.<br />Path is `regionmetadata.category`. */
    category: 'regionmetadata.category',
    /** The POI city.<br />Path is `regionmetadata.city`. */
    city: 'regionmetadata.city',
    /** The POI country.<br />Path is `regionmetadata.country`. */
    country: 'regionmetadata.country',
    /** The POI state.<br />Path is `regionmetadata.state`. */
    state: 'regionmetadata.state',
    /** The POI street.<br />Path is `regionmetadata.street`. */
    street: 'regionmetadata.street',
    /** The POI radius.<br />Path is `radius`. */
    radius: 'radius',
    /** The unique region id.<br />Path is `regionid`. */
    id: 'regionid',
    /** Is the user currently in the POI.<br />Path is `useriswithin`. */
    within: 'useriswithin',
    /** The weight of the POI. It is used to prioritize POIs when a user is inside multiple POIS.<br />Path is `weight`. */
    weight: 'weight'
};
/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
var parentDepth = 0;
/**
 * A label that can be used when describing this object
 */
var label = 'POI Object';
/**
 * A grouping for this object
 */
var group = 'construct';
/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param {string} alias Path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
var get = function (alias, data) {
    var func = function (data2) { return kit.search(path[alias] || alias, data2); };
    if (!data) {
        return func;
    }
    return func(data);
};
/**
 * Returns the `latitude` from the POI Object.
 * This is the the POI latitude.
 *
 * Path is `latitude`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
var getLatitude = kit.search(path.latitude);
/**
 * Returns the `libraryId` from the POI Object.
 * This is the the Places library the POI belongs to.
 *
 * Path is `libraryid`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getLibraryId = kit.search(path.libraryId);
/**
 * Returns the `longitude` from the POI Object.
 * This is the the POI longitude.
 *
 * Path is `longitude`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
var getLongitude = kit.search(path.longitude);
/**
 * Returns the `name` from the POI Object.
 * This is the the POI name.
 *
 * Path is `regionname`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getName = kit.search(path.name);
/**
 * Returns the `metadata` from the POI Object.
 * This is the an object with some defined items and custom data items..
 *
 * Path is `regionmetadata`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {object}
 */
var getMetadata = kit.search(path.metadata);
/**
 * Returns the data using the specified path from the metadata
 * of the POI Object.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The POI Object instance
 * @returns {*}
 */
var getMetadataKey = kit.curry(function (searchPath, source) { return kit.search(path.metadata + "." + searchPath, source); });
/**
 * Returns the `category` from the POI Object.
 * This is the the POI category.
 *
 * Path is `regionmetadata,category`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getCategory = kit.search(path.category);
/**
 * Returns the `city` from the POI Object.
 * This is the the POI city.
 *
 * Path is `regionmetadata,city`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getCity = kit.search(path.city);
/**
 * Returns the `country` from the POI Object.
 * This is the the POI country.
 *
 * Path is `regionmetadata,country`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getCountry = kit.search(path.country);
/**
 * Returns the `state` from the POI Object.
 * This is the the POI state.
 *
 * Path is `regionmetadata,state`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getState = kit.search(path.state);
/**
 * Returns the `street` from the POI Object.
 * This is the the POI street.
 *
 * Path is `regionmetadata,street`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getStreet = kit.search(path.street);
/**
 * Returns the `radius` from the POI Object.
 * This is the the POI radius.
 *
 * Path is `radius`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
var getRadius = kit.search(path.radius);
/**
 * Returns the `id` from the POI Object.
 * This is the the unique region id.
 *
 * Path is `regionid`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
var getId = kit.search(path.id);
/**
 * Returns the `within` from the POI Object.
 * This is the is the user currently in the POI.
 *
 * Path is `useriswithin`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {boolean}
 */
var getWithin = kit.search(path.within);
/**
 * Returns the `weight` from the POI Object.
 * This is the the weight of the POI. It is used to prioritize POIs when a user is inside multiple POIS.
 *
 * Path is `weight`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
var getWeight = kit.search(path.weight);
/**
 * Generates a POI Object with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var make = kit.expand;
/**
 * Generates a POI Object with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
var mock = function (input) { return kit.expandWithPaths(path, __assign({ latitude: 40.4045982, libraryId: '04213', longitude: -111.8636017, name: 'Adobe', radius: 375, id: '31512', within: false, weight: 2 }, input)); };
/* ADD CUSTOM CONTENT BELOW */
/**
 * Returns the `metadata` without any known values. Scrubs items like category, state,
 * etc
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {object}
 */
var getCustomMetadata = function (source) {
    var data = __assign({}, getMetadata(source));
    delete data.category;
    delete data.street;
    delete data.city;
    delete data.state;
    delete data.country;
    return data;
};
// additional exports should be added here:
var customExports = { getCustomMetadata: getCustomMetadata };
/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */
exports["default"] = __assign(__assign({ path: path, mock: mock, make: make, schema: poi_json_1["default"], get: get }, customExports), { getLatitude: getLatitude, getLibraryId: getLibraryId, getLongitude: getLongitude, getName: getName, getMetadata: getMetadata, getMetadataKey: getMetadataKey, getCategory: getCategory, getCity: getCity, getCountry: getCountry, getState: getState, getStreet: getStreet, getRadius: getRadius, getId: getId, getWithin: getWithin, getWeight: getWeight, label: label, group: group, parentDepth: parentDepth });
