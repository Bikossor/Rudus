import { ParserState } from "../ParserState";

export const regex = (searchString: RegExp) => (state: ParserState): ParserState => {
  const execArr = searchString.exec(state.input.slice(state.offset));

  if (execArr === null) {
    return {
      ...state,
      isError: true,
      errorMessage: `Failed to match ${searchString}`,
    };
  }

  return {
    ...state,
    offset: state.offset + execArr[0].length,
    result: execArr[0],
  };
};
