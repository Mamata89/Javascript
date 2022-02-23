var arr = [10, 20, 30];

arr.forEach(function(ele)  {
   console.log(ele)   // cant use return
})




var resultFilter = arr.filter(ele => {
    return ele !== 20
})
console.log(resultFilter)  // [10, 30]

var resultMap = arr.map(ele => {
    return ele * 10
})

console.log(resultMap)    // [100, 200, 300]

var resultReduce = arr.reduce((sum, ele) => {
        return sum  +ele
})

console.log(resultReduce)    // 60