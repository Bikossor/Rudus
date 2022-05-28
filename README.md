<p align="center">
  <img src="./docs/assets/Rudus-Logo.svg" height="120px"/>
</p>

<h1 align="center">Rudus</h1>
<p align="center">Parser combinator library for TypeScript.</p>

<p align="center">
  <img src="https://github.com/Bikossor/Rudus/actions/workflows/codeql-analysis.yml/badge.svg"/>
  <img src="https://github.com/Bikossor/Rudus/actions/workflows/node.js.yml/badge.svg"/>
</p>

<p>&nbsp;</p>

## API

### Parsers

- `number`
  - Tries to match a given number
- `string`
  - Tries to match a given string
- `regex`
  - Tries to match a given regex
- `whitespace`
  - Tries to match one or more whitespaces (regex: `/[\r\n\t\f\v ]+/`)
- `word`
  - Tries to match one or more words (regex: `/[a-zA-Z0-9_]+/`)
- `endOfInput`
  - Checks if there is nothing left to parse otherwise it fails
- `endOfLine`
  - Tries to match an end of line (either `\r\n`, `\r` or `\n`)
- `lazy`
  - Takes a function that just returns a parser _(a thunk)_. This defers the evaluation of the given parser. Useful for writing recursive parsers.

### Combinators

- `sequenceOf`
  - Accepts multiple parsers, which must all match successfully in the given order otherwise it fails.
- `many`
  - Accepts a single parser, which may match zero or infinite times.
- `many1`
  - Accepts a single parser, which must match at least once or infinite times otherwise it fails.
- `separatedBy`
  - Tries to match a given `value` separated by a given `separator`
  - Only captures the `value`
- `anyOf`
  - Tries to match all `parsers` and returns the first successful one.
- `optional`
  - The given `parser` may or may not match. This combinator can not fail.
- `between`
  - Tries to match a given `inner` surrounded by a given `outerLeft` and `outerRight`. The `outerRight` parser is optional and defaults to `outerLeft`.
