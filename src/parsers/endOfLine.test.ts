import { endOfLine } from "./endOfLine";
import { ParserState } from "../ParserState";

describe("endOfLine", () => {
  test("Parse a matchable input", () => {
    const parser = endOfLine();

    const result = parser.run("\n");

    expect(result).toStrictEqual<ParserState>({
      input: "\n",
      isError: false,
      offset: 1,
      result: "<EOL>",
    });
  });

  test("Parse a not matchable input", () => {
    const parser = endOfLine();

    const result = parser.run("");

    expect(result).toStrictEqual<ParserState>({
      input: "",
      isError: true,
      errorMessage: "Failed to match end of line at offset 0",
      offset: 0,
      result: null,
    });
  });
});
