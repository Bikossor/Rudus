import { optional } from "../combinators/index";
import { string } from "../parsers";
import { ParserState } from "../ParserState";

describe("optional", () => {
  it("should return the current state when the input is not matchable", () => {
    const optionalHello = optional(string("Hello"));

    const result = optionalHello.run("");

    expect(result).toStrictEqual<ParserState>({
      input: "",
      isError: false,
      offset: 0,
      result: null,
    });
  });

  it("should return the next state when the input is matchable", () => {
    const optionalHello = optional(string("Hello"));

    const result = optionalHello.run("Hello");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello",
      isError: false,
      offset: 5,
      result: "Hello",
    });
  });
});
