
function swapElements(arr){
    if(arr.length===2){
        return [arr[1],arr[0]];

    }else{
        return "Input array must contain exactly two elements."
    }
}

console.log(swapElements(arr));
