  
const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;

    if (!Array.isArray(arr)) {
      return 0;
    }

    for (let i = 0; i < arr.length; i++) {
      let k = this.calculateDepth(arr[i]);
      k > maxDepth ? (maxDepth = k) : '';
    }

    return maxDepth + 1;
  }
};
