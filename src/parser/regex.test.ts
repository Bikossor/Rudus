import { regex } from "../parser/index";
import { ParserState } from "../ParserState";

describe('regex', () => {
  test('Parse a matchable input', () => {
    const parser = regex(/hello/i);

    const result = parser.run('Hello');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello',
      isError: false,
      offset: 5,
      result: 'Hello',
    })
  });

  test('Parse a not matchable input', () => {
    const parser = regex(/hello/i);

    const result = parser.run('World');

    expect(result).toStrictEqual<ParserState>({
      input: 'World',
      isError: true,
      errorMessage: 'Failed to match regex /hello/i at offset 0',
      offset: 0,
      result: null,
    })
  });
});
