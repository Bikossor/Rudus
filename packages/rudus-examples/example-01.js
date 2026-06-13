const { whitespace, endOfInput, string } = require("rudus");
const { sequenceOf } = require("rudus");

const helloWorldParser = sequenceOf([
  string("Hello"),
  whitespace(),
  string("World"),
  endOfInput(),
]);

console.log(helloWorldParser.run("Hello World"));
