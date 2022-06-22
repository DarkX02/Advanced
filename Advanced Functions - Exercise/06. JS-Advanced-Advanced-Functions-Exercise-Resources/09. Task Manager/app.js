function solve() {
    let sections = document.querySelectorAll('section')
    document.getElementById('add').addEventListener('click', add)

    function add(ev) {
        let task = document.getElementById('task').value
        let description = document.getElementById('description').value
        let date = document.getElementById('date').value
        ev.preventDefault()
        if (task && description && date) {
            let article = document.createElement('article')

            let h3 = document.createElement('h3')
            h3.textContent = task
            article.appendChild(h3)

            let p1 = document.createElement('p')
            p1.textContent = `Description: ${description}`
            article.appendChild(p1)

            let p2 = document.createElement('p')
            p2.textContent = `Due Date: ${date}`
            article.appendChild(p2)

            let div = document.createElement('div')
            div.classList.add('flex')

            let start = document.createElement('button')
            start.textContent = 'Start'
            start.classList.add('green')
            start.addEventListener('click', startFunc)
            div.appendChild(start)

            let del = document.createElement('button')
            del.textContent = 'Delete'
            del.classList.add('red')
            del.addEventListener('click', delFunc)
            div.appendChild(del)

            article.appendChild(div)

            sections[1].children[1].appendChild(article)
        }

    }

    function startFunc(ev) {
        sections[2].children[1].appendChild(ev.target.parentElement.parentElement)
        let finish = document.createElement('button')
        finish.textContent = 'Finish'
        finish.classList.add('orange')
        finish.addEventListener('click', finishFunc)
        ev.target.parentElement.appendChild(finish)
        
        ev.target.remove()
    }

    function delFunc(ev) {
        ev.target.parentElement.parentElement.remove()
    }

    function finishFunc(ev) {
        sections[3].children[1].appendChild(ev.target.parentElement.parentElement)
        ev.target.parentElement.remove()
    }
}