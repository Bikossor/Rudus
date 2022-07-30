import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match a given regex.
 * @param searchString
 * @see https://rudus.pages.dev/docs/api/parsers/regex
 */
export const regex = (searchString: RegExp) =>
  new Parser((state: ParserState): ParserState => {
    const [fullMatch] = searchString.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `Failed to match regex ${searchString.toString()} at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
  });
