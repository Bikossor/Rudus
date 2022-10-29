import { anyOf, many, separatedBy } from "../combinators";
import { lazy, regex, string } from ".";
import { ParserState } from "../ParserState";

describe("lazy", () => {
  test("Parse a matchable input", () => {
    const value = lazy(() => anyOf([numbers, strings, matchArray]));

    const commaSeparated = separatedBy(regex(/\,/));
    const commaSeparatedValue = commaSeparated(value);

    const numbers = regex(/[0-9]+/);
    const strings = regex(/[A-Z]+/);
    const matchArray = many(commaSeparatedValue);

    const result = matchArray.run("12,34,HELLO,");

    expect(result).toStrictEqual<ParserState>({
      input: "12,34,HELLO,",
      isError: false,
      offset: 12,
      result: ["12", "34", "HELLO"],
    });
  });

  it("should return an incoming error", () => {
    const parser = lazy(() => anyOf([string("1"), string("2")]));

    const result = parser.transformState({
      input: "HelloHelloHelloHello",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "testing",
    });

    expect(result).toStrictEqual<ParserState>({
      input: "HelloHelloHelloHello",
      isError: true,
      offset: 10,
      result: "",
      errorMessage: "testing",
    });
  });
});
