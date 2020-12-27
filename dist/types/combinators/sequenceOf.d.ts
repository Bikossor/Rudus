import { Parser } from "../Parser";
/**
 * Accepts multiple parsers, which must all match successfully in the given order otherwise it fails.
 * @param parsers
 */
export declare const sequenceOf: (parsers: Array<Parser>) => Parser;
