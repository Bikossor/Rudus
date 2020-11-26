export type ParserState = {
  offset: number;
  input: string;
  result: unknown;
  isError: boolean;
  errorMessage?: string;
};
