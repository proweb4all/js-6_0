let obj = {
    1: 111,
    2: 222,
    3: 333
};
let arr = [111, 222, 333];

console.log('- in arr ----------------');
for (let key in arr){
    console.log(key);
};
console.log('- of arr ----------------');
for (let key of arr){
    console.log(key);
};
console.log('- in obj ----------------');
for (let key in obj){
    console.log(key);
};
console.log('- of obj ----------------');
for (let key of obj){
    console.log(key);
};