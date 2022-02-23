// To create an object
//  a) Object constructor:    
            var obj = new Object()
//  b) Object create method:
            var obj = Object.create(null)

//  c) Object literal syntax: 
            var obj = {}

//  d) Function constructor:
            function Person(name){
                var object = {}
                object.name = name
                object.age = 26
                return object
            }

            const disp = new Person("Mamata")
            console.log(disp)     // {name: 'Mamata', age: 26}

//  e) Function constructor with prototype:
            function Person(){}
            Person.prototype.name = "Alex";
            var object = new Person();
            console.log(disp)   // {name: 'Mamata', age: 26}

//  f) ES6 Class syntax:
            class Person1{
                constructor(name){
                    this.name = name
                }
            }
            var object = new Person1("Mamata")
            console.log(object)  // Person1 {name: 'Mamata'}

//  g) Singleton pattern: 

            var object = new function(){
                this.name="Alex"
            }       
            console.log(object)   // {name: 'Alex'}