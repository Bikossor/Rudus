import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";
export const regex = (searchString) => new Parser((state) => {
    const [fullMatch] = searchString.exec(state.input.slice(state.offset)) || [null];
    if (fullMatch === null) {
        return updateParserError(state, `Failed to match regex ${searchString} at offset ${state.offset}`);
    }
    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
});
