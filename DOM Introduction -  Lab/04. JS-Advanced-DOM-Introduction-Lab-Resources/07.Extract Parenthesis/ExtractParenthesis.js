function extract(content) {
    let pattern = /\([A-Za-z ]+\)/g
    let text = document.getElementById(content).textContent
    let match = text.match(pattern)
    let result = []
    for (let word of match) {
        word = word.split('')
        word.pop()
        word.shift()
        result.push(word.join(''))

    }
    return result.join('; ') + ';'
}
