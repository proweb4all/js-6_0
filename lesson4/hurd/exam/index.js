module.exports = {
    firstName: 'Yury',
    secondName: 'Taratov',
    task: getFriendlyNumbers
}

//console.log(getFriendlyNumbers(280, 1500));

function getFriendlyNumbers(start, end) {
    if (!(((start ^ 0) === start) && (start > 0) && (!isNaN(start) === true)
          && ((end ^ 0) === end) && (end > 0) && (!isNaN(end) === true) && (start <= end))) {
        return false;
    };
    let arrRes = arrFriendlyNumbers(end),
    arrResult = [];
    if (arrRes.length > 0) {
        let flag;
        arrRes.forEach(function(arr1){
            flag = true;
            arr1.forEach(function(num){
                if ((num < start) || (num > end)){
                    flag = false;
                };
            });
            if (flag) {
                arrResult.push(arr1.sort());
            };        
        });
    };
    arrResult.sort(function(a, b){return a[0] - b[0];});
    return arrResult;
};

function arrFriendlyNumbers(max, include1 = true) {
    var res = [];
    var allNumbers = {'1': +include1};
    var allNumbersTiny = null, limit = 100, tinyLimit = 0; //Для оптимизации поиска
    var numbers = allNumbers;
    for(simple = 2; simple <= max / 2; simple++) {
        if(simple in allNumbers) continue;
        if(simple >= limit) {
            var tinyLimitNew = Math.floor((max + 100) / simple);
            if(!allNumbersTiny) {
                allNumbersTiny = {};
                for(var i = 1; i <= tinyLimitNew; i++) allNumbersTiny[i] = allNumbers[i];
                numbers = allNumbersTiny;
            } else {
                for(var i = tinyLimitNew + 1; i <= tinyLimit; i++) delete allNumbersTiny[i];
            };
            tinyLimit = tinyLimitNew;
            limit += 100;
        };
        for(k in numbers) {
            var product = k * simple;
            if(product > max) break;
            var prevSum = numbers[k] - include1, currSum = prevSum, prevProduct = +k;
            var currPow = simple, sum;
            while(product <= max) {
                if(k == 1) {
                    currSum += currPow === simple ? 0 : prevProduct;
                }  else {
                    currSum += prevProduct + currPow + currPow * prevSum;
                };
                prevProduct = product;
                sum = currSum + +include1;
                allNumbers[product] = sum;
                if(sum !== product && allNumbers[sum] === product) res.push([product, sum]);
                if(product <= tinyLimit) allNumbersTiny[product] = sum;
                currPow *= simple;
                product *= simple;
            };
        };
    };
    return res;
};