// To clone an object

const obj = {a:1, b:2}

const shallowClone = {...obj}

console.log("using spread operator",shallowClone)

const objectAssign = Object.assign({},obj)

console.log("Using object assing", objectAssign)