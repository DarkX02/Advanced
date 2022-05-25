function townPopulation(arr) {
    let result = {}
    for (const line of arr) {
        let tokens = line.split(' <-> ')
        let city = tokens.shift()
        let pop = Number(tokens.shift())
        if (result.hasOwnProperty(city)) {
            result[city] += pop
        } else {
            result[city] = pop
        }
    }
    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])