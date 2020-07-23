After [generating](https://git.corp.adobe.com/pages/dms-mobile/griffon-toolkit/tutorial-commands.html) the source code from your schema, you may need to customize your code further.

To do so, you'll want to look your generated source file for the following section:
```
/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
```

You may add custom code between these headers. If you're code should be exported, add it into the `customExports` object.

As an example, let's say we have an event that matches the [template schema](https://git.corp.adobe.com/pages/dms-mobile/griffon-toolkit/tutorial-schemas.html) we mocked on the [schema](https://git.corp.adobe.com/pages/dms-mobile/griffon-toolkit/tutorial-schemas.html) page.

We want to add a custom function that checks to see if the shirt selected in the code is a large. We could do so like:

```
/* ADD CUSTOM CONTENT BELOW */

const largeMatcher = `${path.size}==='large'`;

/**
 * Make sure to document your new function
 *
 * @function
 * @param {object} source The T-Shirt Event instance
 * @returns {boolean}
 */
const isLarge = (source) => core.match(largeMatcher, [source]).length > 0;

// additional exports should be added here:
const customExports = { isLarge };

/* END CUSTOM CONTENT */
```

Here, we make a matcher that matches a large size. Then we create a new function called `isLarge` that takes an event and returns if that event has a large size. We added this to `customExports` so others can import it.

We also want to add a unit test that confirms this behavior.
