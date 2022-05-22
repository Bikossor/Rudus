import { Parser } from "../Parser";

export const optional = (parser: Parser): Parser => {
  return new Parser(currentState => {
    const nextState = parser.transformState(currentState);

    if (nextState.isError) return currentState;

    return nextState;
  });
};
