# between

Tries to match a given `inner` surrounded by a given `outerLeft` and `outerRight`. The `outerRight` parser is optional and defaults to `outerLeft`.

:::info
Available since: `v1.0.0-alpha.4`
:::

## Type declaration

```ts
const between: (outerLeft: Parser, outerRight?: Parser) => (inner: Parser) => Parser;
```

## Example

In this example we are going to parse the string `"Hello"` between braces.

```ts
import { between, string } from "rudus";

const betweenBraces = between(string("{"), string("}"));

const parser = betweenBraces(string("Hello"));

const result = parser.run("{Hello}");
```

The `result` of the parser above will be:

```json
{
  "input": "{Hello}",
  "isError": false,
  "offset": 7,
  "result": ["{", "Hello", "}"]
}
```
