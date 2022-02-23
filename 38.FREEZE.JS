
// freeze => 
const obj = {
    name:"mamata"
}

Object.freeze(obj)

obj.name = "Moger"

console.log(obj)  // {name: 'mamata'}