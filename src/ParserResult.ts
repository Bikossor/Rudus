export type ParserResult = {
  match: string;
  nextInput: string;
  isError: boolean;
  errorMessage?: string;
};
