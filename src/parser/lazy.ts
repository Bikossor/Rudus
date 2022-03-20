import { Parser } from "../Parser";

export const lazy = (parserThunk: () => Parser): Parser => {
  return new Parser(state => {
    return parserThunk().transformState(state);
  });
};
