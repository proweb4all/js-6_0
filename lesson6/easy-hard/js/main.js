//'use strict';

let inputs = document.getElementsByTagName('input'),
    inputsNumber = document.querySelectorAll('#expenses_2, #expenses_4, #sum, #percent'),
    startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeExpensesValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[1],
    optionalExpensesBtn = document.getElementsByTagName('button')[2],
    countBtn = document.getElementsByTagName('button')[3],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    
let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

expensesBtn.classList.add("disable");
optionalExpensesBtn.classList.add("disable");
countBtn.classList.add("disable");

// disabled всех inputs
for (elem of inputs){
    elem.disabled = true;
};

console.log(appData);

// Начальный ввод данных
startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
    } while (!inputNum(money));
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = appData.budget.toFixed(2);
    time = new Date(appData.timeData);
    yearValue.value = time.getFullYear();
    monthValue.value = time.getMonth() + 1;
    dayValue.value = time.getDate();
    dayBudgetValue.textContent = '';
    countBtn.disabled = false;
    countBtn.classList.remove("disable");
    for (elem of inputs){
        elem.disabled = false;
    };
});

// Ввод только чисел в числовые поля
for (elem of inputsNumber){
    elem.addEventListener('keyup', function(e){
        this.value = this.value.replace (/\D/, '')
    });
};


// Обязательные расходы вкл/выкл
for (elem of expensesItem){
    elem.addEventListener('input', function(){
        let flag = false;
        for (elem of expensesItem){
            if (elem.value.trim()) {flag = true};
        };
        if (flag) {
            expensesBtn.disabled = false;
            expensesBtn.classList.remove("disable");
        } else {
            expensesBtn.disabled = true;
            expensesBtn.classList.add("disable");
        };
    });
};

// Обязательные расходы
expensesBtn.addEventListener('click', function(){
    let sum = 0,
        expenseItem, 
        expenseAmount;
    for(let i = 0; i < expensesItem.length; i++) {
        expenseItem = expensesItem[i].value;
        expenseAmount = +expensesItem[++i].value;
        if (inputStr(expenseItem, 50) && inputNum(expenseAmount)) {
            appData.expenses[expenseItem] = +expenseAmount;
            sum += +expenseAmount;
        };
    };
    expensesValue.textContent = sum.toFixed(2);
    expensesBtn.disabled = true;
    expensesBtn.classList.add("disable");
    countBtn.disabled = false;
    countBtn.classList.remove("disable");

});

for (elem of optionalExpensesItem){
    // Необязательные расходы вкл/выкл
    elem.addEventListener('input', function(){
        let flag = false;
        for (elem of optionalExpensesItem){
            if (elem.value.trim()) {flag = true};
        };
        if (flag) {
            optionalExpensesBtn.disabled = false;
            optionalExpensesBtn.classList.remove("disable");
        } else {
            optionalExpensesBtn.disabled = true;
            optionalExpensesBtn.classList.add("disable");
        };
    });
    // Ввод только русских букв в необязательные расходы
    elem.addEventListener('keyup', function(e){
        this.value = this.value.replace (/[^а-яА-ЯёЁ]/g, '');
    });
};

// Добавление необязательных статей расходов
optionalExpensesBtn.addEventListener('click', function(){
    optionalExpensesValue.textContent = '';
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        if (inputStr(optionalExpensesItem[i].value, 50)) {
            appData.optionalExpenses[i] = optionalExpensesItem[i].value;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        };
    };
    optionalExpensesBtn.disabled = true;
    optionalExpensesBtn.classList.add("disable");
});

// Расчет дневного бюджета, Определение уровня дохода
countBtn.addEventListener('click', function(){
    if (!appData.budget) {
        return(dayBudgetValue.textContent = 'Ошибка: Не введен доход. Нажмите кнопку "Начать расчет"');
    };
    appData.moneyPerDay = +(appData.budget / 30 - +expensesValue.textContent).toFixed(2);
    dayBudgetValue.textContent = appData.moneyPerDay;
    //console.log('Ваш бюджет на 1 день (30 дней в месяце): ' + appData.moneyPerDay + ' руб.');
    if (appData.moneyPerDay < 500.0) {
        levelValue.textContent = 'Ваш доход на уровне плинтуса';
    } else if (appData.moneyPerDay < 2000) {
        levelValue.textContent = 'Ваш доход средний по стране';
    } else if (appData.moneyPerDay < 15000) {
        levelValue.textContent = 'Вы российский "средний класс" ☺';
    } else if (appData.moneyPerDay >= 15000) {
        levelValue.textContent = 'Вы российский "буржуй" ☺';
    };
    countBtn.disabled = true;
    countBtn.classList.add("disable");
});

// Добавление статей доходов
incomeItem.addEventListener('input', function(){
    appData.income = (incomeItem.value).split(',');
    incomeExpensesValue.textContent = appData.income;
});

// Вкл/Выкл расчета доходов по депозиту
checkSavings.addEventListener('click', function(){
    appData.savings = !appData.savings;
    if (appData.savings) {
        calcSavings();
    } else {
        monthSavingsValue.textContent = '';
        yearSavingsValue.textContent = '';
    }
});
// Добавление суммы депозита, расчет дохода по депозиту
sumValue.addEventListener('input', calcSavings);
// Добавление процента депозита, расчет дохода по депозиту
percentValue.addEventListener('input', calcSavings);
// Расчет доходов по депозиту
function calcSavings(){
    if (appData.savings) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        if (inputNum(sum) && inputNum(percent)) {
            appData.monthIncome = +(sum / 100 / 12 * percent).toFixed(2);
            appData.yearIncome = +(sum / 100 * percent).toFixed(2);
            monthSavingsValue.textContent = appData.monthIncome;
            yearSavingsValue.textContent = appData.yearIncome;
        } else {
            appData.monthIncome = 0;
            appData.yearIncome = 0;
            monthSavingsValue.textContent = appData.monthIncome;
            yearSavingsValue.textContent = appData.yearIncome;
        };
    };
};

// Проверка корректности ввода числа
function inputNum(num){
    if (typeof(num) != null && num != '' && !isNaN(num)) {
        return num;
    } else {
        return (false);
    }; 
};
// Проверка корректности ввода строки 
function inputStr(name, maxLength = 1000){
    if ((typeof(name) != null || name.length > maxLength) && (name != '') && isNaN(name)) {
        return name;
    } else {
        return (false);
    }; 
};