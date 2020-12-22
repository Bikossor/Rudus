"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.many1 = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
/**
 * Accepts a single parser, which must match at least once or infinite times otherwise it fails.
 * @param parser
 */
var many1 = function (parser) { return new Parser_1.Parser(function (state) {
    var results = [];
    var nextState = state;
    var done = false;
    while (!done) {
        var testState = parser.transformState(nextState);
        if (!testState.isError) {
            results.push(testState.result);
            nextState = testState;
        }
        else {
            done = true;
        }
    }
    if (!results.length) {
        return ParserState_1.updateParserError(state, "many1: Failed to match at least once at offset " + state.offset);
    }
    return ParserState_1.updateParserResult(nextState, results);
}); };
exports.many1 = many1;
