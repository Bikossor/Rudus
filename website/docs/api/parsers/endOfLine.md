# endOfLine

Tries to match an end of line (either `\r\n`, `\r` or `\n`)

## Type declaration

```ts
const endOfLine: () => Parser;
```

## Example

In this example we are going to parser the string `"Hello"` followed by a newline.

```ts
import { endOfLine, sequenceOf, string } from "rudus";

const parser = sequenceOf([string("Hello"), endOfLine()]);

const result = parser.run(`Hello
`);
```

The `result` of the parser above will be:

```json
{
  "input": "Hello
",
  "isError": false,
  "offset": 6,
  "result": ["Hello", "<EOL>"]
}
```
