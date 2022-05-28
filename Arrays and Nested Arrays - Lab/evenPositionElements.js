function evenPositionElements(arr) {
    let myArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            myArr.push(arr[i])
        }
    }
    console.log(myArr.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60'])