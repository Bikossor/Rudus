import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match one or more whitespaces (regex: `/[\r\n\t\f\v ]+/`).
 * @see https://rudus.pages.dev/docs/api/parsers/whitespace
 */
export const whitespace = () =>
  new Parser((state: ParserState): ParserState => {
    const regexWhitespace = /\s+/;
    const [fullMatch] = regexWhitespace.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `Failed to match whitespace ${regexWhitespace.toString()} at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
  });
