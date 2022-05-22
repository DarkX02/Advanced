function roadRadar(speed, type) {
    let limit = 0
    let diff = 0
    switch (type) {
        case 'motorway':
            limit = 130
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
                return
            } else {
                diff = speed - limit
            }
            break
        case 'interstate':
            limit = 90
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
                return
            } else {
                diff = speed - limit
            }
            break
        case 'city':
            limit = 50
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
                return
            } else {
                diff = speed - limit
            }
            break
        case 'residential':
            limit = 20
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
                return
            } else {
                diff = speed - limit
            }
            break
    }
    let status = ''
    if (diff<=20) {
        status = 'speeding'
    }else if(diff<=40){
        status = 'excessive speeding'
    }else{
        status = 'reckless driving'
    }
    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);

}
roadRadar(21, 'residential')