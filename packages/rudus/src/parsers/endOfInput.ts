import { Parser } from "../Parser";
import { updateParserError, updateParserResult } from "../ParserState";

/**
 * Checks if there is nothing left to parse otherwise it fails.
 * @see https://rudus.pages.dev/api/parsers/endOfInput
 */
export const endOfInput = (name = "endOfInput") =>
  new Parser(state => {
    if (state.isError) return state;

    if (state.input.slice(state.offset) !== "") {
      return updateParserError(
        state,
        `${name}: failed to match an end of input at offset ${state.offset}`,
      );
    }

    return updateParserResult(state, null);
  }, name);
