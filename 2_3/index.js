// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	var parsedCommands = command.split(' ');

	var mainCommand = parsedCommands[0];

	if (mainCommand == 'ADD') {
		addBook(parsedCommands[1], parsedCommands[2]);
	} else if (mainCommand == 'SHOW') {
		return show();
	} else if (mainCommand == 'REMOVE_PHONE') {
		return removePhone(parsedCommands[1])
	}
};

function removePhone(number) {
	var flag = false;

	var keys = Object.keys(phoneBook);

	for (var i = keys.length - 1; i >= 0; i--) {
		var key = keys[i];
		var phones = phoneBook[key];

		var index = phones.indexOf(number);
		if (index > -1) {
		  phones.splice(index, 1);
		  if (phones.length == 0) {
		  	delete phoneBook[key];
		  }
		  flag = true;
		}
	
	}

	return flag;
}

function addBook(name, numbers) {
	if (!phoneBook.hasOwnProperty(name)) {
		phoneBook[name] = [];
	}
	var arr = numbers.split(',');

	for (var i = 0; i < arr.length ; i++) {
		phoneBook[name].push(arr[i]);
	}
}

function show() {
	var result = [];
	var keys = Object.keys(phoneBook);

	for (var i = keys.length - 1; i >= 0; i--) {
		var key = keys[i];

		phones = phoneBook[key]
			.join(', ');

		result.push(key + ': ' + phones);
	}

	return result;
}

