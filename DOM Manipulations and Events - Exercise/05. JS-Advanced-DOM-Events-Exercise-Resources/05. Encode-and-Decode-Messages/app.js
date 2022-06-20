function encodeAndDecodeMessages() {
    let divs = document.getElementById('main').children
    divs[0].addEventListener('click', result)
    divs[1].addEventListener('click', result)

    function result(ev) {
        if (ev.target.tagName == 'BUTTON') {
            let div = ev.currentTarget
            let text = div.children[1].value.split('')
            for (let i = 0; i < text.length; i++) {
                let code = ''
                if (div.children[0].textContent == 'Message') {
                    code = text[i].charCodeAt(0) + 1
                    div.children[1].value = ''
                } else {
                    code = text[i].charCodeAt(0) - 1
                }
                let normal = String.fromCharCode(code)
                text[i] = normal
            }
            divs[1].children[1].value = text.join('')
        }
    }
}