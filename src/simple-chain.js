const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isNaN(position) && position <= this.result.length) {
      this.result.splice(position - 1, 1);
      return this;
    } else {
      this.result = [];
      throw new Error();
    }
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    let finish = this.result;
    this.result = [];

    return finish.join("~~");
  },
};

module.exports = chainMaker;
