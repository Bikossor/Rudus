# many

Accepts a single parser, which may match zero or infinite times.

:::info
Available since: `v1.0.0-alpha.1`
:::

## Type declaration

```ts
const many: (parser: Parser) => Parser;
```

## Example

In this example we are going to parse the string `"Hello"` as many times as possible.

```ts
import { many, string } from "rudus";

const parser = many(string("Hello"));

const result = parser.run("HelloHelloHello");
```

The `result` of the parser above will be:

```json
{
  "input": "HelloHelloHello",
  "isError": false,
  "offset": 15,
  "result": ["Hello", "Hello", "Hello"]
}
```
