const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth (arr, depth = 1) {
    this.depth = depth;
    
    for (let i = 0; i <= arr.length - 1; i++) {
      if (Array.isArray(arr[i])) {
        this.depth++;
        return this.calculateDepth(arr.flat(), this.depth);
      } 
    }
    
    return this.depth;
  }
};