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
      errorMessage: "whitespace: failed to match whitespace /\\s+/ at offset 0",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const parser = whitespace();

    const result = parser.transformState({
      input: "incoming result",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "incoming errorMessage",
    });

    expect(result).toStrictEqual<ParserState>({
      input: "incoming result",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "incoming errorMessage",
    });
  });
});
