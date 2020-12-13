"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceOf = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
var sequenceOf = function (parsers) { return new Parser_1.Parser(function (state) {
    var i = 0;
    var results = [];
    var nextState = state;
    do {
        nextState = parsers[i].transformState(nextState);
        results.push(nextState.result);
        if (nextState.isError) {
            return ParserState_1.updateParserError(nextState, nextState.errorMessage);
        }
        i++;
    } while (i < parsers.length && !nextState.isError);
    return ParserState_1.updateParserResult(nextState, results);
}); };
exports.sequenceOf = sequenceOf;
