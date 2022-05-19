function GCD(num1, num2) {
    let divisor = 1
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i
        }

    }
    console.log(divisor);
}
GCD(2400, 400)