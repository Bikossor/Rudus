"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.word = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
var word = function () { return new Parser_1.Parser(function (state) {
    var regexWord = /\w+/;
    var fullMatch = (regexWord.exec(state.input.slice(state.offset)) || [null])[0];
    if (fullMatch === null) {
        return ParserState_1.updateParserError(state, "Failed to match word " + regexWord + " at offset " + state.offset);
    }
    return ParserState_1.updateParserState(state, state.offset + fullMatch.length, fullMatch);
}); };
exports.word = word;
