import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserResult } from "../ParserState";

/**
 * Tries to match all `parsers` and returns the first successful one.
 * @param parsers
 * @see https://rudus.pages.dev/docs/api/combinators/anyOf
 */
export const anyOf = (parsers: Array<Parser>) =>
  new Parser((state: ParserState): ParserState => {
    if (state.isError) return state;

    for (const parser of parsers) {
      const currentState = parser.transformState(state);

      if (!currentState.isError) {
        return updateParserResult(currentState, currentState.result);
      }
    }

    return updateParserError(state, "anyOf: unable to match any given parser");
  });
