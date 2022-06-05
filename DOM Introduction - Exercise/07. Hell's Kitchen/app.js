function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value)
      let bestRestaurantOutput = document.querySelector('#outputs #bestRestaurant p')
      let workersOutput = document.querySelector('#outputs #workers p')

      let restaurants = {}
      for (let line of input) {
         let [name, workers] = line.split(' - ')
         workers = workers.split(', ')

         if (!restaurants.hasOwnProperty(name)) {
            restaurants[name] = {}
            restaurants[name].avgSalary = 0
            restaurants[name].bestSalary = 0
         }

         for (const worker of workers) {
            let [workerName, salary] = worker.split(' ')
            salary = Number(salary)
            restaurants[name][workerName] = salary

            if (restaurants[name].bestSalary < salary) {
               restaurants[name].bestSalary = salary
            }
         }
      }

      let bestRestaurant = null
      for (let restaurant in restaurants) {
         let total = 0
         let workersCount = 0

         for (const [worker, salary] of Object.entries(restaurants[restaurant]).filter(el => el[0] !== 'avgSalary' && el[0] !== 'bestSalary')) {
            total += salary
            workersCount++
         }

         restaurants[restaurant].avgSalary = total / workersCount

         if (!bestRestaurant) {
            bestRestaurant = [`${restaurant}`, restaurants[restaurant]]
         } else {
            if (bestRestaurant[1].avgSalary < restaurants[restaurant].avgSalary) {
               bestRestaurant = [`${restaurant}`, restaurants[restaurant]]
            }
         }
      }

      bestRestaurantOutput.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`

      let result = []
      let workers = Object.entries(bestRestaurant[1])
         .filter(el => el[0] !== 'avgSalary' && el[0] !== 'bestSalary')
         .sort((a, b) => b[1] - a[1])

      for (const worker of workers) {
         result.push(`Name: ${worker[0]} With Salary: ${worker[1]}`)
      }

      workersOutput.textContent = result.join(' ')
   }
}