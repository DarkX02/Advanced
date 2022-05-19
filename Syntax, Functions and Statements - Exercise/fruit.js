function fruit(fruit, weightGrams,price){
    let weightKG = weightGrams/1000
    let totalSum = weightKG*price
    console.log(`I need $${totalSum.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)