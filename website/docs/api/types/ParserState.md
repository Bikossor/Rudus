# ParserState

This is almost the core type of `Rudus`. Every [parser](/docs/category/parsers) and [combinator](/docs/category/combinators) takes a `ParserState` as an input and returns a new `ParserState`.

## Type declaration

```ts
type ParserState = {
  offset: number;
  input: string;
  result: ParserStateResult | null;
  isError: boolean;
  errorMessage?: string;
};
```

| Property       | Explanation                                                  |
| :------------- | :----------------------------------------------------------- |
| `offset`       | Current index at where the `input` is being parsed at        |
| `input`        | Complete string that is to be parsed                         |
| `result`       | Current results inclusive previous results                   |
| `isError`      | Whether the `ParserState` is faulty or not                   |
| `errorMessage` | Only set when `isError` is `true` otherwise it's `undefined` |
