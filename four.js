function closureFunc(name){
    var display = function(message, age){
        console.log(message + ' ' + name + " and age is " + age)
    }

    return display
}

var myFunction = closureFunc("Mamata")

myFunction("Hello", 30)