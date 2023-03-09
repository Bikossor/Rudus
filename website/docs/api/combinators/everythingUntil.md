# everythingUntil

Tries to match a given `inner` surrounded by a given `outerLeft` and `outerRight`. The `outerRight` parser is optional and defaults to `outerLeft`.

:::info
Available since: `v1.0.0-alpha.12`
:::

## Type declaration

```ts
const everythingUntil: (separator: Parser) => (value: Parser) => Parser;
```

## Example

In this example we are going to parse the string `"Hello"` everythingUntil braces.

```ts
import { everythingUntil, string, sequenceOf, regex } from "rudus";

const everythingUntilSemicolon = everythingUntil(string(";"));

const parser = everythingUntilSemicolon(sequenceOf([regex(/[a-z]+/), regex(/[0-9]+/)]));

const result = parser.run("HelloWorld1337;");
```

The `result` of the parser above will be:

```json
{
  "input": "HelloWorld1337;",
  "isError": false,
  "offset": 15,
  "result": ["HelloWorld", "1337"]
}
```
