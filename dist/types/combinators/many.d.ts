import { Parser } from "../Parser";
/**
 * Accepts a single parser, which may match zero or infinite times.
 * @param parser
 */
export declare const many: (parser: Parser) => Parser;
