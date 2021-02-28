const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const toNumber = parseFloat(sampleActivity);
  if (toNumber <= 0 || toNumber > MODERN_ACTIVITY || typeof sampleActivity !== 'string' || isNaN(toNumber)) {
    return false
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const mathLog = Math.log(MODERN_ACTIVITY / toNumber);
  return Math.ceil(mathLog / k);
};
