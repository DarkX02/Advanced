function search() {
   let towns = document.querySelectorAll('#towns li')
   let searched = document.getElementById('searchText').value
   let result = document.getElementById('result')

   for (const town of towns) {
      town.style.textDecoration = ""
      town.style.fontWeight = 'normal'
   }

   let matches = 0
   for (const town of towns) {
      if (town.textContent.includes(searched)) {
         matches++
         town.style.textDecoration = "underline"
         town.style.fontWeight = 'bold'
      }
   }
   result.textContent = `${matches} matches found`
}