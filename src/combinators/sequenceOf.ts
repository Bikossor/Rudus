import { Parser } from "../Parser";
import { ParserState, updateParserResult } from "../ParserState";

export const sequenceOf = (parsers: Array<Parser>) => new Parser((state: ParserState): ParserState => {
  let i = 0;
  let results: Array<string> = [];
  let nextState: ParserState = state;

  do {
    nextState = parsers[i].transformState(nextState);
    results.push(nextState.result as string);

    if (nextState.isError) {
      return {
        ...state,
        ...nextState
      }
    }

    i++;
  } while (i < parsers.length && !nextState.isError);

  return updateParserResult(nextState, results);
});
