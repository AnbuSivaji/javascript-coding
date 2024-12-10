let n=1234;


let num =0;

while(n>0){
    num+=n%10;
    n=Math.floor(n/10);
}
console.log(num);