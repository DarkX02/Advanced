function addAndRemove(arr) {

    let n = 1
    let myArr = []
    for (let command of arr) {
        if (command === 'add') {
            myArr.push(n)
        } else {
            myArr.pop()
        }
        n += 1
    }
    if (myArr.length <= 0) {
        console.log('Empty');
    } else {
        console.log(myArr.join('\n'));
    }
}
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add'])
console.log('---');
addAndRemove(['remove',
    'remove',
    'remove'])