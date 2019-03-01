//'use strict';

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

let expenseItem, 
    expenseAmount;
for (let i = 1; i < 3; i++){
    expenseItem = prompt('Введите ' + i + '-ю обязательную статью расходов в этом месяце', '');
    expenseAmount = +prompt('Во сколько обойдется?', '');
    // console.log('шаг ', i);
    // console.log('expenseItem ', expenseItem);
    // console.log('expenseAmount ', expenseAmount);
    if ((typeof(expenseItem) != null) && (typeof(expenseAmount) != null) && (expenseItem != '') 
        && (expenseAmount != '')){      // && (expenseItem.length < 50)
            appData.expenses[expenseItem] = expenseAmount;
    } else {
        i--;
    };
};

appData.moneyPerDay = Math.round((appData.budget / 30) * 100) / 100;
alert('Ваш бюджет на 1 день (30 дней в месяце): ' + appData.moneyPerDay + ' рублей');

//console.log(appData);
//console.log(typeof(appData.moneyPerDay), appData.moneyPerDay);

if (appData.moneyPerDay < 250.0) {
    console.log('Ваш доход ниже плинтуса');
} else if (appData.moneyPerDay < 1000) {
    console.log('Ваш доход средний по стране');
} else if (appData.moneyPerDay < 10000) {
    console.log('Вы российский "средний класс"');
} else if (appData.moneyPerDay >= 10000) {
    console.log('Вы российский "буржуй" ;)');
};
