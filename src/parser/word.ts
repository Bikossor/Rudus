import { ParserState } from "../ParserState";
import { regex } from "./regex"

export const word = () => (state: ParserState) => {
  const parser = regex(/\w+/);
  return parser(state);
}
