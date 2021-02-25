const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chainArr: [],

    getLength() {
        return this.chainArr.length;
    },
    addLink(value) {
        this.chainArr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.chainArr.length || !Number.isInteger(position)) {
            this.chainArr = [];
            throw 'Error';
        } else {
            this.chainArr.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.chainArr.reverse();
        return this;
    },
    finishChain() {
        let chainStr = this.chainArr.join('~~');
        this.chainArr = [];
        return chainStr;
    }
};

module.exports = chainMaker;