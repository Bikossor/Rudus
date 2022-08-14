# Parser

This is the base of every [parser](/docs/category/parsers) and [combinator](/docs/category/combinators). You can call these methods on any parser or combinator.

## `.run()`

This method executes your parser and returns it's `ParserState`.

### Type declaration

```ts
run(input: string): ParserState;
```

## `.map()`

This method allows you to modify the `ParserStateResult` using the `ParserState`.

### Type declaration

```ts
map(callback: (parserState: ParserState) => ParserStateResult): Parser;
```
