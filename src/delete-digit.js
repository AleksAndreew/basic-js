const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
const str = n.toString().split('');
let arr = [];
str.forEach((_, index) =>{
let a = +str.toSpliced(index, 1).join('');
arr.push(a);
})
return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
