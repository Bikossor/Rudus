import { sequenceOf } from "../combinators/sequenceOf";
import { string, whitespace } from "../parser/index";
import { ParserState } from "../ParserState";

describe('sequenceOf', () => {
  test('Parse a matchable input', () => {
    const parser = sequenceOf([
      string('Hello'),
      whitespace(),
      string('world'),
    ]);

    const result = parser.run('Hello world');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello world',
      isError: false,
      offset: 11,
      result: [
        'Hello',
        ' ',
        'world',
      ],
    })
  });

  test('Parse a not matchable input', () => {
    const parser = sequenceOf([
      string('Hello'),
      whitespace(),
      string('world'),
    ]);

    const result = parser.run('Helloworld');

    expect(result).toStrictEqual<ParserState>({
      input: 'Helloworld',
      isError: true,
      errorMessage: 'Failed to match whitespace /\\s+/ at offset 5',
      offset: 5,
      result: 'Hello',
    })
  });
});
