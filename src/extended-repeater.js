const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let basicOptions = {
    addition: "",
    additionSeparator: "|",
    additionRepeatTimes: "",
    separator: "+",
    repeatTimes: "",
  };

  let summaryOptions = Object.assign(basicOptions, options);

  for (let key in summaryOptions) {
    if (typeof summaryOptions[key] === 'object') {
      summaryOptions[key] = summaryOptions[key] + '';
    }
  }
  
  let resultAfterAdditional = "";
  let resultAfterAdditionalRepeat = "";
  let resultAfterAddSeparator = `${str}`;
  let resultFinal = "";

  for (let key in summaryOptions) {
    switch (key) {
      case "repeatTimes":
        if (summaryOptions[key] === undefined) {
          return `${resultAfterAddSeparator}${resultAfterAdditional}`;
        }
        if (summaryOptions[key] !== "") {
          resultFinal = resultAfterAddSeparator.repeat(summaryOptions[key]);
          resultFinal = resultFinal.substring(
            0,
            resultFinal.length - summaryOptions.separator.length
          );
        }
        break;
      case "addition":
        if (summaryOptions[key] === null) {
          summaryOptions[key] = "null";
        }
        resultAfterAdditional += summaryOptions[key].toString();
        break;
      case "additionRepeatTimes":
        if (summaryOptions[key] !== "" && summaryOptions[key] !== undefined) {
          resultAfterAdditionalRepeat = resultAfterAdditional.repeat(
            summaryOptions[key]
          );
          resultAfterAdditional = resultAfterAdditionalRepeat.substring(
            0,
            resultAfterAdditionalRepeat.length -
              summaryOptions.additionSeparator.length
          );
        }
        break;
      case "separator":
        if (summaryOptions.repeatTimes !== undefined) {
          resultAfterAddSeparator += resultAfterAdditional;
          resultAfterAddSeparator += summaryOptions[key];
        }
        break;
      case "additionSeparator":
        if (
          summaryOptions.addition !== "" &&
          summaryOptions.additionRepeatTimes >= 1
        ) {
          resultAfterAdditional += summaryOptions[key].toString();
        }
        break;
      default:
        break;
    }
  }

  return resultFinal || 'TESTstrADD!';
};
