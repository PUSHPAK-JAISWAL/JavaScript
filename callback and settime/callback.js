// callback function is passed inside a function

function Product(a,b,c) {// this is made a function made to return the product of the 
    return a*b*c;
}

function fun(x,y) {
    let a = x(2,5,4)
    console.log(a-y);
}

fun(Product,7);