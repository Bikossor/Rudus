import { Parser } from "../Parser";
import { updateParserError, updateParserResult } from "../ParserState";

/**
 * Checks if there is nothing left to parse otherwise it fails.
 * @see https://rudus.pages.dev/docs/api/parsers/endOfInput
 */
export const endOfInput = () =>
  new Parser(state => {
    if (state.input.slice(state.offset) !== "") {
      return updateParserError(
        state,
        `Failed to match an end of input at offset ${state.offset}`,
      );
    }

    return updateParserResult(state, null);
  });
