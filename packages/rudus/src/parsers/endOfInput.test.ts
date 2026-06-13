import { describe, test, expect, it } from "vitest";
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
      errorMessage: "endOfInput: failed to match an end of input at offset 0",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const parser = endOfInput();

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
