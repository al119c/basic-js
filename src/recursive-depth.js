const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;

        for (let i = 0; i < arr.length; i++) {
            let check = 1;
            if (Array.isArray(arr[i])) {
                check = check + this.calculateDepth(arr[i]);
                if (check > depth) {
                    depth = check;
                }
            }
        }
        return depth;
    }
};