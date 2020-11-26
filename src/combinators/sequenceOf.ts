import { ParserState } from "../ParserState";

type LikeParser = (state: ParserState) => ParserState;

export const sequenceOf = (parsers: Array<LikeParser>) => (state: ParserState): ParserState => {
  let i = 0;
  let results: Array<string> = [];
  let nextState: ParserState = state;

  do {
    nextState = parsers[i](nextState);
    results.push(nextState.result as string);

    if (nextState.isError) {
      return {
        ...state,
        ...nextState
      }
    }

    i++;
  } while (i < parsers.length && !nextState.isError);

  return {
    ...state,
    result: results,
  };
};
