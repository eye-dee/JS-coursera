/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
	var result = collection;
	var functions = [].slice.call(arguments).slice(1);

	functions.filter(func => func.name === 'filtering').forEach(func => {
		result = result.filter(func);
	});

	functions.filter(func => func.name === 'selection').forEach(func => {
		result = result.map(func);
	});

	return result;
}

/**
 * @params {String[]}
 */
function select() {

	var properties = [].slice.call(arguments);
	return function selection(value, index) {
		var res = {};
		for (var i = properties.length - 1; i >= 0; i--) {
			var prop = properties[i];
			
			if (value[prop]) {
				res[prop] = value[prop];
			}
		}

		return res;
	}
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	return function filtering(value, index) {
		return values.indexOf(value[property]) != -1;	
	}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
