import { ParserState } from "../ParserState";

export const string = (searchString: string) => (state: ParserState): ParserState => {
  const matched = state.input.startsWith(searchString);

  if (!matched)
    return {
      ...state,
      isError: true,
      errorMessage: `Failed to match ${searchString}`,
    };

  return {
    ...state,
    offset: state.offset + searchString.length,
    result: searchString,
  }
}
