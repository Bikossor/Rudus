import { ParserResult } from "../ParserResult";

export const regex = (searchString: RegExp) => (input: string): ParserResult => {
  const execArr = searchString.exec(input);

  if (execArr === null)
    return {
      match: "",
      isError: true,
      nextInput: "",
      errorMessage: `Failed to match ${searchString}`,
    };

  const nextInput = input.slice(execArr[0].length);

  return {
    match: execArr[0],
    nextInput,
    isError: execArr === null,
  }
}
