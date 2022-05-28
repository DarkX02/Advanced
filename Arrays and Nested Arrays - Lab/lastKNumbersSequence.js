function numbersSequence(n, k) {
    let arr = [1]
    for (let i = 0; i < n - 1; i++) {
        let sum = 0
        let count = 0
        for (let j = i; j >= 0; j--) {
            count++
            sum += arr[j]
            if (count === k) {
                break
            }
        }
        arr.push(sum)
    }
    return arr
}
numbersSequence(8, 2)