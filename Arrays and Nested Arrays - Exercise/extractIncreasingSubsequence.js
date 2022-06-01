function EIS(arr) {
    let currNum = arr.shift()
    let myArr = [currNum]
    for (let num of arr) {
        if (num >= currNum) {
            currNum = num
            myArr.push(currNum)
        }
    }
    return myArr
}
EIS([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])