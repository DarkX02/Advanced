function factory(library, orders) {
    let products = []
    for (const order of orders) {
        let obj = {
            name: order.template.name,
        }
        for (const command of order.parts) {
            obj[command] = library[command]
        }
        products.push(obj)
    }
    return products
}
const library = {
    get1: function () {
        return 1;
    },
    get3: function () {
        return 3;
    },
};

const orders = [
    {
        template: {},
        parts: ['get1']
    },
    {
        template: {},
        parts: ['get1', 'get3']
    },
];

factory(library, orders)
const products = factory(library, orders);
let [first, second] = products
console.log(second.get1());
