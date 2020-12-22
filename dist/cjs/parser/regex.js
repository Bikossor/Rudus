"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
/**
 * Tries to match a given regex.
 * @param searchString
 */
var regex = function (searchString) { return new Parser_1.Parser(function (state) {
    var fullMatch = (searchString.exec(state.input.slice(state.offset)) || [null])[0];
    if (fullMatch === null) {
        return ParserState_1.updateParserError(state, "Failed to match regex " + searchString + " at offset " + state.offset);
    }
    return ParserState_1.updateParserState(state, state.offset + fullMatch.length, fullMatch);
}); };
exports.regex = regex;
