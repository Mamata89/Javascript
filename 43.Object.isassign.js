const target = {a:1, b:2}
const source = {b:3, c:4}

const returnedTarget = Object.assign(target, source)

console.log(returnedTarget)   // {a:1, b:3, c:4}

console.log(target)    //{a:1, b:3, c:4}

console.log(source)     // {b:3, c:4}



var newObj = Object.assign({} , target)

console.log(newObj)  // //{a:1, b:3, c:4}
