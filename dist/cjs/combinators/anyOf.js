"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyOf = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
/**
 * Tries to match all `parsers` and returns the first successful one.
 * @param parsers
 */
var anyOf = function (parsers) { return new Parser_1.Parser(function (state) {
    var furthestState = null;
    for (var _i = 0, parsers_1 = parsers; _i < parsers_1.length; _i++) {
        var parser = parsers_1[_i];
        var currentState = parser.transformState(state);
        if (!currentState.isError) {
            return ParserState_1.updateParserResult(currentState, currentState.result);
        }
        if (!furthestState || furthestState.offset < currentState.offset) {
            furthestState = currentState;
        }
    }
    return ParserState_1.updateParserResult(furthestState, furthestState.result);
}); };
exports.anyOf = anyOf;
