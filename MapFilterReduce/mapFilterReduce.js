function twice(x) {
    return 2*x;
}

function square(x) {
    return x**2;
}

function add10(x) {
    return x+10;
}

let arr = [1,6,3,8];
console.log(arr);

let brr = arr.map(add10);
console.log(brr);