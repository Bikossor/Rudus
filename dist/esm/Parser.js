import { updateParserResult } from "./ParserState";
export class Parser {
    constructor(stateTransformer) {
        this.transformState = stateTransformer;
    }
    run(input) {
        return this.transformState({
            input,
            isError: false,
            offset: 0,
            result: null,
        });
    }
    map(callback) {
        return new Parser(parserState => {
            const nextState = this.transformState(parserState);
            return updateParserResult(nextState, callback(nextState));
        });
    }
}
