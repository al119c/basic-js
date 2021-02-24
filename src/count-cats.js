const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let cats = 0;

    for (let i of matrix) {
        for (let j of i) {
            if (j == '^^') {
                cats++;
            }
        }
    }
    return cats;
};