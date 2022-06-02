function townsToJSON(arr) {
    for (const line of arr) {
        let tokens = line.split('|').filter(el => el !== '').map(el=> el.trim())
        console.log(tokens);
    }
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])