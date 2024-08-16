// filter out even elements

let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr);

function fun(ele) {
    if(ele %2 !=0) {
        return true;
    }
    else {
        return false;
    }
}

let brr = arr.filter(fun);
console.log(brr);