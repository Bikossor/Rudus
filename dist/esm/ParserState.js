//#region ParserState utility functions
export const updateParserState = (state, offset, result) => ({
    ...state,
    offset,
    result,
});
export const updateParserResult = (state, result) => ({
    ...state,
    result,
});
export const updateParserError = (state, errorMessage) => ({
    ...state,
    isError: true,
    errorMessage,
});
//#endregion
