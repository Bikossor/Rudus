import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match a given regex.
 * @param searchString
 * @see https://rudus.pages.dev/api/parsers/regex
 */
export const regex = (searchString: RegExp, name = "regex") =>
  new Parser(state => {
    if (state.isError) return state;

    const [fullMatch] = searchString.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `${name}: failed to match regex ${searchString.toString()} at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
  }, name);
