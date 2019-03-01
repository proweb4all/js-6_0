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
// for (let i = 1; i < 3; i++){
//     expenseItem = prompt('Введите ' + i + '-ю обязательную статью расходов в этом месяце', '');
//     expenseAmount = +prompt('Во сколько обойдется?', '');
//     // console.log('шаг ', i);
//     // console.log('expenseItem ', expenseItem);
//     // console.log('expenseAmount ', expenseAmount);
//     if ((typeof(expenseItem) != null || expenseItem.length > 50) && (typeof(expenseAmount) != null) && (expenseItem != '') 
//         && (expenseAmount != '')){      // && (expenseItem.length < 50)
//             appData.expenses[expenseItem] = expenseAmount;
//     } else {
//         i--;
//     };
// };

// let i = 1;
// while ( i < 3 ){
//     expenseItem = prompt('Введите ' + i + '-ю обязательную статью расходов в этом месяце', '');
//     expenseAmount = +prompt('Во сколько обойдется?', '');
//     // console.log('шаг ', i);
//     // console.log('expenseItem ', expenseItem);
//     // console.log('expenseAmount ', expenseAmount);
//     if ((typeof(expenseItem) != null || expenseItem.length > 50) && (typeof(expenseAmount) != null) && (expenseItem != '') 
//         && (expenseAmount != '')){      // && (expenseItem.length < 50)
//             appData.expenses[expenseItem] = expenseAmount;
//             i++;
//     };
// };

let i = 1;
do {
    expenseItem = prompt('Введите ' + i + '-ю обязательную статью расходов в этом месяце', '');
    expenseAmount = +prompt('Во сколько обойдется?', '');
    // console.log('шаг ', i);
    // console.log('expenseItem ', expenseItem);
    // console.log('expenseAmount ', expenseAmount);
    if ((typeof(expenseItem) != null || expenseItem.length > 50) && (typeof(expenseAmount) != null) && (expenseItem != '') 
        && (expenseAmount != '')){      // && (expenseItem.length < 50)
            appData.expenses[expenseItem] = expenseAmount;
            i++;
    };
} while ( i < 3 );


appData.moneyPerDay = Math.round((appData.budget / 30) * 100) / 100;
alert('Ваш бюджет на 1 день (30 дней в месяце): ' + appData.moneyPerDay + ' рублей');
console.log('Ваш бюджет на 1 день: ' + appData.moneyPerDay + ' рублей');
//console.log(appData);
//console.log(typeof(appData.moneyPerDay), appData.moneyPerDay);

if (appData.moneyPerDay < 500.0) {
    console.log('Ваш доход на уровне плинтуса');
} else if (appData.moneyPerDay < 2000) {
    console.log('Ваш доход средний по стране');
} else if (appData.moneyPerDay < 15000) {
    console.log('Вы российский "средний класс" ☺');
} else if (appData.moneyPerDay >= 15000) {
    console.log('Вы российский "буржуй" ☺');
};
