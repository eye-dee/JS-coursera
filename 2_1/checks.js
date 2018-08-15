// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./index.js');

assert.deepEqual(
    getHashTags('Прохожу курс на #coursera по #javascript'),
    ['coursera', 'javascript'],
    'Строка "Прохожу курс на #coursera по #javascript"' +
    ' должна содержать хэштеги "coursera, javascript", а не ' + getHashTags('Прохожу курс на #coursera по #javascript')
);

assert.deepEqual(getHashTags('asdas dasd asd asda sda sda sdas dasd asd asd asd a'), [], 'should be empty')
assert.deepEqual(getHashTags('#asdas #dasd #asd #asda #sda #sda #sdas #dasd #asd #asd #asd #a'), 
	['asdas', 'dasd', 'asd', 'asda', 'sda', 'sda', 'sdas', 'dasd', 'asd', 'asd', 'asd' ,'a'], 'should be empty')

console.info('OK!');
