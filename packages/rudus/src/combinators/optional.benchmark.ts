import { bench, describe } from "vitest";
import { string, whitespace } from "../parsers";
import { optional } from "./index";
import { sequenceOf } from "./sequenceOf";

describe("optional benchmark", () => {
  bench("should return null when the input is not matchable", () => {
    const optionalHello = sequenceOf([
      string("Hello"),
      optional(whitespace()),
      string("World"),
    ]);

    optionalHello.run("HelloWorld");
  });

  bench("should return the next state when the input is matchable", () => {
    const optionalHello = sequenceOf([
      string("Hello"),
      optional(whitespace()),
      string("World"),
    ]);

    optionalHello.run("Hello World");
  });
});
