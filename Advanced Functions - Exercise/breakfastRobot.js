function breakfastRobot() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recepies = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    function robot(command) {
        let tokens = command.split(' ')
        if (tokens[0] == 'restock') {
            stock[tokens[1]] += Number(tokens[2])
            return 'Success'
        } else if (tokens[0] == 'prepare') {
            return check(tokens[1], tokens[2])
        }else{
            let arr = []
            for(let key in stock){
                arr.push(`${key}=${stock[key]}`)
            }
            return arr.join(' ')
        }

        function check(recepie, qty) {
            for (const key in recepies[recepie]) {
                if (stock[key] - recepies[recepie][key] * qty < 0) {
                    return `Error: not enough ${key} in stock`
                }
            }
            for (const key in recepies[recepie]) {
                stock[key] -= recepies[recepie][key] * qty
            }
            return 'Success'
        }
    }

    return robot
}
let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // rep 
console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))