import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match one or more whitespaces (regex: `/[\r\n\t\f\v ]+/`).
 * @see https://rudus.pages.dev/api/parsers/whitespace
 */
export const whitespace = (name = "whitespace") =>
  new Parser(state => {
    if (state.isError) return state;

    const regexWhitespace = /\s+/;
    const [fullMatch] = regexWhitespace.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `${name}: failed to match whitespace ${regexWhitespace.toString()} at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
  }, name);
