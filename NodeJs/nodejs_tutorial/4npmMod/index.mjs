import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
import validator from 'validator';
const result = validator.isEmail('pratik.patil113@gmail.com');
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));
