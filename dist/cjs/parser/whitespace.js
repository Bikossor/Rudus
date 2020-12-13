"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitespace = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
var whitespace = function () { return new Parser_1.Parser(function (state) {
    var regexWhitespace = /\s+/;
    var fullMatch = (regexWhitespace.exec(state.input.slice(state.offset)) || [null])[0];
    if (fullMatch === null) {
        return ParserState_1.updateParserError(state, "Failed to match whitespace " + regexWhitespace + " at offset " + state.offset);
    }
    return ParserState_1.updateParserState(state, state.offset + fullMatch.length, fullMatch);
}); };
exports.whitespace = whitespace;
