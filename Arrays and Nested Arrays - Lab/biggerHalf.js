function biggerHalf(arr) {
    return arr.sort((a, b) => a - b).slice(Math.ceil((arr.length - 1) / 2))
}
biggerHalf([0, 2, 3, 999, 5, 6, 3, 98765, 8, 3, 43, 54, 32, 65, 234, 65])