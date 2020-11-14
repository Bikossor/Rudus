import { ParserResult } from "../ParserResult";

export const sequenceOf = (parsers: Array<any>) => (input: string) => {
  const results: Array<ParserResult> = [];
  let i = 0;
  let lastParserResult: ParserResult;
  let nextInput = input;

  do {
    lastParserResult = parsers[i](nextInput);
    nextInput = lastParserResult.nextInput;

    results.push(lastParserResult);

    i++;
  } while (i < parsers.length && !lastParserResult.isError);

  return results;
};
