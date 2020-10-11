const CustomError = require("../extensions/custom-error");

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  constructor(isReverse) {
    if (isReverse === undefined) {
        this.isReverse = true;
    } else {
        this.isReverse = isReverse;
    }
}
encrypt(message, key) {
  if (!message || !key) throw new Error();

  let messageUpper = message.toUpperCase();
  let messageKey = key.toUpperCase();
  let cypherMessage = [];
  let j = 0;
  for (let i = 0; i < message.length; i++) {
    if (alphabet.indexOf(messageUpper[i]) < 0) {
      cypherMessage.push(messageUpper[i]);
   }
      else {
      cypherMessage.push(alphabet[(alphabet.indexOf(messageUpper[i])+alphabet.indexOf(messageKey[j % messageKey.length]))%26])
      j++;
    }
    
  }
  return this.isReverse ? cypherMessage.join('') : cypherMessage.reverse().join('');
}

decrypt(encryptedMessage, key) {
  if (!encryptedMessage || !key) throw new Error(); 

  let encryptedUpper = encryptedMessage.toUpperCase();
  let encryptKey = key.toUpperCase();
  let decryptedMessage = [];
  let j = 0;
  for (let i = 0; i < encryptedMessage.length; i++) {
     if (alphabet.indexOf(encryptedUpper[i]) < 0) {
        decryptedMessage.push(encryptedUpper[i]);
     }
       else { 
        if ((alphabet.indexOf(encryptedUpper[i])-alphabet.indexOf(encryptKey[j % encryptKey.length]))%26 < 0) {
          decryptedMessage.push(alphabet[(alphabet.indexOf(encryptedUpper[i])-alphabet.indexOf(encryptKey[j % encryptKey.length]))%26 + 26])
          j++;
        } else {
          decryptedMessage.push(alphabet[(alphabet.indexOf(encryptedUpper[i])-alphabet.indexOf(encryptKey[j % encryptKey.length]))%26])
          j++;
        }
      
     }
     
   }
   return this.isReverse ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
}
}

module.exports = VigenereCipheringMachine;
