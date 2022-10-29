import { between } from "./";
import { string } from "../parsers";
import { ParserState } from "../ParserState";

describe("between", () => {
  it("should successfully parse just an outerLeft", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    const result = helloBetweenQuotes.run('"Hello"');

    expect(result).toStrictEqual<ParserState>({
      input: '"Hello"',
      isError: false,
      offset: 7,
      result: ['"', "Hello", '"'],
    });
  });

  it("should successfully parse an outerLeft and an outerRight", () => {
    const betweenParanthesis = between(string("("), string(")"));
    const helloBetweenParanthesis = betweenParanthesis(string("Hello"));

    const result = helloBetweenParanthesis.run("(Hello)");

    expect(result).toStrictEqual<ParserState>({
      input: "(Hello)",
      isError: false,
      offset: 7,
      result: ["(", "Hello", ")"],
    });
  });

  it("should fail when the outerLeft can't be parsed", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    const result = helloBetweenQuotes.run('Hello"');

    expect(result).toStrictEqual<ParserState>({
      input: 'Hello"',
      isError: true,
      offset: 0,
      result: null,
      errorMessage: "between: outerLeft parser failed to match at offset 0",
    });
  });

  it("should fail when the inner can't be parsed", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    const result = helloBetweenQuotes.run('"World"');

    expect(result).toStrictEqual<ParserState>({
      input: '"World"',
      isError: true,
      offset: 0,
      result: null,
      errorMessage: "between: inner parser failed to match at offset 1",
    });
  });

  it("should fail when the outerRight can't be parsed", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    const result = helloBetweenQuotes.run('"Hello');

    expect(result).toStrictEqual<ParserState>({
      input: '"Hello',
      isError: true,
      offset: 0,
      result: null,
      errorMessage: "between: outerRight parser failed to match at offset 6",
    });
  });

  it("should return an incoming error", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    const result = helloBetweenQuotes.transformState({
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
