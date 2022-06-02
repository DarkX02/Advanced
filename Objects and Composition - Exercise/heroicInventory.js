function heroicInventory(arr) {
    let heroes = []
    for (let line of arr) {
        let [name, level, items] = line.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []
        heroes.push({ name, level, items })
    }
    console.log(JSON.stringify(heroes));
}
heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])