import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserResult } from "../ParserState";

/**
 * - Tries to match a given `value` separated by a given `separator`
 * - Only captures the `value`
 * @param value
 * @param separator
 */
export const separatedBy = (value: Parser, separator: Parser) => new Parser((state: ParserState): ParserState => {

  //#region value: Parser
  const valueParserState = value.transformState(state);

  if (valueParserState.isError) {
    return updateParserError(state, `separatedBy: value parser failed to match at offset ${valueParserState.offset}`);
  }
  //#endregion

  //#region separator: Parser
  // INFO (Bikossor): Maybe the separator will be optional in the future.
  const separatorParserState = separator.transformState(valueParserState);

  if (separatorParserState.isError) {
    return updateParserError(state, `separatedBy: separator parser failed to match at offset ${separatorParserState.offset}`);
  }
  //#endregion

  // INFO (Bikossor): We just want to capture the result of the value parser.
  return updateParserResult(separatorParserState, valueParserState.result);

});
