const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if (Array.isArray(members)) {
  for (let i = 0; i < members.length; i++) {
    
    let name = "";
    if (members[i] != null && typeof members[i] === "string" && typeof members[i] !== "undefined") {
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][j] !== " ") {
          name = name + members[i][j];
        }
    }
    arr.push(name[0].toUpperCase());
    }
  }
return(arr.sort().join(''));
} else return false;
};
