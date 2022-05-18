function squareOfStars(input) {
    if (!input) {
        input = 5
    }
    for (let i = 0; i < input; i++) {
        let line = ''
        for (let j = 0; j < input; j++) {
            line += '* '
        }
        console.log(line);
    }
}
squareOfStars()