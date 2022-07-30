import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match a given string.
 * @param searchString
 * @see https://rudus.pages.dev/docs/api/parsers/string
 */
export const string = (searchString: string) =>
  new Parser((state: ParserState): ParserState => {
    const matched = state.input.slice(state.offset).startsWith(searchString);

    if (!matched)
      return updateParserError(
        state,
        `Failed to match string ${searchString} at offset ${state.offset}`,
      );

    return updateParserState(state, state.offset + searchString.length, searchString);
  });
