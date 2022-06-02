function townsToJSON(arr) {
    let towns = []
    let headings = arr.shift().split('|').filter(el => el !== '').map(el => el.trim())

    for (const line of arr) {
        let tokens = line.split('|').filter(el => el !== '').map(el => el.trim())
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] == Number(tokens[i])) {
                tokens[i] = Number(Number(tokens[i]).toFixed(2))

            }
        }
        let obj = {}
        for (let i = 0; i < tokens.length; i++) {
            obj[headings[i]] = tokens[i]
        }
        towns.push(obj)
    }
    console.log(JSON.stringify(towns));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
