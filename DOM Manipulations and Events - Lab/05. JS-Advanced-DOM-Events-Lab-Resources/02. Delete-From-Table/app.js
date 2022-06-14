function deleteByEmail() {
    let emails = Array.from(document.querySelectorAll('tbody tr')).map(e => e.children[1])
    let value = document.querySelector('label input').value

    let found = false
    for (let email of emails) {
        if (email.textContent == value) {
            email.parentElement.remove()
            found = true
        }
    }

    if (found) {
        document.getElementById('result').textContent = 'Deleted.'
    }else{
        document.getElementById('result').textContent = 'Not found.'
    }
}