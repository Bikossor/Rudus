const { regex, whitespace } = require('./dist/parser/index');
const { sequenceOf } = require('./dist/combinators/sequenceOf');

const variableDeclarationParser = sequenceOf([
  regex(/var|const|let/),
  whitespace(),
  regex(/\S+/),
  whitespace(),
  regex(/\=/),
  whitespace(),
  regex(/\"/),
  regex(/[A-Za-z]+/),
  regex(/\"/),
  regex(/\;/),
]);

console.log(
  variableDeclarationParser('const test = "Test";')
);
