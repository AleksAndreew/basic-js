const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the sumber of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {sumber}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  for (let sumb of s1) {
    if (s2.includes(sumb)) {
      sum++;
      s2 = s2.replace(sumb, '');
    };
  };
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
