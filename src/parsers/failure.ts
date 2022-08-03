import { Parser } from "../Parser";
import { updateParserError } from "../ParserState";

/**
 * Always returns a failing parser with the given `errorMessage`. Typically used inside a contextual parser.
 * @param errorMessage
 * @returns
 */
export const failure = (errorMessage: string) => {
  return new Parser(state => {
    if (state.isError) return state;
    return updateParserError(state, errorMessage);
  });
};
