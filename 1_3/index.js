/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	minutes += interval;
	var newMinutes = minutes % 60;
	var addHours = Math.floor(minutes / 60);
	hours += addHours;

	hours = hours - Math.floor(hours / 24) * 24;

	return "" + doubleIfNeed(hours) + ":" + doubleIfNeed(newMinutes);
};


function doubleIfNeed(number) {
	if (number < 10) {
		return "0" + number;
	} else {
		return number;
	}
}