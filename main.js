const { string } = require('./dist/parser/index');
const { sequenceOf } = require('./dist/combinators/sequenceOf');

const helloWorldParser = sequenceOf([
  string('Hello'),
  string(' '),
  string('world'),
]);

console.log(
  helloWorldParser('Hello world')
);
