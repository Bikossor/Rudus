# anyOf

Tries to match all `parsers` and returns the first successful one.

## Type declaration

```ts
const anyOf: (parsers: Array<Parser>) => Parser;
```

## Example

In this example we are going to parse either a `Hello` or a `World`.

```ts
import { anyOf, string } from "rudus";

const parser = anyOf([string("Hello"), string("World")]);

const result = parser.run("Hello");
```

The `result` of the parser above will be:

```json
{
  "input": "Hello",
  "isError": false,
  "offset": 5,
  "result": ["Hello"]
}
```
