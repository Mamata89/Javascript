
// To find key and value pairs
var person = {
    "name"  : "John",
    "age" : 20

}

for(key in person){
    console.log(key + "-" + person[key])
}

// to find number of parameters in 

function sum(num1, num2 , num3){ 
    return num1 + num2 + num3
}

console.log(sum(1,2,3))     // 6

console.log(sum.length)    // 3
