
//Object.create
var obj = {
    name:"mamta",
    printInfo : function(){
        return `My name is ${this.name}`
    }
}

console.log(obj.printInfo())   // My name is mamata

var admin = Object.create(obj)
admin.name = "Komala"

console.log(admin.printInfo())  // My name is Komala