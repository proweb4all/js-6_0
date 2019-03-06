//'use strict';
let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    // Начальный ввод данных
    start: function(){
        do {
            money = +prompt('Ваш бюджет на месяц?', '');
        } while (!appData.inputNum(money));
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    },
    // Добавление обязательных статей расходов
    chooseExpenses: function(){
        let i = 1,
            numberExpenses = 2, // количество обязательных статей расходов
            expenseItem, 
            expenseAmount;
        do {
            do {
                expenseItem = prompt('Введите ' + i + '-ю обязательную статью расходов в этом месяце', '');
            } while (!appData.inputStr(expenseItem, 50));
            do {
                expenseAmount = +prompt('Во сколько обойдется?', '');
            } while (!inputNum(expenseAmount));
            appData.expenses[expenseItem] = expenseAmount;
            i++;
        } while ( i <= numberExpenses );
    },
    // Добавление необязательных статей расходов
    chooseOptExpenses: function(){
        let i = 1,
            numberOptExpenses = 3, // количество статей расходов
            expenseItem;
        do {
            do {
                expenseItem = prompt('Введите ' + i + '-ю необязательную статью расходов в этом месяце', '');
            } while (!appData.inputStr(expenseItem, 50));
            appData.optionalExpenses[i] = expenseItem;
            i++;
        } while ( i <= numberOptExpenses );
    },
    // Добавление статей доходов
    chooseIncome: function(){
        let itemsIncome, testArr;
        do {
            itemsIncome = prompt('Введите статьи дополнительного дохода (через запятую)', '');
        } while (!appData.inputStr(itemsIncome, 200));
        testArr = itemsIncome.split(',');
        itemsIncome = prompt('Может что-то еще?', '');
        if (itemsIncome) {testArr.push(itemsIncome)};
        testArr.forEach(function(item){
            item = item.trim();
            if (isNaN(item)){
                appData.income.push(item);
            };
        });
        appData.income.sort();
        document.body.innerHTML = 'Способы доп. заработка:<br>';
        console.log('Способы доп. заработка:');
        appData.income.forEach(function(item, i) {
            document.body.innerHTML += (i+1) + ' - ' + item + '<br>';
            console.log((i+1) + ' - ' + item);
        });
    },
    // Расчет дневного бюджета
    detectDayBudget: function(){
        appData.moneyPerDay = Math.round((appData.budget / 30) * 100) / 100;
        alert('Ваш бюджет на 1 день (30 дней в месяце): ' + appData.moneyPerDay + ' руб.');
        console.log('Ваш бюджет на 1 день: ' + appData.moneyPerDay + ' руб.');
    },
    // Определение уровня дохода
    detectLevel: function(){
        if (appData.moneyPerDay < 500.0) {
            console.log('Ваш доход на уровне плинтуса');
        } else if (appData.moneyPerDay < 2000) {
            console.log('Ваш доход средний по стране');
        } else if (appData.moneyPerDay < 15000) {
            console.log('Вы российский "средний класс" ☺');
        } else if (appData.moneyPerDay >= 15000) {
            console.log('Вы российский "буржуй" ☺');
        };
    },
    // Расчет доходов с депозита
    checkSavings: function(){
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
    },
    // Проверка корректности ввода числа
    inputNum: function(num){
        if (typeof(num) != null && num != '' && !isNaN(num)) {
            return num;
        } else {
            return (false);
        }; 
    },
    // Проверка корректности ввода строки (статья расходов)
    inputStr: function(name, maxLength = 1000){
        if ((typeof(name) != null || name.length > maxLength) && (name != '')) {
            return name;
        } else {
            return (false);
        }; 
    },



};

//appData.start();
//appData.chooseExpenses();
//appData.chooseOptExpenses();
//appData.detectDayBudget();
//appData.detectLevel();
//appData.checkSavings();
appData.chooseIncome();
console.log(appData);

console.log('===========================\nНаша программа включает в себя данные:');
for(let item in appData){
    console.log(item);
};