import { Parser } from "../Parser";
import { updateParserError, updateParserResult } from "../ParserState";

/**
 * - Tries to match a given `value` separated by a given `separator`
 * - Only captures the `value`
 * @param value
 * @param separator
 * @see https://rudus.pages.dev/docs/api/combinators/separatedBy
 */
export const separatedBy =
  (separator: Parser) =>
  (value: Parser, name = "separatedBy") =>
    new Parser(state => {
      if (state.isError) return state;

      //#region value: Parser
      const valueParserState = value.transformState(state);

      if (valueParserState.isError) {
        return updateParserError(
          state,
          `${name}: value parser failed to match at offset ${valueParserState.offset}`,
        );
      }
      //#endregion

      //#region separator: Parser
      // INFO (Bikossor): Maybe the separator will be optional in the future.
      const separatorParserState = separator.transformState(valueParserState);

      if (separatorParserState.isError) {
        return updateParserError(
          state,
          `${name}: separator parser failed to match at offset ${separatorParserState.offset}`,
        );
      }
      //#endregion

      // INFO (Bikossor): We just want to capture the result of the value parser.
      return updateParserResult(separatorParserState, valueParserState.result);
    }, name);
