# sequenceOf

Accepts multiple parsers, which must all match successfully in the given order otherwise it fails.

:::info
Available since: `v1.0.0-alpha.1`
:::

## Type declaration

```ts
const sequenceOf: (parsers: Array<Parser>) => Parser;
```

## Example

In this example we are going to parse the string `"Hello"` followed by the string `"World"`.

```ts
import { sequenceOf, string } from "rudus";

const parser = sequenceOf([string("Hello"), string("World")]);

const result = parser.run("HelloWorld");
```

The `result` of the parser above will be:

```json
{
  "input": "HelloWorld",
  "isError": false,
  "offset": 10,
  "result": ["Hello", "World"]
}
```
