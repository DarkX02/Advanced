function biggestElement(arr) {
    let maxNum = Number.MIN_SAFE_INTEGER
    for (let row of arr) {
        maxNum = Math.max(...row, maxNum)
    }
    return maxNum
}
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))