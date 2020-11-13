import { regex } from "./regex"

export const whitespace = () => (input: string) => {
  const parser = regex(/\s+/);
  return parser(input);
}
