var ws = new WeakSet()
var user = {name:"mamata"}

ws.add(user)
  
console.log(ws.has(user))   // true

console.log(ws.delete(user))  // true

console.log(ws.has(user))    // false


var weakSetObject = new WeakSet();
var firstObject = {};
var secondObject = {};
// add(value)
weakSetObject.add(firstObject);
weakSetObject.add(secondObject);
// console.log(weakSetObject.length()); // 2
