function storeCatalogue(arr) {
    let catalouge = {}
    for (const line of arr) {
        let [product, price] = line.split(' : ')
        catalouge[product] = price
    }

    let sorted = Object.keys(catalouge).sort((a, b) => a.localeCompare(b))
    let firstLetter = sorted[0][0]
    console.log(firstLetter);
    for (const product of sorted) {
        if (firstLetter !== product[0]) {
            firstLetter = product[0]
            console.log(firstLetter);
        }
        console.log(`  ${product}: ${catalouge[product]}`);
    }
}
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])