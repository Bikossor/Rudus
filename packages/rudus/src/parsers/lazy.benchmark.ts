import { bench, describe } from "vitest";
import { lazy, regex } from ".";
import { anyOf, many, separatedBy } from "../combinators";

describe("lazy benchmark", () => {
  bench("Parse a matchable input", () => {
    const value = lazy(() => anyOf([numbers, strings, matchArray]));

    const commaSeparated = separatedBy(regex(/\,/));
    const commaSeparatedValue = commaSeparated(value);

    const numbers = regex(/[0-9]+/);
    const strings = regex(/[A-Z]+/);
    const matchArray = many(commaSeparatedValue);

    matchArray.run("12,34,HELLO,");
  });
});
