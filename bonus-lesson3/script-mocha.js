// Функция sum должна возвращать тип данных true. Проверить её на это.
function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.
var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
//console.log(each(arr1, myFunc));


// ============ Тесты Mocha
console.log('===== Тесты Mocha =====');
let assert = require('chai').assert;
describe('Тест1', function(){
    it ('Функция sum возвращает True.', function(){
        assert.typeOf(sum(2, 2), 'true');
    });
});
describe('Тест2', function(){
    it ('Переменная num = 5.', function(){
        assert.equal(num, 5);
    });
});
describe('Тест3', function(){
    it ('Функция each возвращает array', function(){
        assert.typeOf(each(arr1, myFunc), 'array');
	});
    it ('Функция each возвращает array[8, 7, 6, 5, 4]', function(){
        assert.sameOrderedMembers(each(arr1, myFunc), [8, 7, 6, 5, 4]);
    });
    it ('Функция each возвращает array длиной 5', function(){
        assert.equal(each(arr1, myFunc).length, 5);
    });
});
