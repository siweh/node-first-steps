//Using Chalk string terminal styling

const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgBlue.black(greet('Xola'));
console.log(styledMessage)

//Using figlet to style a string in ASCII art
const figlet = require('figlet')

figlet('Hello, Sanelisiwe', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});