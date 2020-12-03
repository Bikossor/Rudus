import { Parser } from "../Parser";
import { ParserState, updateParserResult, updateParserError } from "../ParserState";

export const many1 = (parser: Parser) => new Parser((state: ParserState): ParserState => {
  let results: Array<string> = [];
  let nextState: ParserState = state;
  let done = false;

  while(!done) {
    let testState = parser.transformState(nextState);

    if (!testState.isError) {
      results.push(testState.result as string);
      nextState = testState;
    } else {
      done = true;
    }
  }

  if (!results.length) {
    return updateParserError(state, `many1: Failed to match at least once at offset ${state.offset}`);
  }

  return updateParserResult(nextState, results);
});
