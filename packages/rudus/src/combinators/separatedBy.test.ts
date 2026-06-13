import { describe, test, expect, it } from "vitest";
import { separatedBy, many } from "../combinators/index";
import { regex, string, word } from "../parsers";
import { ParserState } from "../ParserState";

describe("separatedBy", () => {
  test("Parse a matchable input", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(word());

    const result = parser.run("Hello,");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello,",
      isError: false,
      offset: 6,
      result: "Hello",
    });
  });

  test("Parse many matchable inputs", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = many(commaSeparated(word()));

    const result = parser.run("Hello,world,this,is,a,test,");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello,world,this,is,a,test,",
      isError: false,
      offset: 27,
      result: ["Hello", "world", "this", "is", "a", "test"],
    });
  });

  test("Parse a not matchable input (no separator)", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(word());

    const result = parser.run("Hello");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello",
      isError: true,
      errorMessage: "separatedBy: separator parser failed to match at offset 5",
      offset: 0,
      result: null,
    });
  });

  test("Parse a not matchable input (no separator; wrong value)", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(regex(/[a-zA-Z]+/));

    const result = parser.run("2011");

    expect(result).toStrictEqual<ParserState>({
      input: "2011",
      isError: true,
      errorMessage: "separatedBy: value parser failed to match at offset 0",
      offset: 0,
      result: null,
    });
  });

  test("Parse a not matchable input (wrong value)", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(regex(/[a-zA-Z]+/));

    const result = parser.run("2011,");

    expect(result).toStrictEqual<ParserState>({
      input: "2011,",
      isError: true,
      errorMessage: "separatedBy: value parser failed to match at offset 0",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(regex(/[a-zA-Z]+/));

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
