function calorieObject(arr){
    let object = {}
    for (let i = 0; i < arr.length; i+=2) {
        let product = arr[i]
        let calories = arr[i+1]
        object[product] = Number(calories)
    }
    console.log(object);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])