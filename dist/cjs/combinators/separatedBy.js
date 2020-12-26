"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separatedBy = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
/**
 * - Tries to match a given `value` separated by a given `separator`
 * - Only captures the `value`
 * @param value
 * @param separator
 */
var separatedBy = function (value, separator) { return new Parser_1.Parser(function (state) {
    //#region value: Parser
    var valueParserState = value.transformState(state);
    if (valueParserState.isError) {
        return ParserState_1.updateParserError(state, "separatedBy: value parser failed to match at offset " + valueParserState.offset);
    }
    //#endregion
    //#region separator: Parser
    // INFO (Bikossor): Maybe the separator will be optional in the future.
    var separatorParserState = separator.transformState(valueParserState);
    if (separatorParserState.isError) {
        return ParserState_1.updateParserError(state, "separatedBy: separator parser failed to match at offset " + separatorParserState.offset);
    }
    //#endregion
    // INFO (Bikossor): We just want to capture the result of the value parser.
    return ParserState_1.updateParserResult(separatorParserState, valueParserState.result);
}); };
exports.separatedBy = separatedBy;
