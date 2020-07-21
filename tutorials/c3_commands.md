### Generate Content
Griffon Toolkit will auto-generate content from all the provided [schemas](https://git.corp.adobe.com/pages/dms-mobile/griffon-toolkit/tutorial-schemas.html). A source file is generated in [src](https://git.corp.adobe.com/dms-mobile/griffon-toolkit/blob/master/src/) with the same name as the schema file.

We then generate documentation based off of the new source code. To genearate and generate the docs, call:
```
npm run generate
```

You may also run these individually:
```
npm run generate-code
npm run doc
```

### Lint
Our lint rules are derived from [Airbnb's Lint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

To run the linter, run:
```
npm run lint
```

### Test
We use [Jest](https://jestjs.io/) as our test suite. Tests can be run like:

```
npm run test
```

Coverage can be run like:

```
npm run coverage
```

Since the majority of the code is auto generated, we don't require 100% test coverage. In general, the generator and any non-generated classes ([core](https://git.corp.adobe.com/dms-mobile/griffon-toolkit/blob/master/src/core.js) for example) should be fully tested.


### Build
The build process will run [Babel](https://babeljs.io/) on all the files in [src](https://git.corp.adobe.com/dms-mobile/griffon-toolkit/blob/master/src/) and export them in `dist`. It also will generate an [index.js]((https://git.corp.adobe.com/dms-mobile/griffon-toolkit/blob/master/src/index.js) file that exports all the namespaces.

To build, run:
```
npm run build
```
