import { Parser } from "../Parser";
import { updateParserError, updateParserResult } from "../ParserState";

/**
 * Tries to match a given `inner` surrounded by a given `outerLeft` and `outerRight`. The `outerRight` parser is optional and defaults to `outerLeft`.
 * @see https://rudus.pages.dev/api/combinators/between
 */
export const between =
  (outerLeft: Parser, outerRight: Parser = outerLeft) =>
  (inner: Parser, name = "between") =>
    new Parser(state => {
      if (state.isError) return state;

      //#region outerLeft: Parser
      const outerLeftParserState = outerLeft.transformState(state);

      if (outerLeftParserState.isError) {
        return updateParserError(
          state,
          `${name}: outerLeft parser failed to match at offset ${outerLeftParserState.offset}`,
        );
      }
      //#endregion

      //#region inner: Parser
      const innerParserState = inner.transformState(outerLeftParserState);

      if (innerParserState.isError) {
        return updateParserError(
          state,
          `${name}: inner parser failed to match at offset ${innerParserState.offset}`,
        );
      }
      //#endregion

      //#region outerRight: Parser
      const outerRightParserState = outerRight.transformState(innerParserState);

      if (outerRightParserState.isError) {
        return updateParserError(
          state,
          `${name}: outerRight parser failed to match at offset ${outerRightParserState.offset}`,
        );
      }
      //#endregion

      return updateParserResult(outerRightParserState, [
        outerLeftParserState.result,
        innerParserState.result,
        outerRightParserState.result,
      ]);
    }, name);
