function argumentInfo(...params) {
    let types = {}

    for (let el of params) {
        let type = typeof (el)
        if (!types.hasOwnProperty(type)) {
            types[type] = 0
        }
        types[type] += 1
        console.log(`${type}: ${el}`);
    }

    let result = Object.entries(types).sort((a, b) => b[1] - a[1])
    for (const el of result) {
        console.log(`${el[0]} = ${el[1]}`);
    }
}
argumentInfo('cat','dog', 42,43,43,4321,21, function () { console.log('Hello world!'); })