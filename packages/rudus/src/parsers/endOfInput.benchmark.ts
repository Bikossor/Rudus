import { bench, describe } from "vitest";
import { endOfInput } from "./endOfInput";

describe("endOfInput benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = endOfInput();

    parser.run("");
  });

  bench("Parse a not matchable input", () => {
    const parser = endOfInput();

    parser.run("Hello World!");
  });
});
