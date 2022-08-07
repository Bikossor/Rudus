import { Parser } from "../Parser";

/**
 * Takes a function that just returns a parser _(a thunk)_. This defers the evaluation of the given parser. Useful for writing recursive parsers.
 * @param parserThunk
 * @returns
 * @see https://rudus.pages.dev/docs/api/parsers/lazy
 */
export const lazy = (parserThunk: () => Parser): Parser =>
  new Parser(state => {
    return parserThunk().transformState(state);
  });
