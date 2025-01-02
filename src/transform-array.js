const { NotImplementedError } = require('../extensions/index.js');

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

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

	let result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);

		if (arr[i] === '--double-prev') {
			result.pop();
			if (i > 0) result.push(arr[i - 1]);
		}

		if (arr[i] === '--discard-prev') {
			result.pop();
			if (i > 0) result.pop();
		}

		if (arr[i] === '--double-next') {
			result.pop();
			if (i < arr.length - 1) result.push(arr[i + 1]);
		}

		if (arr[i] === '--discard-next') {
			result.pop();
			if (i < arr.length - 1) i += 2;
		}
	}

	return result;

 
}

module.exports = {
  transform
};
