function sortingNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let myArr = []
    while (sorted.length !== 0) {
        myArr.push(sorted.shift())
        myArr.push(sorted.pop())
    }
    return myArr
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])