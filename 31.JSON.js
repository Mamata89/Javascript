var userJson  = {"name" : "john", age:31}

var userString = JSON.stringify(userJson)

console.log(userString)   // {"name":"john","age":31}   => In string format


var userString  = '{"name":"john" , "age" : 31}'

var userJSON = JSON.parse(userString)

console.log(userJSON)   // {name: 'john', age: 31}'









