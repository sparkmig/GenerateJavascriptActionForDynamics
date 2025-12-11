const setUp = require('./src/setup');
const generateClassForAction = require('./src/generateClassForAction');
const fs = require('node:fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});;

setUp();

let action = process.argv[2];

if (action) {
    generateClassForAction(action).then((result) => {
        console.log(result);
        fs.writeFileSync(`./Outputs/${action}.js`, result);
        readline.close();
    });
} else {
    readline.question('What action do you want to generate? ', action => {
        generateClassForAction(action).then((result) => {
            console.log(result);
            fs.writeFileSync(`./Outputs/${action}.js`, result);
            readline.close();
        });
    });
}