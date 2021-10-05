import { string } from "../parser/string";
import { ParserState } from "../ParserState";

describe('string', () => {
  test('Parse a matchable input', () => {
    const parser = string('Hello');

    const result = parser.run('Hello');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello',
      isError: false,
      offset: 5,
      result: 'Hello',
    })
  });

  test('Parse a not matchable input', () => {
    const parser = string('Hello');

    const result = parser.run('World');

    expect(result).toStrictEqual<ParserState>({
      input: 'World',
      isError: true,
      errorMessage: 'Failed to match string Hello at offset 0',
      offset: 0,
      result: null,
    })
  });
});
