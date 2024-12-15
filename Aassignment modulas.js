 let n=566;

let sumofdigits =n.toString().split('').reduce((sum,digit)=>sum + Number(digit),0);
console.log(sumofdigits);
