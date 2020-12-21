import { Parser } from "../Parser";
/**
 * Accepts a single parser, which must match at least once or infinite times otherwise it fails.
 * @param parser
 */
export declare const many1: (parser: Parser) => Parser;
