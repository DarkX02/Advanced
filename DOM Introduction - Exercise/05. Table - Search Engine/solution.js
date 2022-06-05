function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searched = document.getElementById('searchField').value
      let rows = document.querySelectorAll('tbody tr')
      for (const row of rows) {
         row.classList.remove('select')
      }
      
      for (const row of rows) {
         if (row.innerHTML.includes(searched)) {
            row.classList.add('select')
         }
      }
   }
}