import { LikeParser } from "LikeParser";
import { ParserStateResult } from "ParserStateResult";
import { ParserState, updateParserResult } from "ParserState";

export class Parser {
  transformState: LikeParser;

  constructor(stateTransformer: LikeParser) {
    this.transformState = stateTransformer;
  }

  run(input: string) {
    return this.transformState({
      input,
      isError: false,
      offset: 0,
      result: null,
    })
  }

  map(callback: (parserState: ParserState) => ParserStateResult) {
    return new Parser(parserState => {
      const nextState = this.transformState(parserState);
      return updateParserResult(nextState, callback(nextState));
    });
  }
}
