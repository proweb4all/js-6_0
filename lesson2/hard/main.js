//'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let today = new Date().getDay();
let currentDay;
week.forEach(function(item, i) {
    currentDay = item;
    if (i == today) currentDay = '<i>' + currentDay + '</i>';
    if (i == 0 || i == 6) currentDay = '<b>' + currentDay + '</b>';
    document.body.innerHTML += currentDay + '<br>';
});

let arr = ['176547', '25426', '368976', '490970', '576978', '6899', '774586'];
arr.forEach(function(item) {
    if (item[0] == '3' || item[0] == '7') console.log(item);
});

// Пример с форматированным текстом в одной строковой переменной, сохраню здесь )
let tt = "\nRoses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I.";
console.log(tt);