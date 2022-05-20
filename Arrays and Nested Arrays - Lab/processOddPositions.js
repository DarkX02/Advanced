function processOddPositions(arr) {
    let output = arr.filter((x, i) => i % 2 != 0).map(el => el*2)
    .reverse()
    .join(' ')
    console.log(output);
}
processOddPositions([3, 0, 10, 4, 7, 3])