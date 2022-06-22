function fibonacci() {
    let result = 0
    let n = 1
    function add() {
        let currN = n
        result += currN
        n = result-currN
        return result
    }
    
    return add
}
fibonacci()
let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
