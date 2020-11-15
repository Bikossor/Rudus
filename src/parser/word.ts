import { regex } from "./regex"

export const word = () => (input: string) => {
  const parser = regex(/\w+/);
  return parser(input);
}
