export const sequenceOf = (parsers: Array<any>) => (input: string) => {
  const results = [];
  let lastInput = input;

  parsers.forEach((parser) => {
    if (lastInput !== undefined) {
      lastInput = parser(lastInput).nextInput;
    }
  });

  return results;
};
