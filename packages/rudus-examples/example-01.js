import { whitespace, endOfInput, string } from "rudus";
import { sequenceOf } from "rudus";

const helloWorldParser = sequenceOf([
  string("Hello"),
  whitespace(),
  string("World"),
  endOfInput(),
]);

console.log(helloWorldParser.run("Hello World"));
