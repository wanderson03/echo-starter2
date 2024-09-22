const prompCreator = require('prompt-sync');
const { Stream } = require('stream');

const prompt = prompCreator();

// DO NOT CHANGE THE LINES BELOW.
const str = prompt('Enter a string: ');
const n = prompt('Enter a number: ');
console.log('str=' + str);
console.log('n=' + n);

/**
 * TODO: Creates a new string that repeats the given string `str`
 * `n` number of times. Each one should be in its own line.
 * For example: if str is 'Hello!', and n is 3, then it should
 * be 'Hello!\nHello!\nHello!\n'
 */

let result = "";
  for (let i = 0; i < n; i++) {result += str +"\n";}{result;}
// DO NOT CHANGE THE LINES BELOW.
console.log(result);

module.exports = {
  result,
};
