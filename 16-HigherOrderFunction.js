// Higher order function  :  It is a function that receives a function as an argument or returns the function as output.

 //Examples: map, filter, reduce

 const arr1 = [1,2,3]

 const arr2 = arr1.map(function(ele) {
    return ele * 2
 })

 console.log(arr2)  // [2,4,6]


 // Unary Function  : Unary function (i.e. monadic) is a function that accepts exactly one argument

 const unaryFunction = a => {return a + 10}; console.log(unaryFunction(0))      // 10

 // currying function : Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.


function volume(width){
    return function(height){
        return function(length){
            return width * height * length
        }
    }
}
 
console.log(volume(2)(3)(4))   // 24