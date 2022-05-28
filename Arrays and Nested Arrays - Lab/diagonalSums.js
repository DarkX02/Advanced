function diagonalSums(matrix) {
    let dig1 = 0
    let dig2 = 0
    let position = 1
    for (let row of matrix) {
        dig1 += row[position - 1]
        dig2 += row[row.length - position]
        position++
    }
    console.log(dig1, dig2);

}
diagonalSums([[20, 40],
    [10, 60]]
   )