import { number } from "./number";
import { ParserState } from "../ParserState";

describe('number', () => {
  test('Parse a matchable input', () => {
    const parser = number(2011);

    const result = parser.run('2011');

    expect(result).toStrictEqual<ParserState>({
      input: '2011',
      isError: false,
      offset: 4,
      result: '2011',
    })
  });

  test('Parse a not matchable input', () => {
    const parser = number(2011);

    const result = parser.run('4022');

    expect(result).toStrictEqual<ParserState>({
      input: '4022',
      isError: true,
      errorMessage: 'Failed to match number 2011 at offset 0',
      offset: 0,
      result: null,
    })
  });
});
