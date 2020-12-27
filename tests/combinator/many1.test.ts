import { many1 } from "../../src/combinators/many1";
import { string } from "../../src/parser/index";
import { ParserState } from "../../src/ParserState";

describe('many1', () => {
  test('Parse a matchable input', () => {
    const parser = many1(
      string('Hello')
    );

    const result = parser.run('HelloHelloHelloHelloHello');

    expect(result).toStrictEqual<ParserState>({
      input: 'HelloHelloHelloHelloHello',
      isError: false,
      offset: 25,
      result: [
        'Hello',
        'Hello',
        'Hello',
        'Hello',
        'Hello',
      ],
    })
  });

  test('Parse a not matchable input (no error)', () => {
    const parser = many1(
      string('Hello')
    );

    const result = parser.run('WorldWorldWorldWorldWorld');

    expect(result).toStrictEqual<ParserState>({
      input: 'WorldWorldWorldWorldWorld',
      isError: true,
      errorMessage: 'many1: Failed to match at least once at offset 0',
      offset: 0,
      result: null,
    })
  });
});
