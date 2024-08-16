// Object is kind of like map/dictionary
// where we have key value pairs

var detials = ["Pushpak", 24,98,false];

let x = {
    name: "Pushpak",
    age : 19,
    percentage : 98,
    isMarried : false,
    "String Key": true
};

console.log(x.age,x.isMarried,x.name,x.percentage);
console.log(x["String Key"]);

x.name = "Pushpak Jaiswal";
console.log(x.name);