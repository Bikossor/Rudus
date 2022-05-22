import { Parser } from "../Parser";

/**
 * The given `parser` may or may not match. This combinator can not fail.
 * @param parser
 * @returns
 */
export const optional = (parser: Parser): Parser => {
  return new Parser(currentState => {
    // Try to transform the current state with the given parser.
    const nextState = parser.transformState(currentState);

    // If the given parser can not match return the current state.
    if (nextState.isError) return currentState;

    // If the given parser can match return the transformed state.
    return nextState;
  });
};
