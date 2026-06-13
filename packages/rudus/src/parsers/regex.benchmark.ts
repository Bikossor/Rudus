import { bench, describe } from "vitest";
import { regex } from "./regex";

describe("regex benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = regex(/hello/i);

    parser.run("Hello");
  });

  bench("Parse a not matchable input", () => {
    const parser = regex(/hello/i);

    parser.run("World");
  });
});
