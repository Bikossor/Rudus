# failure

Always returns a failing parser with the given `errorMessage`. Typically used inside a contextual parser.

## Type declaration

```ts
const failure: (errorMessage: string) => Parser;
```

## Example

```ts
import { sequenceOf, string, failure } from "rudus";
const parser = sequenceOf([string("Hello"), failure("Something failed!")]);

const result = parser.run("Hello");
```

The result of the parser will be:

```json
{
  "input": "Hello",
  "isError": true,
  "errorMessage": "Something failed!",
  "offset": 5,
  "result": "Hello"
}
```
