var house = {
    color:"brown",
    size:"huge"
}

console.log(house.prototype)  // undefined

console.log(house.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


function sum(a,b){
    return a + b 
}

console.log(sum.__proto__)  // ƒ () { [native code] }

console.log(sum.prototype)   // {constructor: ƒ}