import { Parser } from "../Parser";
import { ParserState, updateParserResult } from "../ParserState";

export const many = (parser: Parser) => new Parser((state: ParserState): ParserState => {
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

  return updateParserResult(nextState, results);
});
