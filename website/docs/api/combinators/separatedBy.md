# separatedBy

Tries to match a given `value` separated by a given `separator`.

:::info
Available since: `v1.0.0-alpha.1`
:::

## Type declaration

```ts
const separatedBy: (separator: Parser) => (value: Parser) => Parser;
```

## Example

In this example we are going to parse the string `"Hello"` separated by a comma.

```ts
import { many, separatedBy, string } from "rudus";

const commaSeparated = separatedBy(string(","));

const parser = many(commaSeparated(string("Hello")));

const result = parser.run("Hello,Hello,Hello,");
```

The `result` of the parser above will be:

```json
{
  "input": "Hello,Hello,Hello",
  "isError": false,
  "offset": 12,
  "result": ["Hello", "Hello", "Hello"]
}
```
