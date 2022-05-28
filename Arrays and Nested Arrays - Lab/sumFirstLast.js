function sumFirstLast(arr){
    let sum = Number(arr.shift())+Number(arr.pop())
    return sum
}
console.log(sumFirstLast(['20', '30', '40']))