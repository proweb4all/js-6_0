//'use strict';

let data = new Date(),
    year = data.getFullYear(),
    month = data.getMonth(),
    day = data.getDate(),
    hour = data.getHours(),
    minutes = data.getMinutes(),
    seconds = data.getSeconds();
let strDate = addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + addZero(day) + '.' + addZero(month) + '.' + year;
document.getElementById('now').textContent += strDate;
document.getElementById('today').textContent += dayOfWeek(data);
printDiffDay();

function printDiffDay(){
    let inputs = document.querySelectorAll('input[type="date"]');
    let period = document.querySelector('#period');
    inputs.forEach(function(item){
        item.value = (year + '-' + addZero(month) + '-' + addZero(day));
        item.oninput = function() {
            period.textContent = getDiffDate(inputs[0].value, inputs[1].value);
        };
    });
};

function dayOfWeek(data){
    let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return week[data.getDay()];
};

function addZero(num){
    if (String(num).length == 1) {num = '0' + num;};
    return num;
};

function getDiffDate(date1, date2){
    date1 = new Date(date1);
    date2 = new Date(date2);
    return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
};