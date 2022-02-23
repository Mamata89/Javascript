function sum(...args){

    let sum = 0
    for(let i of args){
        sum += i
    }
    return sum

}


console.log(sum(1,2))   // 3

console.log(sum(1,2,3)) // 6

console.log(sum(1,2,3,4))  // 10