import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const whitespace = () => new Parser((state: ParserState): ParserState => {
  const regexWhitespace = /\s+/;
  const [fullMatch] = regexWhitespace.exec(state.input.slice(state.offset)) || [null];

  if (fullMatch === null) {
    return updateParserError(state, `Failed to match ${regexWhitespace}`);
  }

  return updateParserState(
    state,
    state.offset + fullMatch.length,
    fullMatch
  );
});
