function extractText() {
    let items = Array.from(document.getElementById('items').children)
    let result = []
    for (let el of items) {
        result.push(el.textContent)
    }
    let textArea = document.getElementById('result')
    textArea.value = result.join('\n')
    console.log(result);
}
