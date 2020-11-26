import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const string = (searchString: string) => new Parser((state: ParserState): ParserState => {
  const matched = state.input.startsWith(searchString);

  if (!matched)
    return updateParserError(state, `Failed to match ${searchString}`);

  return updateParserState(
    state,
    state.offset + searchString.length,
    searchString
  );
});
