"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateParserError = exports.updateParserResult = exports.updateParserState = void 0;
//#region ParserState utility functions
var updateParserState = function (state, offset, result) { return (__assign(__assign({}, state), { offset: offset,
    result: result })); };
exports.updateParserState = updateParserState;
var updateParserResult = function (state, result) { return (__assign(__assign({}, state), { result: result })); };
exports.updateParserResult = updateParserResult;
var updateParserError = function (state, errorMessage) { return (__assign(__assign({}, state), { isError: true, errorMessage: errorMessage })); };
exports.updateParserError = updateParserError;
//#endregion
