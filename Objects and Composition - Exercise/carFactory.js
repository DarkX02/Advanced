function carFactory(components) {
    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    let car = {
        model: components.model
    }

    if (components.power <= 90) {
        car.engine = engines.small
    } else if (components.power <= 120) {
        car.engine = engines.normal
    } else {
        car.engine = engines.monster
    }

    car.carriage = {
        type: components.carriage,
        color: components.color
    }

    if (components.wheelsize % 2 === 0) {
        components.wheelsize = components.wheelsize - 1
    }
    let wheels = [0, 0, 0, 0].fill(components.wheelsize)
    car.wheels = wheels
    return car

}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)