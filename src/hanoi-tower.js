const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (Number.isNaN(disksNumber) || Number.isNaN(turnsSpeed)) return false;

  const turns = Math.pow(2, disksNumber) - 1;
  const turnsSpeedSecond = turnsSpeed / 3600;
  const seconds = Math.floor(turns / turnsSpeedSecond);
  return {
    turns,
    seconds
  }
};
