'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenseItem = prompt('Введите 1-ю обязательную статью расходов в этом месяце', '');
let expenseAmount = +prompt('Во сколько обойдется?', '');
appData.expenses = {
    [expenseItem]: expenseAmount
};

expenseItem = prompt('Введите 2-ю обязательную статью расходов в этом месяце', '');
expenseAmount = +prompt('Во сколько обойдется?', '');
appData.expenses[expenseItem] = expenseAmount;

console.log(appData);
alert('Ваш бюджет на 1 день (30 дней в месяце): ' + (appData.budget / 30) + ' рублей');
