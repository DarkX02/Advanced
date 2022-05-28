function negPosNumbers(arr) {
    let myArr = []
    for (const num of arr) {
        if (num < 0) {
            myArr.unshift(num)
        } else {
            myArr.push(num)
        }
    }
    console.log(myArr.join('\n'));
}
negPosNumbers([3, -2, 0, -1])