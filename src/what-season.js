module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (typeof (date) != 'object') {
        throw 'Error';
    }

    const monthNum = date.getUTCMonth();

    for (let i = 0; i < 4; i++) {
        if (monthNum == 0 || monthNum == 1 || monthNum == 11) {
            return 'winter';
        } else if (monthNum > 1 && monthNum < 5) {
            return 'spring';
        } else if (monthNum > 4 && monthNum < 8) {
            return 'summer';
        } else if (monthNum > 7 && monthNum < 11) {
            return 'autumn';
        }
    }
};