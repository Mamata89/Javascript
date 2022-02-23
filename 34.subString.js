// How do you check whether a string contains a substring?

var mainString = "hello"
var subStr="hell"

// 1. Using includes()

console.log(mainString.includes(subStr))  // true 

//2. Using indexOf()
console.log(mainString.indexOf(subStr) !== -1)  // true

//3.  using regex

var mainString = "hello", regex = "/hell/";
regex.test(mainString)
    