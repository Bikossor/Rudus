# whitespace

Tries to match one or more whitespaces (regex: `/[\r\n\t\f\v ]+/`).

## Type declaration

```ts
const whitespace: () => Parser;
```

## Example

In this example we are going to parse a [newline](https://en.wikipedia.org/wiki/Newline) (`\n`), an arbitrary word followed by another newline.

```ts
import { sequenceOf, whitespace, word } from "rudus";

const parser = sequenceOf([whitespace(), word(), whitespace()]);

const result = parser.run(`
Hello
`);
```

The `result` of the parser above will be:

```json
{
  "input": "
Hello
",
  "isError": false,
  "offset": 7,
  "result": ["
", "Hello", "
"]
}
```
