import { Parser } from "../Parser";
import { updateParserResult } from "../ParserState";
/**
 * Accepts a single parser, which may match zero or infinite times.
 * @param parser
 */
export const many = (parser) => new Parser((state) => {
    let results = [];
    let nextState = state;
    let done = false;
    while (!done) {
        let testState = parser.transformState(nextState);
        if (!testState.isError) {
            results.push(testState.result);
            nextState = testState;
        }
        else {
            done = true;
        }
    }
    return updateParserResult(nextState, results);
});
