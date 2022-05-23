function wordsUppercase(input){
    let pattern = /\w+/gm
    let match = input.match(pattern)
    let mapped = match.map(el => el.toLocaleUpperCase())
    console.log(mapped.join(', '));
}
wordsUppercase('hello')