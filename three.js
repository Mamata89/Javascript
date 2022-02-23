//Example 01: Variable Hoisting
 
console.log(message); // output : undefined
var message = "The variable Has been hoisted";

 //The above code looks like as below to the interpreter,
        //  var message;
        //  console.log(message);
        //  message = "The variable Has been hoisted";


//Example 02: Function Hoisting
console.log(sum(2,3))
function sum(a,b){
    return a + b
}


function hoist(){
    a = 20
    var b = 30
}
hoist()

/* 
Accessible as a global variable outside hoist() function
Output: 20
*/   
console.log(a)   // 20


/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/
console.log(b)  // ReferenceError: b is not defined



console.log(c)
let c = 101;    // ReferenceError: c is not defined