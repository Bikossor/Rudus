const { whitespace, endOfInput, string } = require('../dist/cjs/parser/index');
const { sequenceOf } = require('../dist/cjs/combinators/index');

const helloWorldParser = sequenceOf([
  string('Hello'),
  whitespace(),
  string('World'),
  endOfInput(),
]);

console.log(
  helloWorldParser.run('Hello World')
);
