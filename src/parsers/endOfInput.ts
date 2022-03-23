import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserResult } from "../ParserState";

/**
 * Checks if there is nothing left to parse otherwise it fails.
 */
export const endOfInput = () =>
  new Parser((state: ParserState): ParserState => {
    if (state.input.slice(state.offset) !== "") {
      return updateParserError(
        state,
        `Failed to match an end of input at offset ${state.offset}`,
      );
    }

    return updateParserResult(state, null);
  });
