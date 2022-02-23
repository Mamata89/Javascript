const object1 = {
    a: 'somestring',
    b: 42
  };

  // Using for-in loop
  
for(key in object1){
    console.log(key + " - " + object1[key])  // a - somestring  b - 42
}  

// Using Object.entries

for(let [key,value] of Object.entries(object1)){
    console.log(`${key} - ${value}`)         // a - somestring  b - 42
}
  