const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 let tempArray = [];
 let sendArray = [];
 for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr) && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev' ) {
     tempArray.push(arr[i]);
   } else if (arr[i] === '--discard-next') {
      
        tempArray.push('undefined', 'undefined');
        i++
      
   } else if (arr[i] === '--discard-prev') { 
      if (i === 0) {
        tempArray.push('undefined');
      } else if (tempArray[tempArray.length-1] === 'undefined') {
        tempArray.push('undefined');
      } else {
        tempArray.pop();
      }
   } else if (arr[i] === '--double-next') {
        if ( i === arr.length-1 && arr[i] === '--double-next') {
          tempArray.push('undefined')
        } else {
        tempArray.push('undefined', arr[i+1], arr[i+1])
        i++;
      }
   } else if (arr[i] === '--double-prev') {
    if (i === 0) {
      tempArray.push('undefined');
    } else if (tempArray[tempArray.length-1] === 'undefined') {
      tempArray.push('undefined');
    }
    else {
      tempArray.push(tempArray[tempArray.length-1]);
    }
   }   
 }
 sendArray = tempArray.filter(el => el !== 'undefined');
 
 return sendArray;
}
