const input =
  "<Question>Question1</Question><options>op1</options><options>op2</options><options>op3</options><options>op4</options><Question>Question2</Question><options>op21</options><options>op22</options><options>op23</options>";

let transformedInput = input.replace(
  /(<Question>.*?<\/Question>(?:<options>.*?<\/options>)*)/g,
  "<Single>$1</Single>"
);

console.log(transformedInput);
