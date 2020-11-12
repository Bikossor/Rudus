export const number = (searchString: number) => (input: string) => {
  const asString = searchString.toString();
  const matched = input.startsWith(asString);

  if (!matched) return;

  const nextInput = input.slice(asString.length);

  return {
    match: searchString,
    nextInput
  }
}
