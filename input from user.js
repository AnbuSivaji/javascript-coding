let str = "itvedant";


let vowels = "aeiou";
let increament =0;

let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
    let char =str[i].toLowerCase();
  if (char >='a'&& char <='z' && vowels.indexOf(char)=== -1) {
    increament++;
  }
}

console.log(increament);
