import { bench, describe } from "vitest";
import { string, whitespace } from "../parsers";
import { sequenceOf } from "./index";

describe("sequenceOf benchmark", () => {
  bench("Parse a matchable input", () => {
    const parser = sequenceOf([string("Hello"), whitespace(), string("world")]);

    parser.run("Hello world");
  });

  bench("Parse a not matchable input", () => {
    const parser = sequenceOf([string("Hello"), whitespace(), string("world")]);

    parser.run("Helloworld");
  });
});
