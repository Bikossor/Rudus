import { ParserState } from "../ParserState";

export const number = (searchString: number) => (state: ParserState): ParserState => {
  const asString = searchString.toString();
  const matched = state.input.startsWith(asString);

  if (!matched)
    return {
      ...state,
      isError: true,
      errorMessage: `Failed to match ${searchString}`,
    };

  return {
    ...state,
    offset: state.offset + searchString.toString().length,
    result: searchString.toString(),
  }
}
