function addItem() {
    let value = document.getElementById('newItemText').value
    let list = document.getElementById('items')

    let newLi = document.createElement('li')
    newLi.textContent = value
    list.appendChild(newLi)
}