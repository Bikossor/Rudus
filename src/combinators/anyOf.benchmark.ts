import { bench, describe } from "vitest";
import { anyOf, many } from ".";
import { string } from "../parsers";

describe("anyOf benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = anyOf([string("Hello"), string("World")]);

    parser.run("Hello");
  });

  bench("Parse a matchable input (many)", () => {
    const parser = many(anyOf([string("Hello"), string("World")]));

    parser.run("HelloWorldHelloWorldHelloWorld");
  });

  bench("Parse a not matchable input (no error)", () => {
    const parser = anyOf([string("Hello"), string("World")]);

    parser.run("Test");
  });
});
