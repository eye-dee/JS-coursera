/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	return hashtags
		.map(toLowerCase)
		.reduce(onlyUnique, [])
		.join(', ')
};

function toLowerCase(hash, indext) {
	return hash.toLowerCase();
}

function onlyUnique(acc, value) { 
    if (acc.indexOf(value) === -1) {
    	acc.push(value);
    }
    return acc;
}