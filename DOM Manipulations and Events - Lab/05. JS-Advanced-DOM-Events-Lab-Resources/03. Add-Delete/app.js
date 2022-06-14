function addItem() {
    let value = document.getElementById('newItemText').value
    let list = document.getElementById('items')

    let newLi = document.createElement('li')
    newLi.textContent = value
    let anchor = document.createElement('a')
    anchor.textContent = '[Delete]'
    anchor.href = '#'
    anchor.addEventListener('click', deleteItem)
    newLi.appendChild(anchor)
    list.appendChild(newLi)

    function deleteItem(ev){
        ev.target.parentElement.remove()
    }
}