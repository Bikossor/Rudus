"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
var string = function (searchString) { return new Parser_1.Parser(function (state) {
    var matched = state.input.slice(state.offset).startsWith(searchString);
    if (!matched)
        return ParserState_1.updateParserError(state, "Failed to match string " + searchString + " at offset " + state.offset);
    return ParserState_1.updateParserState(state, state.offset + searchString.length, searchString);
}); };
exports.string = string;
