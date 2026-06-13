import { Parser } from "../Parser";
import { ParserStateResult } from "../ParserStateResult";
import { ParserState, updateParserResult, updateParserError } from "../ParserState";

/**
 * Accepts a single parser, which must match at least once or infinite times otherwise it fails.
 * @param parser
 * @see https://rudus.pages.dev/api/combinators/many1
 */
export const many1 = (parser: Parser, name = "many1") =>
  new Parser(state => {
    if (state.isError) return state;

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

    if (!results.length) {
      return updateParserError(
        state,
        `${name}: Failed to match at least once at offset ${state.offset}`,
      );
    }

    return updateParserResult(nextState, results);
  }, name);
