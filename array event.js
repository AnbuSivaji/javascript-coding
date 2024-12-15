let arr = [1, 34, 5, 2, 10, 7];


let evenSum = arr.filter((num) => num % 2 === 0) .reduce((acc, num) => acc + num, 0); 


console.log(evenSum); 
