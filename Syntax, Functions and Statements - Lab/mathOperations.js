function mathOperations(num1, num2, op) {
    switch (op) {
        case '+': console.log(num1 + num2); break
        case '-': console.log(num1 - num2); break
        case '*': console.log(num1 * num2); break
        case '/': console.log(num1 / num2); break
        case '%': console.log(num1 % num2); break
        case '**': console.log(num1 ** num2); break
    }
}
mathOperations(5, 6, '**')