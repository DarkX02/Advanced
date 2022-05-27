function editElement(element, text, replacement) {
    const txt = element.textContent
    let pattern = new RegExp(text, 'g')
    const result = txt.replace(pattern, replacement)
    element.textContent = result
}