# endOfInput

Checks if there is nothing left to parse otherwise it fails.

## Type declaration

```ts
const endOfInput: () => Parser;
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
