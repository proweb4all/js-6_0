//'use strict';
let i, j, dividers, maxNum = 100;
console.log('Простые числа в диапазоне от 1 до ' + maxNum + ":")
console.log('1. Делители: 1.');
for (i = 2; i <= maxNum; i++){
    dividers = [];
    for (j = 1; j <= i; j++){
        if (!(i % j)) {
            dividers.push(j);
        };
    };
    if (dividers.length == 2) {
        console.log(i + '. Делители: ' + dividers[0] + ' и ' + dividers[1] + '.')
    };
};