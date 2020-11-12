export const string = (searchString: string) => (input: string) => {
  const matched = input.startsWith(searchString);

  if (!matched) return;

  const nextInput = input.slice(searchString.length);

  return {
    match: searchString,
    nextInput
  }
}
