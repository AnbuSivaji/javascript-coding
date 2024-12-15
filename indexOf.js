let arr1=[10,3,4,2,17,89,12];
n1=5;

function findIndex(arr,n){
    let index=arr.indexOf(n);
    if(index=== -1){
        return "not found";
    }else{
        return index;
    }
}
console.log(findIndex(arr1,n1));
