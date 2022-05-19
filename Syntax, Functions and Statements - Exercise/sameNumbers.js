function sameNumbers(num) {
    let numToString = String(num)
    let sum = 0
    let isDifferent = false
    let digit = numToString[0]
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i])
        if (isDifferent === true) {
            continue
        } else {
            if (digit != numToString[i]) {
                isDifferent = true
            }
        }
    }
    console.log(!isDifferent);
    console.log(sum);
}
sameNumbers(2222222)