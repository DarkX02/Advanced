function sumTable() {
    let prices = Array.from(document.querySelectorAll('td:nth-child(2n)'))
    let result = prices.pop()
    let sum = 0
    for (const el of prices) {
        sum += Number(el.textContent)
    }
    result.textContent = sum
}
