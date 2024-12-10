let x=56;
let y=0;

function gcd(x,y){
    let res= Math.min(x,y);

    while(res>0){
        if(x%res == 0 && y%res==0){
            break;
        }

        res--;
    }

    return res;
}

console.log(gcd(x,y));