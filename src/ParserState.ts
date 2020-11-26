export type ParserState = {
  offset: number;
  input: string;
  result: unknown;
  isError: boolean;
  errorMessage?: string;
};

//#region ParserState utility functions

export const updateParserState = (
  state: ParserState,
  offset: number,
  result: unknown
): ParserState => ({
  ...state,
  offset,
  result,
});

export const updateParserResult = (
  state: ParserState,
  result: unknown
): ParserState => ({
  ...state,
  result,
});

export const updateParserError = (
  state: ParserState,
  errorMessage: string
): ParserState => ({
  ...state,
  isError: true,
  errorMessage,
});

//#endregion
