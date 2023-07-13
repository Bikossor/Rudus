import { describe, test, expect, it } from "vitest";
import { sequenceOf } from "../combinators/index";
import { string, whitespace } from "../parsers";
import { ParserState } from "../ParserState";

describe("sequenceOf", () => {
  test("Parse a matchable input", () => {
    const parser = sequenceOf([string("Hello"), whitespace(), string("world")]);

    const result = parser.run("Hello world");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello world",
      isError: false,
      offset: 11,
      result: ["Hello", " ", "world"],
    });
  });

  test("Parse a not matchable input", () => {
    const parser = sequenceOf([string("Hello"), whitespace(), string("world")]);

    const result = parser.run("Helloworld");

    expect(result).toStrictEqual<ParserState>({
      input: "Helloworld",
      isError: true,
      errorMessage: "whitespace: failed to match whitespace /\\s+/ at offset 5",
      offset: 5,
      result: "Hello",
    });
  });

  it("should return an incoming error", () => {
    const parser = sequenceOf([string("Hello"), whitespace(), string("world")]);

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
