Griffon Toolkit uses schemas as the foundational element of the library. This guide will help you write your schemas in such a way that the code generation will work properly.

We use an extended version of the [JSON Schema](https://json-schema.org/understanding-json-schema/index.html) format to define events in Griffon Toolkit. We use [AJV] (https://github.com/ajv-validator/ajv) internally to parse and validate schemas.

## Schema Properties
Generic keywords aren't used to validate schemas, but can be used to describe the schema. Griffon Toolkit uses built in and a few custom keywords to help generate source code.

#### $id
This is required for all schemas. The `$id` must be `http://griffon.adobe.com/schemas/{$name of schema}` so if my schema is `placesEntry.json`, my `$id` is `http://griffon.adobe.com/schemas/placesEntry`.

#### shortDesc
This is a required custom keyword that Griffon Toolkit uses when writing documentation about your event. For example, the Annotation Schema uses the string `Annotation Object` for `shortDesc`. Anywhere we need to document an annotation, it will be referred to as `Annotation Object`.

#### alias
This is an optional keyword that can be added to a property. If provided, all code will reference this name when referring to this property. For example, in the AEP Event, we give `ACPExtensionEventSource` an `alias` of `eventSource`:

```
import { aepMobile } from '@adobe/griffon-toolkit';

const mock = aepMobile.mock();
console.log(aepMobile.path.eventSource); // payload.ACPExtensionEventSource
console.log(aepMobile.getEventSource(mock)); // com.adobe.eventsource.responsecontent
```

#### description
This is a required keyword that must be added to a property. It adds a description of the property in the documentation


#### mock
This is an optional keyword that can be added to a property. If provided, the generated mock function will use this value as the default value when mocking. For example. in the POI Schema, we define `libraryid` with a `mock` of `04213`:

```
import { poi } from '@adobe/griffon-toolkit';

const mock = poi.mock();
console.log(poi.getLibraryId(mock)); // logs '04213'
```

#### const
In some cases, your event schema might have a static value. For example, the Places Entry Schema has a constant value of `com.adobe.eventsource.responsecontent` for its `ACPExtensionEventSource`.

Providing a `const` value will add an `isMatch` function, a `matcher` constant, and static constants for each value. For example:

```
import { core, placesEntry } from '@adobe/griffon-toolkit';

const mock = placesEntry.mock();
console.log(placesEntry.isMatch(mock)); // true
console.log(core.match(placesEntry.matcher, mock)); // true
console.log(placesEntry.EVENT_SOURCE); // com.adobe.eventsource.responsecontent
```

#### match
This is an optional keyword that can be added to a property. This will tell the autogenerator to use this property as a matcher, even if it isn't a const value.

#### inherit
`inherit` is a flag that signals that this property is inherited from a parent object. It tells our code generation not to export getters for this object. The getters will come from the inherited class.

## Inheritance
Generally, when writing an event schema, we will be inheriting from a parent schema.

### Event
These are generally simple events or new base events that you want inherited from. To inherit from the Root structure, use the following:
```
"allOf": [{ "$ref": "http://griffon.adobe.com/schemas/event" }],
```

### AEPMobile
These are events that originate from the AEP-SDK (mobile). To inherit from the AEP Mobile SDK structure, use the following:
```
"allOf": [{ "$ref": "http://griffon.adobe.com/schemas/aepMobile" }],
```

## Event Template
The following is a simple template that inherits from AEP and sets a couple constants and defines a `size` property:
```
{
  "$id": "http://griffon.adobe.com/schemas/template",
  "shortDesc": "Template Event",
  "allOf": [{ "$ref": "http://griffon.adobe.com/schemas/aepMobile" }],
  "type": "object",
  "properties": {
    "payload": {
      "inherit": true,
      "type": "object",
      "properties": {
        "ACPExtensionEventData": {
          "inherit": true,
          "alias": "data",
          "type": "object",
          "properties": {
            "size": {
              "type": "string",
              "description": "The size of shirt the user ordered",
            }
          },
          "required": [
            "size"
          ]
        },
        "ACPExtensionEventSource": {
          "inherit": true,
          "const": "com.adobe.eventsource.responsecontent"
        },
        "ACPExtensionEventType": {
          "inherit": true,
          "const": "com.adobe.eventType.template"
        }
      },
      "required": [
        "ACPExtensionEventData"
      ]
    }
  }
}
```
