import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match a given number.
 * @param searchString
 */
export const number = (searchString: number) => new Parser((state: ParserState): ParserState => {
  const asString = searchString.toString();
  const matched = state.input.startsWith(asString);

  if (!matched) {
    return updateParserError(state, `Failed to match number ${searchString} at offset ${state.offset}`);
  }

  return updateParserState(
    state,
    state.offset + searchString.toString().length,
    searchString.toString()
  );
});
