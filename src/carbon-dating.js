const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693/HALF_LIFE_PERIOD;
  if (Number.isInteger(parseInt(sampleActivity,10))) {
    if (Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k) > 0 && Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k) < HALF_LIFE_PERIOD) {
      return (Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k));
    } else return false; 
  } else return false;
  
};
  