function cookingByNumbers(...params) {
    let num = Number(params.shift())
    for (let command of params) {
        if (command === 'chop') {
            num /= 2
            console.log(num);
        } else if (command === 'dice') {
            num = Math.sqrt(num)
            console.log(num);
        } else if (command === 'spice') {
            num += 1
            console.log(num);
        } else if (command === 'bake') {
            num *= 3
            console.log(num);
        } else if (command === 'fillet') {
            num -= num * 0.20
            console.log(num);
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')