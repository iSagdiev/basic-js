const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let totalNum = 0;
  for(let i=0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        totalNum++;
      }
    }
  }
  return totalNum;
};
