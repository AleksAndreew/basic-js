const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let arrNew = [];
  let discarded = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i + 1 < arr.length) {
        i++;
        discarded = true;
      }
    } else if (arr[i] === "--discard-prev") {
      if (arrNew.length > 0 && !discarded) {
        arrNew.pop();
      }
    } else if (arr[i] === "--double-next") {
      if (i + 1 < arr.length) {
        arrNew.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && arrNew.length > 0 && !discarded) {
        arrNew.push(arrNew[arrNew.length - 1]);
      }
    } else {
      arrNew.push(arr[i]);
      discarded = false;
    }
  }

  return arrNew;
}

module.exports = {
  transform,
};
