# Railgun
Parser combinator library for TypeScript

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

### Combinators
- `sequenceOf`
  - Accepts multiple parsers, which must all match successfully in the given order otherwise it fails.
- `many`
  - Accepts a single parser, which may match zero or infinite times.
- `many1`
  - Accepts a single parser, which must match at least once or infinite times otherwise it fails.
