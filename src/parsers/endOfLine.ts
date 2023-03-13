import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";

/**
 * Tries to match an end of line (either `\r\n`, `\r` or `\n`)
 * @see https://rudus.pages.dev/docs/api/parsers/endOfLine
 */
export const endOfLine = (name = "endOfLine") =>
  new Parser(state => {
    if (state.isError) return state;

    const endOfLineRegex = new RegExp(/(\r\n|\r|\n)/);
    const [fullMatch] = endOfLineRegex.exec(state.input.slice(state.offset)) || [null];

    if (fullMatch === null) {
      return updateParserError(
        state,
        `${name}: failed to match end of line at offset ${state.offset.toString()}`,
      );
    }

    return updateParserState(state, state.offset + fullMatch.length, "<EOL>");
  }, name);
