import { describe, expect, it } from "vitest";
import { optional } from "../combinators/index";
import { string, whitespace } from "../parsers";
import { ParserState } from "../ParserState";
import { sequenceOf } from "./sequenceOf";

describe("optional", () => {
  it("should return null when the input is not matchable", () => {
    const optionalHello = sequenceOf([
      string("Hello"),
      optional(whitespace()),
      string("World"),
    ]);

    const resultWithoutWhitespace = optionalHello.run("HelloWorld");

    expect(resultWithoutWhitespace).toStrictEqual<ParserState>({
      input: "HelloWorld",
      isError: false,
      offset: 10,
      result: ["Hello", null, "World"],
    });
  });

  it("should return the next state when the input is matchable", () => {
    const optionalHello = sequenceOf([
      string("Hello"),
      optional(whitespace()),
      string("World"),
    ]);

    const resultWithWhitespace = optionalHello.run("Hello World");

    expect(resultWithWhitespace).toStrictEqual<ParserState>({
      input: "Hello World",
      isError: false,
      offset: 11,
      result: ["Hello", " ", "World"],
    });
  });

  it("should return an incoming error", () => {
    const optionalWhitespace = optional(whitespace());

    const result = optionalWhitespace.transformState({
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
