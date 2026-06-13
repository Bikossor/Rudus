import { bench, describe } from "vitest";
import { string } from "./string";

describe("string benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = string("Hello");

    parser.run("Hello");
  });

  bench("Parse a not matchable input", () => {
    const parser = string("Hello");

    parser.run("World");
  });
});
