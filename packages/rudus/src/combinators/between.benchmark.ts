import { bench, describe } from "vitest";
import { between } from ".";
import { string } from "../parsers";

describe("between benchmark", () => {
  bench("should successfully parse just an outerLeft", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    helloBetweenQuotes.run('"Hello"');
  });

  bench("should successfully parse an outerLeft and an outerRight", () => {
    const betweenParanthesis = between(string("("), string(")"));
    const helloBetweenParanthesis = betweenParanthesis(string("Hello"));

    helloBetweenParanthesis.run("(Hello)");
  });

  bench("should fail when the outerLeft can't be parsed", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    helloBetweenQuotes.run('Hello"');
  });

  bench("should fail when the inner can't be parsed", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    helloBetweenQuotes.run('"World"');
  });

  bench("should fail when the outerRight can't be parsed", () => {
    const betweenQuotes = between(string('"'));
    const helloBetweenQuotes = betweenQuotes(string("Hello"));

    helloBetweenQuotes.run('"Hello');
  });
});
