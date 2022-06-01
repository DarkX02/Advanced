function magicMatrices(matrix) {
    let sum = 0
    for (let num of matrix[0]) {
        sum += num
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let colSum = 0
        matrix.forEach(row => {
            colSum += row[i]
        });
        if (sum !== colSum) {
            console.log('false');
            return
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        let row = matrix[i]
        let rowSum = 0
        for (let j = 0; j < row.length; j++) {
            rowSum += row[j]
        }
        if (sum !== rowSum) {
            console.log('false');
            return
        }
    }
    
    console.log(true);

}
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )