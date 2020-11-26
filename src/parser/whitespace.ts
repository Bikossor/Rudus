import { ParserState } from "../ParserState";
import { regex } from "./regex"

export const whitespace = () => (state: ParserState) => {
  const parser = regex(/\s+/);
  return parser(state);
}
