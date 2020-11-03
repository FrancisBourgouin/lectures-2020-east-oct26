// Stdin / Stdout

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = []

const showAnswers = (answers) => {
  console.log(answers)

}

rl.question('What do you think of Node.js? ', (answer1) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer1}`);
  answers.push(answer1)

  rl.question('What do you REALLY think of Node.js? ', (answer2) => {
    // TODO: Log the answer in a database
    answers.push(answer2)

    showAnswers()
    rl.close()
  });
});

