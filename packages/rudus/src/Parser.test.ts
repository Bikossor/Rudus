import { describe, expect, it } from "vitest";
import { many1 } from "./combinators";
import { string } from "./parsers";
import { ParserState } from "./ParserState";

describe("Parser", () => {
  it("should map a single parser as expected", () => {
    const parser = many1(string("Hello")).map(state => [state.result, "World"]);

    const result = parser.run("HelloHello");

    expect(result).toStrictEqual<ParserState>({
      input: "HelloHello",
      isError: false,
      offset: 10,
      result: [["Hello", "Hello"], "World"],
    });
  });
});
