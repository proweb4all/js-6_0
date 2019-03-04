//'use strict';
let money, time;
start();
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

chooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();
console.log(appData);

// Начальный ввод данных
function start(){
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
    } while (!inputNum(money));
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
// Добавление обязательных статей расходов
function chooseExpenses(){
    let i = 1,
        numberExpenses = 2, // количество обязательных статей расходов
        expenseItem, 
        expenseAmount;
    do {
        do {
            expenseItem = prompt('Введите ' + i + '-ю обязательную статью расходов в этом месяце', '');
        } while (!inputStr(expenseItem));
        do {
            expenseAmount = +prompt('Во сколько обойдется?', '');
        } while (!inputNum(expenseAmount));
        appData.expenses[expenseItem] = expenseAmount;
        i++;
    } while ( i <= numberExpenses );
};
// Добавление необязательных статей расходов
function chooseOptExpenses(){
    let i = 1,
        numberOptExpenses = 3, // количество статей расходов
        expenseItem;
    do {
        do {
            expenseItem = prompt('Введите ' + i + '-ю необязательную статью расходов в этом месяце', '');
        } while (!inputStr(expenseItem));
        appData.optionalExpenses[i] = expenseItem;
        i++;
    } while ( i <= numberOptExpenses );
};
// Расчет дневного бюджета
function detectDayBudget(){
    appData.moneyPerDay = Math.round((appData.budget / 30) * 100) / 100;
    alert('Ваш бюджет на 1 день (30 дней в месяце): ' + appData.moneyPerDay + ' руб.');
    console.log('Ваш бюджет на 1 день: ' + appData.moneyPerDay + ' руб.');
};
// Определение уровня дохода
function detectLevel(){
    if (appData.moneyPerDay < 500.0) {
        console.log('Ваш доход на уровне плинтуса');
    } else if (appData.moneyPerDay < 2000) {
        console.log('Ваш доход средний по стране');
    } else if (appData.moneyPerDay < 15000) {
        console.log('Вы российский "средний класс" ☺');
    } else if (appData.moneyPerDay >= 15000) {
        console.log('Вы российский "буржуй" ☺');
    };
}
// Расчет доходов с депозита
function checkSavings(){
    if (appData.savings) {
        let save, persent;
        do {
            save = +prompt('Какова сумма Вашего депозита?');
        } while (!inputNum(save));
        do {
            persent = +prompt('Под какой годовой процент?');
        } while (!inputNum(persent));
        appData.depositIncome = Math.round((save / 100 / 12 * persent) * 100) / 100;
        alert('Месячный доход с Вашего депозита: ' + appData.depositIncome + ' руб.');
        console.log('Месячный доход с Вашего депозита: ' + appData.depositIncome + ' руб.');
    }
}
// Проверка корректности ввода числа
function inputNum(num){
    if (typeof(num) != null && num != '' && !isNaN(num)) {
        return num;
    } else {
        return (false);
    }; 
};
// Проверка корректности ввода строки (статья расходов)
function inputStr(name){
    if ((typeof(name) != null || name.length > 50) && (name != '')) {
        return name;
    } else {
        return (false);
    }; 
};