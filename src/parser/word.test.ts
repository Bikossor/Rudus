import { word } from "../parser/index";
import { ParserState } from "../ParserState";

describe('word', () => {
  test('Parse a matchable input', () => {
    const parser = word();

    const result = parser.run('Hello');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello',
      isError: false,
      offset: 5,
      result: 'Hello',
    })
  });

  test('Parse a not matchable input', () => {
    const parser = word();

    const result = parser.run(' ');

    expect(result).toStrictEqual<ParserState>({
      input: ' ',
      isError: true,
      errorMessage: 'Failed to match word /\\w+/ at offset 0',
      offset: 0,
      result: null,
    })
  });
});
