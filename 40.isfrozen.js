const object = {
    name:"mamata",
    age:10
}

Object.freeze(object)

console.log(Object.isFrozen(object))

delete object.name

console.log(object.name)

