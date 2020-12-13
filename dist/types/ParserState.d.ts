import { ParserStateResult } from "./ParserStateResult";
export declare type ParserState = {
    offset: number;
    input: string;
    result: ParserStateResult;
    isError: boolean;
    errorMessage?: string;
};
export declare const updateParserState: (state: ParserState, offset: number, result: ParserStateResult) => ParserState;
export declare const updateParserResult: (state: ParserState, result: ParserStateResult) => ParserState;
export declare const updateParserError: (state: ParserState, errorMessage: string) => ParserState;
