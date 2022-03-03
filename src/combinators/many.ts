import { Parser } from "../Parser";
import { ParserStateResult } from "../ParserStateResult";
import { ParserState, updateParserResult } from "../ParserState";

/**
 * Accepts a single parser, which may match zero or infinite times.
 * @param parser
 */
export const many = (parser: Parser) =>
  new Parser((state: ParserState): ParserState => {
    const results: Array<ParserStateResult> = [];
    let nextState: ParserState = state;
    let done = false;

    while (!done) {
      const testState = parser.transformState(nextState);

      if (!testState.isError) {
        results.push(testState.result);
        nextState = testState;
      } else {
        done = true;
      }
    }

    return updateParserResult(nextState, results);
  });
