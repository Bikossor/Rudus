import { ParserStateResult } from "./ParserStateResult";

export type ParserState = {
  offset: number;
  input: string;
  result: ParserStateResult;
  isError: boolean;
  errorMessage?: string;
};

//#region ParserState utility functions

export const updateParserState = (
  state: ParserState,
  offset: number,
  result: ParserStateResult,
): ParserState => ({
  ...state,
  offset,
  result,
});

export const updateParserResult = (
  state: ParserState,
  result: ParserStateResult,
): ParserState => ({
  ...state,
  result,
});

export const updateParserError = (
  state: ParserState,
  errorMessage: string,
): ParserState => ({
  ...state,
  isError: true,
  errorMessage,
});

//#endregion
