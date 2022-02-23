//call, apply, bind


// Call  => The call() method invokes a function with a given this value and arguments provided one by one
var emp1 = {firstName: "Mamata", lastName:"Moger"}
var emp2 = {firstName:"Komala", lastName:"Moger"}

function invite(greeting1, greeting2){
    return `${greeting1}, ${this.firstName} ${this.lastName}, ${greeting2}`
}

console.log(invite.call(emp1, "Hello", "How are you"))      // Hello, Mamata Moger, How are you

console.log(invite.call(emp2, "Hello", "How are you"))      // Hello, Mamata Moger, How are you

//apply => invkoes a function with the this value and arguments in an array

console.log(invite.apply(emp1,["Hello","How are you"]))     // Hello, Mamata Moger, How are you

console.log(invite.apply(emp2,["Hello","How are you"]))     // Hello, Mamata Moger, How are you

//bind  => returns a new function, allowing you to pass in an array and any number of arguments

console.log(invite.bind(emp1, "Hello", "How are you"))   // [Function: bound invite]

console.log(invite.bind(emp2, "Hello", "How are you"))  // [Function: bound invite]

var inviteEmp1 = invite.bind(emp1)
var inviteEmp2 = invite.bind(emp2)

console.log(inviteEmp1("Hello", "How are you"))    //  Hello, Mamata Moger, How are you

console.log(inviteEmp2("Hello", "How are you"))     // Hello, Mamata Moger, How are you