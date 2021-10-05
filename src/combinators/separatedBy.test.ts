import { separatedBy, many } from "../../src/combinators/index";
import { regex, word } from "../../src/parser/index";
import { ParserState } from "../../src/ParserState";

describe('separatedBy', () => {
  test('Parse a matchable input', () => {
    const parser = separatedBy(
      word(),
      regex(/\,/),
    );

    const result = parser.run('Hello,');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello,',
      isError: false,
      offset: 6,
      result: 'Hello',
    })
  });

  test('Parse many matchable inputs', () => {
    const parser = many(
      separatedBy(
        word(),
        regex(/\,/),
      )
    );

    const result = parser.run('Hello,world,this,is,a,test,');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello,world,this,is,a,test,',
      isError: false,
      offset: 27,
      result: [
        'Hello',
        'world',
        'this',
        'is',
        'a',
        'test',
      ],
    })
  });

  test('Parse a not matchable input (no separator)', () => {
    const parser = separatedBy(
      word(),
      regex(/\,/),
    );

    const result = parser.run('Hello');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello',
      isError: true,
      errorMessage: 'separatedBy: separator parser failed to match at offset 5',
      offset: 0,
      result: null,
    })
  });

  test('Parse a not matchable input (no separator; wrong value)', () => {
    const parser = separatedBy(
      regex(/[a-zA-Z]+/),
      regex(/\,/),
    );

    const result = parser.run('2011');

    expect(result).toStrictEqual<ParserState>({
      input: '2011',
      isError: true,
      errorMessage: 'separatedBy: value parser failed to match at offset 0',
      offset: 0,
      result: null,
    })
  });

  test('Parse a not matchable input (wrong value)', () => {
    const parser = separatedBy(
      regex(/[a-zA-Z]+/),
      regex(/\,/),
    );

    const result = parser.run('2011,');

    expect(result).toStrictEqual<ParserState>({
      input: '2011,',
      isError: true,
      errorMessage: 'separatedBy: value parser failed to match at offset 0',
      offset: 0,
      result: null,
    })
  });
});
