import { number, string } from "./";
import { sequenceOf } from "../combinators";
import { ParserState } from "../ParserState";

describe("number", () => {
  test("Parse a matchable input", () => {
    const parserString = string("Hello");
    const parserNumber = number(2011);

    const parser = sequenceOf([parserString, parserNumber]);

    const result = parser.run("Hello2011");

    expect(result).toStrictEqual<ParserState>({
      input: "Hello2011",
      isError: false,
      offset: 9,
      result: ["Hello", "2011"],
    });
  });

  test("Parse a not matchable input", () => {
    const parser = number(2011);

    const result = parser.run("4022");

    expect(result).toStrictEqual<ParserState>({
      input: "4022",
      isError: true,
      errorMessage: "Failed to match number 2011 at offset 0",
      offset: 0,
      result: null,
    });
  });

  it("should return an incoming error", () => {
    const parser = number(2011);

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
