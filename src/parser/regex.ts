export const regex = (searchString: RegExp) => (input: string) => {
  // TODO (al): Actually check with the regex
  const asString = searchString.toString();
  const matched = input.startsWith(asString);

  if (!matched) return;

  const nextInput = input.slice(asString.length);

  return {
    match: searchString,
    nextInput
  }
}
