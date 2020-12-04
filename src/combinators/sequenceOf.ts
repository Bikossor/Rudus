import { Parser } from "../Parser";
import { ParserStateResult } from "../ParserStateResult";
import { ParserState, updateParserError, updateParserResult } from "../ParserState";

export const sequenceOf = (parsers: Array<Parser>) => new Parser((state: ParserState): ParserState => {
  let i = 0;
  let results: Array<ParserStateResult> = [];
  let nextState: ParserState = state;

  do {
    nextState = parsers[i].transformState(nextState);
    results.push(nextState.result);

    if (nextState.isError) {
      return updateParserError(nextState, nextState.errorMessage);
    }

    i++;
  } while (i < parsers.length && !nextState.isError);

  return updateParserResult(nextState, results);
});
