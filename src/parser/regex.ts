import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const regex = (searchString: RegExp) => new Parser((state: ParserState): ParserState => {
  const execArr = searchString.exec(state.input.slice(state.offset));

  if (execArr === null) {
    return updateParserError(state, `Failed to match ${searchString}`);
  }

  return updateParserState(
    state,
    state.offset + execArr[0].length,
    execArr[0]
  );
});
