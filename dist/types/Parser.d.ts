import { LikeParser } from "./LikeParser";
import { ParserStateResult } from "./ParserStateResult";
import { ParserState } from "./ParserState";
export declare class Parser {
    transformState: LikeParser;
    constructor(stateTransformer: LikeParser);
    run(input: string): ParserState;
    map(callback: (parserState: ParserState) => ParserStateResult): Parser;
}
