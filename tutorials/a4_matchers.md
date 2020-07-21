In Project Griffon, we're constantly dealing with large arrays of events. We perform operations on these events like finding, filtering, validating, modifying, normalizing, appending, etc.

Under the hood, the Griffon Toolkit uses [JMESPath](https://jmespath.org/specification.html) to do these operations. They provide a lot of [https://jmespath.org/examples.html](examples) to get you started. Below, we'll cover some basic recipes that Griffon developers will frequently come across.

### simple event matching

The {@link kit} namespace includes the {@link kit.match} method to match against a list of events and the {@link kit.isMatch} method to match against a single event:

```
import { kit, placesEntry, placesExit } from '@adobe/griffon-toolkit-aep-mobile';

const entry = placesEntry.mock();
const exit = placesExit.mock();

console.log(kit.match(placesExit.matcher, [entry, exit])); // [exit]
console.log(kit.isMatch(placesExit.matcher, exit)); // true
console.log(kit.isMatch(placesExit.matcher, entry)); // false
```

Most Griffon Toolkit event namespaces will provide a `matcher` as well as a `isMatch` function:

```
// using the isMatch method
console.log(placesEntry.isMatch(entry)); // true
console.log(placesEntry.isMatch(exit)); // false
```

### combining matchers
The {@link kit} namespace exposes several methods for combining different matchers.

```
import { kit, placesEntry, placesExit, aepMobile } from '@adobe/griffon-toolkit-aep-mobile';

const entry = placesEntry.mock();
const exit = placesExit.mock();
const aep = aep.mock();

// only gets entries or exits
const isEntryOrExit = kit.match(
  kit.combineAny([entry.matcher, exit.matcher])
);
console.log(isEntryOrExit([entry, exit, aep])); // [entry, exit]

// create matcher that checks if event name exists:
const nameExists = aepMobile.path.eventName;
const entryWithName = placesEntry.mock({
  [placesEntry.path.eventName]: 'Got a name'
});

// only gets entries with a name
const isEntryWithName = kit.match(
  kit.combineAll([entry.matcher, nameExists])
);
console.log(isEntryWithName([entry, exit, entryWithName])); // [entryWithName]

// only gets entries without a name
const isEntryWithoutName = kit.match(
  kit.combineNone([entry.matcher, nameExists])
);

console.log(isEntryWithoutName([entry, exit, entryWithName])); // [entry]
```

### applying modifications

The {@link kit.modify} function works the similar to kit.match, but it takes a modifications object that will get applied to any matching data.

```
import { kit, placesEntry, placesExit } from '@adobe/griffon-toolkit-aep-mobile';

const entry = placesEntry.mock();
const exit = placesExit.mock();
const makeRed = kit.modify({ color: 'red' });

// resulting object contains two items. The first has the color: red
// applied to it. The exit object is unchanged.
console.log(
  makeRed(placesEntry.matcher, [entry, exit])
);
```

You can apply several modifications at once with {@link kit.modifyBulk}:

```
import { kit, placesEntry, placesExit } from '@adobe/griffon-toolkit-aep-mobile';

const entry = placesEntry.mock();
const exit = placesExit.mock();
const makeRedOrBlue = kit.modifyBulk([
  { matcher: placesEntry.matcher, { color: 'red' },
  { matcher: placesExit.matcher, { color: 'blue' }
]);

// resulting object contains two items. The first has the color: red
// applied to it. The second has the color: blue.
console.log(
  makeRedOrBlue(placesEntry.matcher, [entry, exit])
);
```
