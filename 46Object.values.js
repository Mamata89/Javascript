const object1 = {
    a: 'somestring',
    b: 42
  };

console.log(Object.values(object1))  // ['somestring',42]

for(let values of Object.values(object1)){
    console.log(`${values}`)   // somestring , 42
}


console.log(Object.keys(object1))   // ['a' , 'b']
for(let keys of Object.keys(object1)){
    console.log(`${keys}`)     // a , b
} 