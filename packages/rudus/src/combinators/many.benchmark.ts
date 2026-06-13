import { bench, describe } from "vitest";
import { string } from "../parsers";
import { many } from "./many";

describe("many benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = many(string("Hello"));

    parser.run("HelloHelloHelloHelloHello");
  });

  bench("Parse a not matchable input (no error)", () => {
    const parser = many(string("Hello"));

    parser.run("WorldWorldWorldWorldWorld");
  });
});
