const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  const arrayOfCats = array.flat(Infinity).filter(value => value === '^^');
  return arrayOfCats.length;
};