function solve() {
  let buttons = document.querySelectorAll('button')
  let textareas = document.querySelectorAll('textarea')
  buttons[0].addEventListener('click', generate)
  buttons[1].addEventListener('click', buy)

  function generate() {
    let arr = JSON.parse(textareas[0].value)
    document.querySelector('input[type=checkbox]').disabled = false
    for (const obj of arr) {
      let tr = document.createElement('tr')
      let imgCol = document.createElement('td')
      let image = document.createElement('img')
      image.src = obj.img
      imgCol.appendChild(image)
      tr.appendChild(imgCol)
      for (let key in obj) {
        if (key !== 'img') {
          let col = document.createElement('td')
          let p = document.createElement('p')
          p.textContent = obj[key]
          col.appendChild(p)
          tr.appendChild(col)
        }
      }
      let col = document.createElement('td')
      let checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      col.appendChild(checkbox)
      tr.appendChild(col)
      document.querySelector('tbody').appendChild(tr)
    }
  }

  function buy(ev) {
    let products = Array.from(document.querySelectorAll('tbody tr'))
      .filter(e => e.querySelector('input').checked == true)
    let productsArr = []
    let priceSum = 0
    let decAvg = 0
    let productsNum = 0
    for (const product of products) {
      productsNum++
      productsArr.push(product.children[1].textContent)
      priceSum += Number(product.children[2].textContent)
      decAvg += Number(product.children[3].textContent)
    }
    decAvg /= productsNum
    let resultArr = productsArr.join(', ')
    let rsult = `Bought furniture: ${resultArr}` + '\n' + `Total price: ${priceSum.toFixed(2)}` + '\n' + `Average decoration factor: ${decAvg}`
    // textareas[1].value += `Bought furniture: ${productsArr.join(', ')}\n`
    // textareas[1].value += `Total price: ${priceSum.toFixed(2)}\n`
    // textareas[1].value += `Average decoration factor: ${decAvg}\n`
    textareas[1].value = rsult
  }
}