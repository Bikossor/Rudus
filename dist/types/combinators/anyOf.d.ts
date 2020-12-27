import { Parser } from "../Parser";
/**
 * Tries to match all `parsers` and returns the first successful one.
 * @param parsers
 */
export declare const anyOf: (parsers: Array<Parser>) => Parser;
