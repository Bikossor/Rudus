import { endOfInput } from "./endOfInput";
import { ParserState } from "../ParserState";

describe("endOfInput", () => {
  test("Parse a matchable input", () => {
    const parser = endOfInput();

    const result = parser.run("");

    expect(result).toStrictEqual<ParserState>({
      input: "",
      isError: false,
      offset: 0,
      result: null,
    });
  });

  test("Parse a not matchable input", () => {
    const parser = endOfInput();

    const result = parser.run("Hello World!");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello World!",
      isError: true,
      errorMessage: "Failed to match an end of input at offset 0",
      offset: 0,
      result: null,
    });
  });
});