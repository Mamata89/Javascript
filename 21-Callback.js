function firstFunction(){
    // Simulate a code delay
    setTimeout( function(){
      console.log('First function called');
    }, 1000 );
  }
  function secondFunction(){
    console.log('Second function called');
  }
  firstFunction();
  secondFunction();