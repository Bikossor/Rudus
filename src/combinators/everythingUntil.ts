import { Parser } from "../Parser";
import { updateParserError, updateParserResult } from "../ParserState";

/**
 * Tries to match a given `inner` surrounded by a given `outerLeft` and `outerRight`. The `outerRight` parser is optional and defaults to `outerLeft`.
 * @see https://rudus.pages.dev/docs/api/combinators/everythingUntil
 */
export const everythingUntil =
  (separator: Parser) =>
  (value: Parser, name = "everythingUntil") =>
    new Parser(state => {
      if (state.isError) return state;

      const out = value.transformState(state);

      if (out.isError) return updateParserError(out, `${name}: ${out.errorMessage}`);

      const outSeperator = separator.transformState(out);

      if (outSeperator.isError)
        return updateParserError(
          outSeperator,
          `${name}: failed to match separator at offset ${outSeperator.offset}`,
        );

      return updateParserResult(outSeperator, out.result);
    }, name);
