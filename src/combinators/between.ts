import { Parser } from "../Parser";
import { ParserState, updateParserError, updateParserResult } from "../ParserState";

/**
 * Tries to match a given `inner` surrounded by a given `outerLeft` and `outerRight`. The `outerRight` parser is optional and defaults to `outerLeft`.
 */
export const between =
  (outerLeft: Parser, outerRight: Parser = outerLeft) =>
  (inner: Parser) =>
    new Parser((state: ParserState): ParserState => {
      //#region outerLeft: Parser
      const outerLeftParserState = outerLeft.transformState(state);

      if (outerLeftParserState.isError) {
        return updateParserError(
          state,
          `between: outerLeft parser failed to match at offset ${outerLeftParserState.offset}`,
        );
      }
      //#endregion

      //#region inner: Parser
      const innerParserState = inner.transformState(outerLeftParserState);

      if (innerParserState.isError) {
        return updateParserError(
          state,
          `between: inner parser failed to match at offset ${innerParserState.offset}`,
        );
      }
      //#endregion

      //#region outerRight: Parser
      const outerRightParserState = outerRight.transformState(innerParserState);

      if (outerRightParserState.isError) {
        return updateParserError(
          state,
          `between: outerRight parser failed to match at offset ${outerRightParserState.offset}`,
        );
      }
      //#endregion

      return updateParserResult(outerRightParserState, [
        outerLeftParserState.result,
        innerParserState.result,
        outerRightParserState.result,
      ]);
    });
