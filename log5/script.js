func("ACGTGGTCTTAA");

function func(dnk){
    console.log('ДНК: ' + dnk);
    let rnk = '';
    for (let i = 0; i < dnk.length; i++){
        switch (dnk[i]){
            case 'G':
                rnk += 'C';
                break;
            case 'C':
                rnk += 'G';
                break;
            case 'T':
                rnk += 'A';
                break;
            case 'A':
                rnk += 'U';
                break;
            default:
                rnk += '?';
        };
    };
    console.log('РНК: ' + rnk);
};













// func(1,5,0,9,15,9,-3,2,-3,5,2,9);

// function func(...arr){
//     let calc = [], res = [], countNum;
//     console.log('Вход:  ', arr);
//     for (let i = 0; i < arr.length; i++) {  
//         if (arr[i] != null) {
//             countNum = 1;
//             for (let j = i + 1; j < arr.length; j++) {
//                 if (arr[i] == arr[j]) {
//                     countNum++;
//                     arr[j] = null;
//                 };
//             };
//             calc.push([arr[i],countNum]);
//         };
//     };
//     calc.sort(function(a, b){return b[1] - a[1]});
//     calc.forEach(function(item){
//         for(let i = 0; i < item[1]; i++){res.push(item[0])};
//     });
//     console.log('Выход: ', res);
//     return res;
// };