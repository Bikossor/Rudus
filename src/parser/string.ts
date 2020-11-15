import { ParserResult } from "../ParserResult";

export const string = (searchString: string) => (input: string): ParserResult => {
  const matched = input.startsWith(searchString);

  if (!matched)
    return {
      match: "",
      isError: true,
      nextInput: "",
      errorMessage: `Failed to match ${searchString}`,
    };

  const nextInput = input.slice(searchString.length);

  return {
    match: searchString,
    nextInput,
    isError: !matched,
  }
}
