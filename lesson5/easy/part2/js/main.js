// Получить кнопку "Начать расчет" через id
console.log(document.getElementById('start'));

// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
console.log(document.querySelectorAll('.result-table [class*="-value"]'));

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
console.log(document.querySelectorAll('input.expenses-item'));

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let [btn1, btn2, btn3] = document.querySelectorAll('button');
console.log(btn1, btn2, btn3);
// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощиquerySelectorAll
console.log(document.querySelectorAll('input.optionalexpenses-item'));

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
console.log(document.querySelectorAll('input:not([class*="expenses-item"])'));
