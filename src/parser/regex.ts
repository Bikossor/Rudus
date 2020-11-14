import { ParserResult } from "../ParserResult";

export const regex = (searchString: RegExp) => (input: string): ParserResult => {
  const execArr = searchString.exec(input);

  if (execArr === null) throw new Error(`Could not match RegExp "${searchString}"`);

  const nextInput = input.slice(execArr[0].length);

  return {
    match: execArr[0],
    nextInput,
    isError: execArr === null,
  }
}
