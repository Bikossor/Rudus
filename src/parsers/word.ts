import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match one or more words (regex: `/[a-zA-Z0-9_]+/`).
 * @see https://rudus.pages.dev/api/parsers/word
 */
export const word = (name = "word") =>
  new Parser(state => {
    if (state.isError) return state;

    const regexWord = /\w+/;
    const [fullMatch] = regexWord.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `${name}: failed to match word ${regexWord.toString()} at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
  }, name);
