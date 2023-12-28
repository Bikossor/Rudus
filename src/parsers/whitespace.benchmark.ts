import { bench, describe } from "vitest";
import { whitespace } from "./whitespace";

describe("whitespace benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = whitespace();

    parser.run(" ");
  });

  bench("Parse a not matchable input", () => {
    const parser = whitespace();

    parser.run("World");
  });
});
