// ============ Тесты Jest
const scriptIn = require('./script');

describe('Тест1.', () => {
    test('Функция sum возвращает True.', () => {
        expect(scriptIn.sum).toEqual(true);
    });
});
describe('Тест2.', () => {
    test('Переменная num = 5.', () => {
        expect(scriptIn.num).toBe(5);
    });
});
describe('Тест3.', () => {
    test('Функция each возвращает array (object)', () => {
        expect(typeof(scriptIn.arr)).toEqual('object');
    });
    test('Функция each возвращает array[8, 7, 6, 5, 4]', () => {
        expect(scriptIn.arr).toEqual([8, 7, 6, 5, 4]);
    });
    test('Функция each возвращает array длиной 5', () => {
        expect(scriptIn.arr.length).toBe(5);
    });
});
