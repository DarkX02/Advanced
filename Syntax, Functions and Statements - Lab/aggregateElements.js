function aggregateElements(arr) {
    let sum = 0
    let inverseSum = 0
    let concated = ''
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        inverseSum += 1 / arr[i]
        concated += arr[i]
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concated);
}
aggregateElements([2, 4, 8, 16])