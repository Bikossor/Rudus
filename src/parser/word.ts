import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

export const word = () => new Parser((state: ParserState): ParserState => {
  const regexWord = /\w+/;
  const execArr = regexWord.exec(state.input.slice(state.offset));

  if (execArr === null) {
    return updateParserError(state, `Failed to match ${regexWord}`);
  }

  return updateParserState(
    state,
    state.offset + execArr[0].length,
    execArr[0]
  );
});
