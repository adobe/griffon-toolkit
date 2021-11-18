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
var annotation_1 = __importDefault(require("./annotation"));
var clientInfo_1 = __importDefault(require("./clientInfo"));
var command_1 = __importDefault(require("./command"));
var event_1 = __importDefault(require("./event"));
var logEvent_1 = __importDefault(require("./logEvent"));
var poi_1 = __importDefault(require("./poi"));
var screenshotResponse_1 = __importDefault(require("./screenshotResponse"));
var session_1 = __importDefault(require("./session"));
var sessionAnnotation_1 = __importDefault(require("./sessionAnnotation"));
/*
 * Contains a mapping of all the schemas in this package
 *
 * @constant
 */
var schemaFiles = {
    annotation: annotation_1["default"],
    clientInfo: clientInfo_1["default"],
    command: command_1["default"],
    event: event_1["default"],
    logEvent: logEvent_1["default"],
    poi: poi_1["default"],
    screenshotResponse: screenshotResponse_1["default"],
    session: session_1["default"],
    sessionAnnotation: sessionAnnotation_1["default"]
};
exports["default"] = { schemaFiles: schemaFiles };
