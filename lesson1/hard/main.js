'use strict';

let num = 33721,
    multiNums = 1;

console.log('Исходное число: ', num);
while (num > 0){
    multiNums *= num % 10;
    num = Math.floor(num/10);
};

console.log('Произведение цифр исходного числа: ', multiNums);
console.log('Куб произведения цифр: ', multiNums**3);
console.log('Две левые цифры от куба произведения цифр: ', String(multiNums**3).substr(0,2));

