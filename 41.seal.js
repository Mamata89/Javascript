const object = {
    name:"mamata"
}

Object.seal(object)

// console.log(Object.isFrozen(object))

object.name="moger"

console.log(object.name)

delete object.name
console.log(object.name)