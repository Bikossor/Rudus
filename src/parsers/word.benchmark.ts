import { describe } from "node:test";
import { bench } from "vitest";
import { word } from "./word";

describe("word benchmarks", () => {
  const parser = word();

  bench("Parse a matchable input", () => {
    parser.run("Hello");
  });

  bench("Parse a not matchable input", () => {
    parser.run(" ");
  });
});
