import { Parser } from "../Parser";
/**
 * - Tries to match a given `value` separated by a given `separator`
 * - Only captures the `value`
 * @param value
 * @param separator
 */
export declare const separatedBy: (value: Parser, separator: Parser) => Parser;
