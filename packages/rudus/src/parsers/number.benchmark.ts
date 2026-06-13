import { bench, describe } from "vitest";
import { number, string } from ".";
import { sequenceOf } from "../combinators";

describe("number benchmark", () => {
  bench("Parse a matchable input", () => {
    const parserString = string("Hello");
    const parserNumber = number(2011);

    const parser = sequenceOf([parserString, parserNumber]);

    parser.run("Hello2011");
  });

  bench("Parse a not matchable input", () => {
    const parser = number(2011);

    parser.run("4022");
  });
});
