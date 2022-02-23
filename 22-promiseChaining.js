//Prmoise Chaining : A process of executing sequence of asyncronous tasks one after the another using Prmoises.

new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000)
}).then(function(result){
    console.log(result)  // 1
    return result * 2
}).then(function(result){
    console.log(result)  // 2 => 1 * 2
    return result * 3
}).then(function(result){
    console.log(result)  // 6  => 2 * 3
})