import { Parser } from "../Parser";
import { updateParserResult } from "../ParserState";

/**
 * The given `parser` may or may not match. This combinator can not fail.
 * @param parser
 * @returns
 * @see https://rudus.pages.dev/docs/api/combinators/optional
 */
export const optional = (parser: Parser): Parser =>
  new Parser(currentState => {
    if (currentState.isError) return currentState;

    // Try to transform the current state with the given parser.
    const nextState = parser.transformState(currentState);

    // If the given parser can not match return the current state.
    if (nextState.isError) return updateParserResult(currentState, null);

    // If the given parser can match return the transformed state.
    return nextState;
  });
