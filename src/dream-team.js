module.exports = function createDreamTeam(members) {
    let teamNameArr = [];

    if (Array.isArray(members)) {
        for (let i = 0; i < members.length; i++) {
            if (typeof (members[i]) == 'string') {
                teamNameArr.push(members[i].trim()[0].toUpperCase());
            }
        }
        return teamNameArr.sort().join('');
    } else {
        return false;
    }
};