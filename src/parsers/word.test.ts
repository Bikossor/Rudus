import { describe, test, expect, it } from "vitest";
import { word } from "./word";
import { ParserState } from "../ParserState";

describe("word", () => {
  test("Parse a matchable input", () => {
    const parser = word();

    const result = parser.run("Hello");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello",
      isError: false,
      offset: 5,
      result: "Hello",
    });
  });

  test("Parse a not matchable input", () => {
    const parser = word();

    const result = parser.run(" ");

    expect(result).toStrictEqual<ParserState>({
      input: " ",
      isError: true,
      errorMessage: "word: failed to match word /\\w+/ at offset 0",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const parser = word();

    const result = parser.transformState({
      input: "incoming input",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "incoming errorMessage",
    });

    expect(result).toStrictEqual<ParserState>({
      input: "incoming input",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "incoming errorMessage",
    });
  });
});
