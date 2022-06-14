function solve() {
   let products = Array.from(document.querySelectorAll('.product'))
   let checkout = document.querySelector('.checkout')
   let output = document.querySelector('textarea')


   let sum = 0
   let productsArr = []
   checkout.addEventListener('click',calc)
   for (let product of products) {
      product.addEventListener('click', add)
   }

   function add(ev) {
      if (ev.target.tagName == 'BUTTON') {
         let title = ev.currentTarget.querySelector('.product-title').textContent;
         let price = Number(ev.currentTarget.querySelector('.product-line-price').textContent);
         sum+=price
         if (!productsArr.includes(title)) {
            productsArr.push(title)
         }
         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   function calc(ev){
      output.value+=`You bought ${productsArr.join(', ')} for ${sum.toFixed(2)}.`
      for (let product of products) {
         product.removeEventListener('click', add)
      }
      checkout.removeEventListener('click',calc)
   }
}