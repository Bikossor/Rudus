export const sequenceOf = (parsers: Array<any>) => (input: string) => {
  const results: Array<{ match: string, nextInput: string }> = [];
  let lastInput = input;

  parsers.forEach((parser) => {
    if (lastInput !== undefined) {
      const parsed = parser(lastInput);
      lastInput = parsed.nextInput;
      results.push({
        match: parsed.match,
        nextInput: parsed.nextInput
      });
    }
  });

  return results;
};
