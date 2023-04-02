console.log('Hello chalk');// before chalk

import chalk from "chalk";// importing chalk


console.log(chalk.red('Hello Pakistan'));
console.log(chalk.bold.blue('Hello world!'));
console.log(chalk.red.bgYellowBright('Hello World'));

let name:string = 'Abid Ali Khokhar';
let myName = chalk.green.cyanBright(name)
console.log(myName)