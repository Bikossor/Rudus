import { Parser } from "../Parser";

/**
 * Takes a function that just returns a parser _(a thunk)_. This defers the evaluation of the given parser. Useful for writing recursive parsers.
 * @param parserThunk
 * @returns
 * @see https://rudus.pages.dev/api/parsers/lazy
 */
export const lazy = (parserThunk: () => Parser, name = "lazy"): Parser =>
  new Parser(state => {
    if (state.isError) return state;
    return parserThunk().transformState(state);
  }, name);
