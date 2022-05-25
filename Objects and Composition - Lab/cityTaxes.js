function cityTaxes(name, population, treasury) {
    let obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: () => obj.treasury += obj.population * obj.taxRate,
        applyGrowth: (percent) => obj.population = Math.floor(obj.population * (1 + percent / 100)),
        applyRecession: (percent) => obj.treasury = Math.floor(obj.treasury * (1 - percent / 100))
    }
    return obj
}
const city =
    cityTaxes('Tortuga',
        100,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyRecession(50);
console.log(city.population);
console.log(city.applyGrowth(20));

