//first class function

//  functions and objects are treated as the same thing. 
//Functions can be stored as a variable inside an object or an array as well as it can be passed as an argument or be returned by another function. That makes function "first-class citizens in JavaScript"

// Example: Assign a function to a variable
        var message = function(){
            console.log("Hello World")
        }
        console.log(message())      // // Invoke it using the variable

// Example: Pass a function as an Argument

        function sayHello(){
            return 'Hello'
        }

        function greeting(helloMessage, name){
            return `${helloMessage()} ${name}`
        }
        console.log(greeting(sayHello, "Mamata"))  // Hello Mamata

// Example: Return a function
        function sayHello1(){
            return function(){
                console.log("Helloo")
            }
        }
        console.log(sayHello1()) 

// Example: Using double parentheses
        function sayHello1(){
            return function(){
                console.log("Helloo")
            }
        }
        console.log(sayHello1()())     // Hellloooo

// Example: Using a variable

        const disp = function sayHi(){
            return function(){
                return "Hiiiiiiiiiii"
            }
        }

        const myFunc = disp()
        console.log(myFunc())  // Hiiiiiiiiiii

