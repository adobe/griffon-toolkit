# Griffon-Toolkit
Griffon Toolkit is a simple library to help Project Griffon Plugin Developers build plugins. Plugins can be enabled by Adobe customers to add additional features to the Griffon UI.

### View Plugins
Plugin Views offer unique ways for end users to look at their Griffon Sessions. They often provide unique ways of filtering events, a simpler interface for viewing event details, and may event connect to external services to provide more details about an event.

### Validation Plugins
Validation Plugins are scripts that can be run against a Griffon Session's event list to perform validations. Like Plugin Views, these can be enabled in various plugins to help give users insights into the overall health of their application.

## Key Concepts

### Events
The most common construct in Project Griffon is an event. All events inherit from a [root structure](https://git.corp.adobe.com/pages/dms-mobile/griffon-toolkit/root.html), but will have additional data inside the event's `payload`.

### Annotations
Once an event is captured by Project Griffon, it is static, meaning it won't change.
[Annotations](https://git.corp.adobe.com/pages/dms-mobile/griffon-toolkit/annotation.html) are a way for Plugin Developers to add additional data about an event. This might be to add notes, flags, or even data from external sources.

For example, the Screenshot Plugin uses Annotations to add a name to a screenshot. The Analytics Plugin uses Annotations to store post processing information about an Analytics event.

### Matchers
Under the hood, the Project Griffon Toolkit uses [JMESPath](https://jmespath.org/specification.html) to find and filter events and other objects. Many of the Toolkit definitions will provide matchers that can be used to do this.

## Getting Started
Install the toolkit:
```
npm install --save @adobe/griffon-toolkit
```

The toolkit is organized into namespaces. There is one package for each event that is registered in the toolkit as well as additional libraries like `core`. These namespaces can be imported like so:

```
import { placesEntry ) from '@adobe/griffon-toolkit';

const event = {
  ...
};

if (entry.isMatch(event)) { console.log("It's a match!"); }
```

## Contributing
Contributions are welcomed! Read the [Contributing Guide](CONTRIBUTING.md) for more information.
