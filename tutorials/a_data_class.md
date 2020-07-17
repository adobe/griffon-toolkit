Griffon Toolkit generates a code file for each schema that is registered. Each of these Data Classes are fully documented and can have custom functionality added. But they will each have some similar features.

## Metadata
Some custom metadata is used in the schema and can be accessed through the Data Class.

### label
`label` can be used to get a human-readable label that can be used in UIs when describing the Class:

```
import { placesEntry } from '@adobe/griffon-toolkit';
console.log(placesEntry.label); // Places Entry Event
```

## Paths
The auto-generated Data Classes can have complex structures including nested data. Each Data Class provides a `path` object that lists each known path for the Class and any it inherits. For example:

```
import { placesEntry } from '@adobe/griffon-toolkit';
console.log(placesEntry.path.latitude); // payload.ACPExtensionEventData.triggeringregion.latitude
console.log(placesEntry.path.eventSource); // payload.ACPExtensionEventSource
```

When writing a schema, an `alias` can be provided to make a more friendly path name or to abstract a field that might have been renamed.

## Creating Objects
Each auto-generated Data Class will have a `mock` and a `make` function to facilitate generating instances of the Data Class.

### make
`make` will auto-fill in any constant fields that required by the object. You can provide additional details to fill out this object further.

For example:
```
const mock = placesEntry.make({
  city: 'Appleton',
  state: 'WI'
});
console.log(placesEntry.get('state', entry)); // WI
```

This creates a valid Places Entry Event with the city and state filled in the correctly. You may use any aliases that are available in the `path` object for the Data Class, or you may use a path directly.

Here we use a path (`placesEntry.path.city`), an alias (`country`), and a full JMESpath (`payload.ACPExtensionEventData.triggeringregion.regionmetadata.state`).

```
const entry = placesEntry.make({
  [placesEntry.path.city]: 'Appleton',
  'payload.ACPExtensionEventData.triggeringregion.regionmetadata.state': 'WI',
  country: 'USA'
}
```

Generally, the alias is the best option though.

### mock
`mock` functions identically to `make`, except it will also fill in mock data that is specified in the Data Class's schema file. For example, in the `placeEntry` schema file, we define mocks for `name`, `longitude`, `longitude`, and others. These values can be overridden though:

```
const entry = placesEntry.mock({
  radius: 200
});

console.log(placesEntry.get('name', entry)); // Adobe
console.log(placesEntry.get('radius', entry)); // 200
```

## Getters
The auto-generated Data Classes will provide custom getters to retrieve data from them:

```
const entry = placesEntry.mock();
console.log(placesEntry.getRegionEventType(entry)); // entry
```

The Data Class also will provide a `get` function to get data using an alias or a JMESPath:

```
const entry = placesEntry.mock();
console.log(placesEntry.get('radius', entry)); // 375
console.log(placesEntry.get(placesEntry.path.name, entry)); // Adobe
```

