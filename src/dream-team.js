const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const array = members
        .filter(element => typeof element === 'string')
        .map(element => element.trim())
        .map(element => element[0])
        .map(element => element.toUpperCase())
        .sort()
        .join('')
  return array;
};
