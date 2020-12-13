"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
var ParserState_1 = require("./ParserState");
var Parser = /** @class */ (function () {
    function Parser(stateTransformer) {
        this.transformState = stateTransformer;
    }
    Parser.prototype.run = function (input) {
        return this.transformState({
            input: input,
            isError: false,
            offset: 0,
            result: null,
        });
    };
    Parser.prototype.map = function (callback) {
        var _this = this;
        return new Parser(function (parserState) {
            var nextState = _this.transformState(parserState);
            return ParserState_1.updateParserResult(nextState, callback(nextState));
        });
    };
    return Parser;
}());
exports.Parser = Parser;
