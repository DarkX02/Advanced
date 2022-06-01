function printNthElement(arr,n){
    let myArr = []
    for (let i = 0; i < arr.length; i+=n) {
        myArr.push(arr[i])
    }
    return myArr
}
printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2)