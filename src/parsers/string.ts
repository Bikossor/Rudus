import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match a given string.
 * @param searchString
 * @see https://rudus.pages.dev/api/parsers/string
 */
export const string = (searchString: string, name = "string") =>
  new Parser(state => {
    if (state.isError) return state;

    const matched = state.input.slice(state.offset).startsWith(searchString);

    if (!matched)
      return updateParserError(
        state,
        `${name}: failed to match string ${searchString} at offset ${state.offset}`,
      );

    return updateParserState(state, state.offset + searchString.length, searchString);
  }, name);
