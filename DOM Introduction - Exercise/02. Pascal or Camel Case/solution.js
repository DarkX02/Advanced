function solve() {
  let text = document.getElementById('text').value
  let method = document.getElementById('naming-convention').value
  let result = document.getElementById('result')

  let wordsArr = text.split(' ')
  let startIndex = null
  if (method === 'Camel Case') {
    wordsArr[0] = wordsArr[0].toLowerCase()
    startIndex = 1
  } else if (method === 'Pascal Case') {
    startIndex = 0
  } else {
    result.textContent = "Error!"
    return
  }
  for (let i = startIndex; i < wordsArr.length; i++) {
    let word = wordsArr[i]
    word = word.toLocaleLowerCase().split('')
    word[0] = word[0].toUpperCase()
    wordsArr[i] = word.join('')
  }
  result.textContent = wordsArr.join('')
}