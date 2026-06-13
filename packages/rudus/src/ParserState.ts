import { ParserStateResult } from "./ParserStateResult";

export type ParserStateBase = {
  offset: number;
  input: string;
  result: ParserStateResult | null;
};

type ParserStateSuccess = {
  isError: false;
};

type ParserStateError = {
  isError: true;
  errorMessage: string;
};

export type ParserState = ParserStateBase & (ParserStateSuccess | ParserStateError);

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
