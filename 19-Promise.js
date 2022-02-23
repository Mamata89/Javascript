const promise= new Promise(resolve => {
    setTimeout(() => {
        console.log("Resolved")
    },500)
},reject => {
    console.log("Rejecytd")
})

promise.then(value => console.log(value))