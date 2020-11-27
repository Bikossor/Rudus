import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const regex = (searchString: RegExp) => new Parser((state: ParserState): ParserState => {
  const [fullMatch] = searchString.exec(state.input.slice(state.offset));

  if (fullMatch === null) {
    return updateParserError(state, `Failed to match ${searchString}`);
  }

  return updateParserState(
    state,
    state.offset + fullMatch.length,
    fullMatch
  );
});
