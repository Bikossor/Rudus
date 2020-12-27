import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";
/**
 * Tries to match one or more words (regex: `/[a-zA-Z0-9_]+/`).
 */
export const word = () => new Parser((state) => {
    const regexWord = /\w+/;
    const [fullMatch] = regexWord.exec(state.input.slice(state.offset)) || [null];
    if (fullMatch === null) {
        return updateParserError(state, `Failed to match word ${regexWord} at offset ${state.offset}`);
    }
    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
});
