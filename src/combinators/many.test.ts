import { many } from "./many";
import { string } from "../parser/index";
import { ParserState } from "../ParserState";

describe("many", () => {
  test("Parse a matchable input", () => {
    const parser = many(string("Hello"));

    const result = parser.run("HelloHelloHelloHelloHello");

    expect(result).toStrictEqual<ParserState>({
      input: "HelloHelloHelloHelloHello",
      isError: false,
      offset: 25,
      result: ["Hello", "Hello", "Hello", "Hello", "Hello"],
    });
  });

  test("Parse a not matchable input (no error)", () => {
    const parser = many(string("Hello"));

    const result = parser.run("WorldWorldWorldWorldWorld");

    expect(result).toStrictEqual<ParserState>({
      input: "WorldWorldWorldWorldWorld",
      isError: false,
      offset: 0,
      result: [],
    });
  });
});
