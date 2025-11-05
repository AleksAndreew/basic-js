const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
options.addition = options.addition !== undefined ? String(options.addition) : '';
if(!options.repeatTimes) options.repeatTimes = 1;
if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
if(!options.separator) options.separator = '+';
if(!options.additionSeparator) options.additionSeparator = '|';

function addition (name , separator, times ){
let arr =[];
arr = Array(times).fill(name);
let string = arr.join(separator);
return string;
}

let result = '';

let additionalString = addition(options.addition, options.additionSeparator, options.additionRepeatTimes);
let arr1=  Array(options.repeatTimes).fill(str + additionalString);
result = arr1.join(options.separator);

return result;
}

module.exports = {
  repeater
};
