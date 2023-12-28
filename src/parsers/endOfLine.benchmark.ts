import { describe, bench } from "vitest";
import { endOfLine } from "./endOfLine";

describe("endOfLine benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = endOfLine();

    parser.run("\n");
  });

  bench("Parse a not matchable input", () => {
    const parser = endOfLine();

    parser.run("");
  });
});
