# regex

Tries to match a given regex.

:::info
Available since: `v1.0.0-alpha.1`
:::

## Type declaration

```ts
const regex: (searchString: RegExp) => Parser;
```

## Example

In this example we are going to parse the strings `"Hello"` and `"Hallo"` using the same parser.

```ts
import { regex, sequenceOf, whitespace } from "rudus";

const regexParser = regex(/H[ae]llo/);
const parser = sequenceOf([regexParser(), whitespace(), regexParser()]);

const result = parser.run(`Hello Hallo`);
```

The `result` of the parser above will be:

```json
{
  "input": "Hello World",
  "isError": false,
  "offset": 11,
  "result": ["Hello", " ", "Hallo"]
}
```
