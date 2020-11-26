import { LikeParser } from "./combinators/sequenceOf";
import { ParserState, updateParserResult } from "./ParserState";

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

  map(callback: (parserState: ParserState) => unknown) {
    return new Parser(parserState => {
      const nextState = this.transformState(parserState);
      return updateParserResult(nextState, callback(nextState));
    });
  }
}
