//Global Variable: 

var x = 5

function display(y){
    var z = x + y
    console.log(z)  
}

console.log(display(5))  // 10

console.log(x)   //5



var x = 5 

function disp(y){
    x = 1
    var z = x + y
    return z
}
console.log(disp(10))  // 11
console.log(x)        // 1


var x = 5 

function disp1(y){
    var x = 3 
    var z = x + y
    return z
}

console.log(disp1(10))  // 13
console.log(x)          // 5


var dog = "fluffy"
console.log(dog)        // flufyy

console.log(window.dog) // fluffy