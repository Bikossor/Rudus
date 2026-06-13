import { describe, test, expect, it } from "vitest";
import { string } from "./string";
import { ParserState } from "../ParserState";

describe("string", () => {
  test("Parse a matchable input", () => {
    const parser = string("Hello");

    const result = parser.run("Hello");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello",
      isError: false,
      offset: 5,
      result: "Hello",
    });
  });

  test("Parse a not matchable input", () => {
    const parser = string("Hello");

    const result = parser.run("World");

    expect(result).toStrictEqual<ParserState>({
      input: "World",
      isError: true,
      errorMessage: "string: failed to match string Hello at offset 0",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const parser = string("Hello");

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
