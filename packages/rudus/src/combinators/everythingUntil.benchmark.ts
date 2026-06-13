import { bench, describe } from "vitest";
import { everythingUntil, sequenceOf } from ".";
import { regex, string } from "../parsers";

describe("everythingUntil benchmark", () => {
  bench("should successfully match everything until a semicolon", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(
      sequenceOf([regex(/[a-z]+/), regex(/[0-9]+/)]),
    );

    parser.run("abcdef123;");
  });

  bench("should fail when the separator can not be matched", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(
      sequenceOf([regex(/[a-z]+/), regex(/[0-9]+/)]),
    );

    parser.run("abcdef123");
  });

  bench("should fail when the value can not be matched", () => {
    const everythingUntilSemicolon = everythingUntil(string(";"));

    const parser = everythingUntilSemicolon(string("no"));

    parser.run("yes;");
  });
});
