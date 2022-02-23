function callbackFunction(name) {
    console.log('Hello ' + name);
  }
  
  function outerFunction(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
  }
  
  outerFunction(callbackFunction);




  function display(sum){
      console.log("Sum of two numver", sum)
  }


function addNum(display){
    let a = 2
    let b = 3
    sum = 2 + 3
    display(sum)
}

addNum(display)