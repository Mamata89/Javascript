var handler = {
    get : function(obj, prop){
        return prop in obj ? obj[prop] : 100
    }
}

const p = new Proxy({} , handler)

p.a = 100
p.b = null

console.log(p.a , p.b)   // 100, null

console.log('c' in p, p.c);  //false 100 ( which is false)
