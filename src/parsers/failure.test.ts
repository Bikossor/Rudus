import { describe, expect, it } from "vitest";
import { ParserState } from "../ParserState";
import { failure } from "../parsers";

describe("failure", () => {
  it("should not override any previous error message", () => {
    const parser = failure("Something failed!");
    const previousState: ParserState = {
      input: "World",
      isError: true,
      offset: 0,
      result: null,
      errorMessage: "Something previously failed!",
    };

    const result = parser.transformState(previousState);

    expect(result).toStrictEqual<ParserState>({
      input: "World",
      isError: true,
      errorMessage: "Something previously failed!",
      offset: 0,
      result: null,
    });
  });

  it("should return the given error message when previously nothing failed", () => {
    const parser = failure("Something failed!");
    const previousState: ParserState = {
      input: "Hello ",
      isError: false,
      offset: 6,
      result: ["Hello", " "],
    };

    const result = parser.transformState(previousState);

    expect(result).toStrictEqual<ParserState>({
      input: "Hello ",
      isError: true,
      errorMessage: "Something failed!",
      offset: 6,
      result: ["Hello", " "],
    });
  });

  it("should return an incoming error", () => {
    const parser = failure("Something failed!");

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
