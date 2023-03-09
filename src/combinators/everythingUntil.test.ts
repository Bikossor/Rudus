import { regex, string } from "../parsers";
import { ParserState } from "../ParserState";
import { everythingUntil, sequenceOf } from "./";

describe("everythingUntil", () => {
  it("should work :P", () => {
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

  it("should work :P", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(
      sequenceOf([regex(/[a-z]+/), regex(/[0-9]+/)]),
    );

    const result = parser.run("abcdef123");

    expect(result).toStrictEqual<ParserState>({
      errorMessage: "everythingUntil: Failed to match separator at offset 9",
      input: "abcdef123",
      isError: true,
      offset: 9,
      result: ["abcdef", "123"],
    });
  });

  it("should work :P", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(string("no"));

    const result = parser.run("yes;");

    expect(result).toStrictEqual<ParserState>({
      errorMessage: "everythingUntil: Failed to match string no at offset 0",
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
