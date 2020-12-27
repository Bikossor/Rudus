"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
var Parser_1 = require("../Parser");
var ParserState_1 = require("../ParserState");
/**
 * Tries to match a given number.
 * @param searchString
 */
var number = function (searchString) { return new Parser_1.Parser(function (state) {
    var asString = searchString.toString();
    var matched = state.input.startsWith(asString);
    if (!matched) {
        return ParserState_1.updateParserError(state, "Failed to match number " + searchString + " at offset " + state.offset);
    }
    return ParserState_1.updateParserState(state, state.offset + searchString.toString().length, searchString.toString());
}); };
exports.number = number;
