// Object is kind of like map/dictionary
// where we have key value pairs

var detials = ["Pushpak", 24,98,false];

let x = {
    name: "Pushpak",
    age : 19,
    percentage : 98,
    isMarried : false
};

for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
        console.log(key,x[key]);
        
    }
}

console.log();

for (const key in x) {
    console.log(key,x[key]);
}