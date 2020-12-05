const { regex, whitespace, word, endOfInput } = require('./dist/parser/index');
const { sequenceOf } = require('./dist/combinators/sequenceOf');

const variableDeclarationParser = sequenceOf([
  regex(/var|const|let/),
  whitespace(),
  word(),
  whitespace(),
  regex(/\=/),
  whitespace(),
  regex(/\"/),
  word(),
  regex(/\"/),
  regex(/\;/),
  endOfInput(),
]);

console.log(
  variableDeclarationParser.run('const test = "Test";    ')
);
