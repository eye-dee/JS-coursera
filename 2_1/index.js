/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	return tweet.split(" ")
		.filter(isHashtag)
		.map(skipHash);
};

function isHashtag(word, index) {
	return word.startsWith("#");
}

function skipHash(word, index) {
	return word.slice(1, word.length);
}