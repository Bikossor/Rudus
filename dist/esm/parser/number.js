import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";
export const number = (searchString) => new Parser((state) => {
    const asString = searchString.toString();
    const matched = state.input.startsWith(asString);
    if (!matched) {
        return updateParserError(state, `Failed to match number ${searchString} at offset ${state.offset}`);
    }
    return updateParserState(state, state.offset + searchString.toString().length, searchString.toString());
});
