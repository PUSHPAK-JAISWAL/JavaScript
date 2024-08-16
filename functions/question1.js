// write a code to generate a random number between 0 and 9

function random0to9() {
    return Math.floor(Math.abs(Math.random()*10));
}

console.log(random0to9());