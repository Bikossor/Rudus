import { bench, describe } from "vitest";
import { regex, word } from "../parsers";
import { many, separatedBy } from "./index";

describe("separatedBy benchmark", () => {
  bench("Parse a matchable input", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(word());

    parser.run("Hello,");
  });

  bench("Parse many matchable inputs", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = many(commaSeparated(word()));

    parser.run("Hello,world,this,is,a,test,");
  });

  bench("Parse a not matchable input (no separator)", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(word());

    parser.run("Hello");
  });

  bench("Parse a not matchable input (no separator; wrong value)", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(regex(/[a-zA-Z]+/));

    parser.run("2011");
  });

  bench("Parse a not matchable input (wrong value)", () => {
    const commaSeparated = separatedBy(regex(/\,/));
    const parser = commaSeparated(regex(/[a-zA-Z]+/));

    parser.run("2011,");
  });
});
