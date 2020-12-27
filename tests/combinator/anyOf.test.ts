import { anyOf } from "../../src/combinators/anyOf";
import { many } from "../../src/combinators/many";
import { string } from "../../src/parser/index";
import { ParserState } from "../../src/ParserState";

describe('anyOf', () => {
  test('Parse a matchable input', () => {
    const parser = anyOf([
      string('Hello'),
      string('World'),
    ]);

    const result = parser.run('Hello');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello',
      isError: false,
      offset: 5,
      result: 'Hello',
    })
  });

  test('Parse a matchable input (many)', () => {
    const parser = many(anyOf([
      string('Hello'),
      string('World'),
    ]));

    const result = parser.run('HelloWorldHelloWorldHelloWorld');

    expect(result).toStrictEqual<ParserState>({
      input: 'HelloWorldHelloWorldHelloWorld',
      isError: false,
      offset: 30,
      result: [
        'Hello',
        'World',
        'Hello',
        'World',
        'Hello',
        'World',
      ],
    })
  });

  test('Parse a not matchable input (no error)', () => {
    const parser = anyOf([
      string('Hello'),
      string('World'),
    ]);

    const result = parser.run('Test');

    expect(result).toStrictEqual<ParserState>({
      input: 'Test',
      isError: true,
      errorMessage: 'Failed to match string Hello at offset 0',
      offset: 0,
      result: null,
    })
  });
});
