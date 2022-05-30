function subtract() {
    let firstEl = document.getElementById('firstNumber').value
    let secondEl = document.getElementById('secondNumber').value
    let resultEl = document.getElementById('result')
    resultEl.textContent = Number(firstEl)-Number(secondEl)
}
