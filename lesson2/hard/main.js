//'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница',
            'Суббота', 'Воскресенье'];
week.forEach(function(item, i) {
    switch (i) {
        case 4: 
            document.body.innerHTML += '<i>' + item + '</i><br>';
            break;
        case 5: 
        case 6: 
            document.body.innerHTML += '<b>' + item + '</b><br>';
            break;
        default:
            document.body.innerHTML += item + '<br>';
    };
});

let arr = ['176547', '25426', '368976', '490970', '576978', '6899', '774586'];
arr.forEach(function(item) {
    if (item[0] == '3' || item[0] == '7') console.log(item);
});