# Quick Start

After you have installed `Rudus` you can now create a new TypeScript _(or JavaScript)_ file inside your repo, call it `parser.ts` for example and copy the example below into it:

```ts
import { string, sequenceOf, whitespace } from "rudus";

const parser = sequenceOf([string("Hello"), whitespace(), string("World")]);

const parserResult = parser.run("Hello World");

console.log(parserResult);
```

And then run that file via [`ts-node`](https://typestrong.org/ts-node/):

```bash
npx ts-node parser.ts
```

In your console you should see an output like this:

```json
{
  "input": "Hello World",
  "isError": false,
  "offset": 11,
  "result": ["Hello", " ", "World"]
}
```

Congratulations! You have just made and run your first parser which is able to parse the string `"Hello World"` with `Rudus`.
