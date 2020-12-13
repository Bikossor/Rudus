import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";
export const string = (searchString) => new Parser((state) => {
    const matched = state.input.slice(state.offset).startsWith(searchString);
    if (!matched)
        return updateParserError(state, `Failed to match string ${searchString} at offset ${state.offset}`);
    return updateParserState(state, state.offset + searchString.length, searchString);
});
