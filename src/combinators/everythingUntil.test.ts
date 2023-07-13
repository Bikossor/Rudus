import { describe, expect, it } from "vitest";
import { regex, string } from "../parsers";
import { ParserState } from "../ParserState";
import { everythingUntil, sequenceOf } from "./";

describe("everythingUntil", () => {
  it("should successfully match everything until a semicolon", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(
      sequenceOf([regex(/[a-z]+/), regex(/[0-9]+/)]),
    );

    const result = parser.run("abcdef123;");

    expect(result).toStrictEqual<ParserState>({
      input: "abcdef123;",
      isError: false,
      offset: 10,
      result: ["abcdef", "123"],
    });
  });

  it("should fail when the separator can not be matched", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(
      sequenceOf([regex(/[a-z]+/), regex(/[0-9]+/)]),
    );

    const result = parser.run("abcdef123");

    expect(result).toStrictEqual<ParserState>({
      errorMessage: "everythingUntil: failed to match separator at offset 9",
      input: "abcdef123",
      isError: true,
      offset: 9,
      result: ["abcdef", "123"],
    });
  });

  it("should fail when the value can not be matched", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(string("no"));

    const result = parser.run("yes;");

    expect(result).toStrictEqual<ParserState>({
      errorMessage: "everythingUntil: string: failed to match string no at offset 0",
      input: "yes;",
      isError: true,
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(string("no"));

    const result = parser.transformState({
      input: "no",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "incoming errorMessage",
    });

    expect(result).toStrictEqual<ParserState>({
      input: "no",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "incoming errorMessage",
    });
  });
});
