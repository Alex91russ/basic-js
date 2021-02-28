const CustomError = require("../extensions/custom-error");

/*
--discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
*/

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      newArr.push(arr[i]);
    } else {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          break;
        case "--discard-prev":
          if (arr[i - 2] !== "--discard-next") {
            newArr.pop();
          }
          break;
        case "--double-next":
          if (arr.length - 1 > i) {
            newArr.push(arr[i + 1]);
          }
          break;
        case "--double-prev":
          if (newArr.length > 0 && arr[i - 2] !== "--discard-next") {
            newArr.push(arr[i - 1]);
          }
          break;
        default:
          newArr.push(arr[i]);
      }
    }
  }

  return newArr;
};
