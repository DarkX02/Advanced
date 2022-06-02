function lowestPrices(arr) {
    let products = {}
    for (const line of arr) {
        let [town, product, price] = line.split(' | ')
        price = Number(price)
        if (!products.hasOwnProperty(product)) {
            products[product] = {
                town,
                price
            }
        } else {
            if (products[product].price > price) {
                products[product] = {
                    town,
                    price
                }
            }
        }
    }
    for (const product in products) {
        
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])