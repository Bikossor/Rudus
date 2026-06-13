import { bench, describe } from "vitest";
import { string } from "../parsers";
import { many1 } from "./index";

describe("many1 benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = many1(string("Hello"));

    parser.run("HelloHelloHelloHelloHello");
  });

  bench("Parse a not matchable input (no error)", () => {
    const parser = many1(string("Hello"));

    parser.run("WorldWorldWorldWorldWorld");
  });
});
