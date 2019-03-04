//'use strict';

let str = 'урок-3-был слишком легким';

/* 1 */
str = str[0].toUpperCase() + str.substring(1);
console.log('П.1: ', str);

/* 2 */
str = str.replace(/-/g, ' ');
console.log('П.2: ', str);

/* 3 */
let str1 = 'легким';
pos = str.indexOf(str1);
str = str.replace(/легким/g, '');
console.log('П.3: ', str);
str1 = str1.substr(0, 4) + 'о';
console.log(str1);

/* 4 */
arr = [20, 33, 1, 'Человек', 2, 3];
result = 0;
arr.forEach(function(item, i) {
    if (typeof item == 'number' && !isNaN(item)){result += item**3;};
});
result = Math.sqrt(result);
console.log('П.4: ', result);

/* 5 */
//str = 5;
str = '  lorem дыафджлдэф sa gsg estg tsd g etg et пев sg dsg sdeg wrgt ewr gte wg ewgedt     ';
function trimStr(str){
    if (typeof str == 'string'){
        str = str.trim();
        if (str.length > 50) {str = str.substr(0, 50) + '...';};
    } else {
        str = 'Ошибка! В функцию передана на строка.';
    };
    return str; 
};
console.log('П.5: ', trimStr(str));