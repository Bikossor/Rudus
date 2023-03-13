# endOfInput

Checks if there is nothing left to parse otherwise it fails.

:::info
Available since: `v1.0.0-alpha.1`
:::

## Type declaration

```ts
const endOfInput: (name?: string) => Parser;
```

## Example

In this example we are going to parser _just_ the string `"Hello"` followed by the end of input.

```ts
import { endOfInput, sequenceOf, string } from "rudus";

const parser = sequenceOf([string("Hello"), endOfInput()]);

const result = parser.run("Hello");
```

The `result` of the parser above will be:

```json
{
  "input": "Hello",
  "isError": false,
  "offset": 5,
  "result": ["Hello", null]
}
```
