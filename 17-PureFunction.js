// Pure Function  : Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects). Its output or return value must depend on the input/arguments and pure functions must return a value.

function impure(arg){
    a= 10
    return arg * 10         // not a pure function because it modified a aoutside its scope.
}

function pure(arg){
    return arg * 4          //  is a pure function. It didn’t side effect any external state and it returns an output based on the input.
}

// 1. Same Input => Same Output

// Compare this:

        const add = (x,y) => x + y
        console.log(add(2,4))   //  returns a value based on the given parameters, regardless of where/when you call it.Always 6   // If you pass 2 and 4, you’ll always get 6.

        // Input => 2 & 4  => Same input Same output

// to This
        let x= 2
        const add = (y) => x += y
        console.log(add(2))    /// x === 6 (for First Time)

        // X value got changed

