/**
 * This is just an example of a CSS parser and not perfect
 */

const { regex, string, word, lazy, many1 } = require("rudus");
const { sequenceOf } = require("rudus");

const optionalComma = regex(/\,?/);
const selector = regex(/[a-zA-Z0-9_.]+/);

const selectorGroup = lazy(() => sequenceOf([selector, optionalComma, ruleGroup]));

const rule = sequenceOf([word(), string(":"), word(), string(";")]);

const ruleGroup = sequenceOf([string("{"), many1(rule), string("}")]);

const cssInput = `.test{color:red;background:green;}`;

const parserState = selectorGroup.run(cssInput);
console.log(parserState);
