for(let i = 0 ; i < 10; i++){
    if( i == 5) { break;}
    console.log("break statement",i)    // 0 1 2 3 4
}


for(let i = 0 ; i < 10; i++){
    if(i === 5) { continue ;}
    console.log("continue statement",i)      //  // 0 1 2 3 4 6 7 8 9 
}