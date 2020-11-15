import { ParserResult } from "../ParserResult";

export const sequenceOf = (parsers: Array<any>) => (input: string): ParserResult => {
  let i = 0;
  let lastParserResult: ParserResult;
  let nextInput = input;

  do {
    lastParserResult = parsers[i](nextInput);
    nextInput = lastParserResult.nextInput;

    i++;
  } while (i < parsers.length && !lastParserResult.isError);

  return lastParserResult;
};
