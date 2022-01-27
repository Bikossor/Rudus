<p align="center">
  <img src="./docs/assets/Rudus-Logo.svg" height="120px"/>
</p>

<h1 align="center">Rudus</h1>
<p align="center">Parser combinator library for TypeScript.</p>

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
