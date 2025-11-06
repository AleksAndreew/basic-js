const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counts = {};
  let arr = [];

  names.forEach(name => {
    if (arr.includes(name)) {
      let counter = 1;
      let newName = `${name}(${counter})`;
      while (arr.includes(newName)) {
        counter++;
        newName = `${name}(${counter})`;
      }
      arr.push(newName);
      counts[name] = (counts[name] || 0) + 1;
    } else {
      arr.push(name);
      counts[name] = 1;
    }
  })

  return arr;
}

module.exports = {
  renameFiles,
};
