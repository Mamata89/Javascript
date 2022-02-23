function Person(firstName, lastName, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
}

Person.prototype.getFullName = function(){
    return `FirstName: ${this.firstName} LastName:${this.lastName} age:${age}`
}
var person = new Person("Mamata","Moger",32)

person.hasOwnProperty("firstName")
person.hasOwnProperty("lastName")


console.log(person) // {FirstName: "Mamata" LastName:Moger} age:32}