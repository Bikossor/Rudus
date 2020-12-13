"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfInput = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
var endOfInput = function () { return new Parser_1.Parser(function (state) {
    if (state.input.slice(state.offset) !== '') {
        return ParserState_1.updateParserError(state, "Failed to match an end of input at offset " + state.offset);
    }
    return ParserState_1.updateParserResult(state, null);
}); };
exports.endOfInput = endOfInput;
