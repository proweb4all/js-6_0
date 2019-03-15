const inp = [[1, 2, 3], ['a', 'b', 'c']];
console.log(inp);
const func = arr => arr[0].map((col, i) => arr.map(row => row[i]));
const res = func(inp);
console.log(res);