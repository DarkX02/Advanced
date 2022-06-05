function generateReport() {
    let cols = Array.from(document.querySelectorAll('thead tr th')).map(el => el.textContent.trim())
    let colsIndexes = Array.from(document.querySelectorAll('thead tr th input'))
        .map(el => {
            if (el.checked == true) {
                return Array.from(document.querySelectorAll('thead tr th input')).indexOf(el)
            } else {
                return 'unchecked'
            }
        }).filter(el => el !== 'unchecked')
    let rows = Array.from(document.querySelectorAll('tbody tr'))
    let output = document.getElementById('output')

    let result = []
    for (let row of rows) {
        let obj = {}
        let rowColumns = row.children
        for (const index of colsIndexes) {
            obj[cols[index].toLocaleLowerCase()] = rowColumns[index].textContent
        }
        result.push(obj)
    } 
    output.value = JSON.stringify(result)
}