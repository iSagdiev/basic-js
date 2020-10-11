const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!str && typeof str == 'object') {
    str = "null";
  } else str.toString();
  if (!options.addition && typeof options.addition == 'object') {
    options.addition = "null";
  } else if (typeof options.addition !== "undefined") {
      options.addition.toString();
    } else options.addition = "";
  let finalString = '';
  if (Number.isInteger(options.repeatTimes) && typeof options.repeatTimes !== "undefined") {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (typeof options.separator !== "undefined") {
        if (i === options.repeatTimes - 1) {
          finalString = finalString + str + additionString(options.addition, options.additionSeparator, options.additionRepeatTimes) }
        else {
          finalString = finalString + str + additionString(options.addition, options.additionSeparator, options.additionRepeatTimes) + options.separator;
        }  
      } else {
        if (i === options.repeatTimes - 1) {
          finalString = finalString + str + additionString(options.addition, options.additionSeparator, options.additionRepeatTimes);
        } else {
          finalString = finalString + str + additionString(options.addition, options.additionSeparator, options.additionRepeatTimes) + "+";
        };
      }
    }
  } else return str + additionString(options.addition, options.additionSeparator, options.additionRepeatTimes);
  return finalString;
};

function additionString (additionalString, additionSeparator, timesToRepeat) {
  let finalAdditionalString = '';
  if (Number.isInteger(timesToRepeat) && typeof timesToRepeat !== "undefined") {
    for (let i = 0; i < timesToRepeat; i++) {
      if (typeof additionSeparator !== "undefined") {
        if (i === timesToRepeat - 1) {
          finalAdditionalString = finalAdditionalString + additionalString;
        } else {
          finalAdditionalString = finalAdditionalString + additionalString + additionSeparator;
        }        
      } else {
        finalAdditionalString = finalAdditionalString + additionalString;
      }
    }
  } else return additionalString;
  return finalAdditionalString;
}