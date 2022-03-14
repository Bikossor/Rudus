import { Parser } from "../Parser";
import { ParserStateResult } from "../ParserStateResult";
import { ParserState, updateParserResult } from "../ParserState";

/**
 * Accepts a single parser, which may match zero or infinite times.
 * @param parser
 */
export const many = (parser: Parser) =>
  new Parser((state: ParserState): ParserState => {
    if (state.isError) return state;

    const results: Array<ParserStateResult> = [];
    let nextState: ParserState = state;

    while (true) {
      const testState = parser.transformState(nextState);

      if (!testState.isError) {
        results.push(testState.result);
        nextState = testState;

        if (nextState.offset >= nextState.input.length) {
          break;
        }
      } else {
        break;
      }
    }

    return updateParserResult(nextState, results);
  });
