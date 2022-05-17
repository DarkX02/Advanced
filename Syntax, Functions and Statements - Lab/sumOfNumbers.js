function sumOfNumbers(m, n) {
    m = Number(m)
    n = Number(n)
    let sum = 0
    for (let i = m; i <= n; i++) {
        sum += i
    }
    console.log(sum);
}
sumOfNumbers('1', '5')