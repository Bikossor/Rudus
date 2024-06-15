import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match a given number.
 * @param searchString
 * @see https://rudus.pages.dev/api/parsers/number
 */
export const number = (searchString: number, name = "number") =>
  new Parser(state => {
    if (state.isError) return state;

    const asString = searchString.toString();
    const matched = state.input.slice(state.offset).startsWith(asString);

    if (!matched) {
      return updateParserError(
        state,
        `${name}: failed to match number ${searchString} at offset ${state.offset}`,
      );
    }

    return updateParserState(
      state,
      state.offset + searchString.toString().length,
      searchString.toString(),
    );
  }, name);
