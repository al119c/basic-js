const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
// function repeater(str, options) {
  str = str + '';
  let repeatTimes = (options.repeatTimes || 1),
      separator = (options.separator || '+'),
      addition = (options.addition || '') + '',
      additionSeparator = (options.additionSeparator || '|'),
      additionRepeatTimes = (options.additionRepeatTimes || 1);
  
  let arr = [],
      additionArr = [];
  
      for (let i = 0; i < repeatTimes; i++) {
        arr.push(str);
    }

    if (addition !== undefined) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          additionArr.push(addition);
        }
    }

    return arr.map((e) => e + additionArr.join(additionSeparator)).join(separator);
};