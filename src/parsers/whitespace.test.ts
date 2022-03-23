import { whitespace } from "./whitespace";
import { ParserState } from "../ParserState";

describe("whitespace", () => {
  test("Parse a matchable input", () => {
    const parser = whitespace();

    const result = parser.run(" ");

    expect(result).toStrictEqual<ParserState>({
      input: " ",
      isError: false,
      offset: 1,
      result: " ",
    });
  });

  test("Parse a not matchable input", () => {
    const parser = whitespace();

    const result = parser.run("World");

    expect(result).toStrictEqual<ParserState>({
      input: "World",
      isError: true,
      errorMessage: "Failed to match whitespace /\\s+/ at offset 0",
      offset: 0,
      result: null,
    });
  });
});
