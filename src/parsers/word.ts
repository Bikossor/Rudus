import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match one or more words (regex: `/[a-zA-Z0-9_]+/`).
 * @see https://rudus.pages.dev/docs/api/parsers/word
 */
export const word = () =>
  new Parser((state: ParserState): ParserState => {
    const regexWord = /\w+/;
    const [fullMatch] = regexWord.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `Failed to match word ${regexWord.toString()} at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
  });
