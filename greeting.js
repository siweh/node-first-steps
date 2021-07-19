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