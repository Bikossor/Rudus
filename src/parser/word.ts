import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const word = () => new Parser((state: ParserState): ParserState => {
  const regexWord = /\w+/;
  const [fullMatch] = regexWord.exec(state.input.slice(state.offset));

  if (fullMatch === null) {
    return updateParserError(state, `Failed to match ${regexWord}`);
  }

  return updateParserState(
    state,
    state.offset + fullMatch.length,
    fullMatch
  );
});
