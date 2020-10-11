const CustomError = require("../extensions/custom-error");

const chainMaker = {
  data: [],
  getLength() {
    return this.data.length;
  },
  addLink(value) {
    (value === undefined)? this.data.push('(  )'): this.data.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if( position < 0 || position > this.data.length || !Number.isInteger(position)) 
    {
      this.data = [];
      throw new Error();
    }
    this.data = this.data.filter(elem => elem !== this.data[position - 1]);
    return this;

  },
  reverseChain() {
    this.data.reverse()
    return this;
  },
  finishChain() {
    let result = this.data.join('~~');
    this.data = [];
    return result;
  }
}; 

module.exports = chainMaker;
