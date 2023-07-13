import { describe, test, expect, it } from "vitest";
import { anyOf, many } from "./";
import { string } from "../parsers";
import { ParserState } from "../ParserState";

describe("anyOf", () => {
  test("Parse a matchable input", () => {
    const parser = anyOf([string("Hello"), string("World")]);

    const result = parser.run("Hello");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello",
      isError: false,
      offset: 5,
      result: "Hello",
    });
  });

  test("Parse a matchable input (many)", () => {
    const parser = many(anyOf([string("Hello"), string("World")]));

    const result = parser.run("HelloWorldHelloWorldHelloWorld");

    expect(result).toStrictEqual<ParserState>({
      input: "HelloWorldHelloWorldHelloWorld",
      isError: false,
      offset: 30,
      result: ["Hello", "World", "Hello", "World", "Hello", "World"],
    });
  });

  test("Parse a not matchable input (no error)", () => {
    const parser = anyOf([string("Hello"), string("World")]);

    const result = parser.run("Test");

    expect(result).toStrictEqual<ParserState>({
      input: "Test",
      isError: true,
      errorMessage: "anyOf: unable to match any given parser",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const parser = anyOf([string("Hello"), string("World")]);

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
