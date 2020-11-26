import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const whitespace = () => new Parser((state: ParserState): ParserState => {
  const regexWhitespace = /\s+/;
  const execArr = regexWhitespace.exec(state.input.slice(state.offset));

  if (execArr === null) {
    return updateParserError(state, `Failed to match ${regexWhitespace}`);
  }

  return updateParserState(
    state,
    state.offset + execArr[0].length,
    execArr[0]
  );
});
