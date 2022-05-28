function equalNeighbors(matrix) {
    let pairsCount = 0
    for (let i = 0; i < matrix.length - 1; i++) {
        let row1 = matrix[i]
        let row2 = matrix[i + 1]
        for (let k = 0; k < row1.length; k++) {
            if (row1[k] === row2[k]) {
                pairsCount++
            }
            let el1 = row1[k]
            let el2 = row1[k + 1]
            if (el1 === el2) {
                pairsCount++
            }
        }
    }
    for (let i = 0; i < matrix[matrix.length - 1].length - 1; i++) {
        let el1 = matrix[matrix.length - 1][i]
        let el2 = matrix[matrix.length - 1][i + 1]
        if (el1 === el2) {
            pairsCount++
        }
    }
    return pairsCount
}
console.log(equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]))