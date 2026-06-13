import { Parser } from "../Parser";
import { updateParserError, updateParserResult } from "../ParserState";

/**
 * Tries to match all `parsers` and returns the first successful one.
 * @param parsers
 * @see https://rudus.pages.dev/api/combinators/anyOf
 */
export const anyOf = (parsers: Array<Parser>, name = "anyOf") =>
  new Parser(state => {
    if (state.isError) return state;

    for (const parser of parsers) {
      const currentState = parser.transformState(state);

      if (!currentState.isError) {
        return updateParserResult(currentState, currentState.result);
      }
    }

    return updateParserError(state, `${name}: unable to match any given parser`);
  }, name);
