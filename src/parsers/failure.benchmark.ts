import { bench, describe } from "vitest";
import { failure } from ".";
import { ParserState } from "../ParserState";

describe("failure benchmark", () => {
  bench("should not override any previous error message", () => {
    const parser = failure("Something failed!");
    const previousState: ParserState = {
      input: "World",
      isError: true,
      offset: 0,
      result: null,
      errorMessage: "Something previously failed!",
    };

    parser.transformState(previousState);
  });

  bench("should return the given error message when previously nothing failed", () => {
    const parser = failure("Something failed!");
    const previousState: ParserState = {
      input: "Hello ",
      isError: false,
      offset: 6,
      result: ["Hello", " "],
    };

    parser.transformState(previousState);
  });
});
