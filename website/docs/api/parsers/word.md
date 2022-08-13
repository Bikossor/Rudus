# word

Tries to match one or more words (regex: `/[a-zA-Z0-9_]+/`).

:::info
Available since: `v1.0.0-alpha.1`
:::

## Type declaration

```ts
const word: () => Parser;
```

## Example

In this example we are going to parse two arbitrary words separated by a space.

```ts
import { sequenceOf, word, string } from "rudus";

const parser = sequenceOf([word(), string(" "), word()]);

const result = parser.run("Hello World");
```

The `result` of the parser above will be:

```json
{
  "input": "Hello World",
  "isError": false,
  "offset": 11,
  "result": ["Hello", " ", "World"]
}
```
