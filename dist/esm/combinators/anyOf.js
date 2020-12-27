import { Parser } from "../Parser";
import { updateParserResult } from "../ParserState";
/**
 * Tries to match all `parsers` and returns the first successful one.
 * @param parsers
 */
export const anyOf = (parsers) => new Parser((state) => {
    let furthestState = null;
    for (const parser of parsers) {
        const currentState = parser.transformState(state);
        if (!currentState.isError) {
            return updateParserResult(currentState, currentState.result);
        }
        if (!furthestState || furthestState.offset < currentState.offset) {
            furthestState = currentState;
        }
    }
    return updateParserResult(furthestState, furthestState.result);
});
