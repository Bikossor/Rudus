"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.many = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
var many = function (parser) { return new Parser_1.Parser(function (state) {
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
    return ParserState_1.updateParserResult(nextState, results);
}); };
exports.many = many;
