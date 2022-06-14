function validate() {
    let pattern = /^([a-z]+@[a-z]+\.[a-z]+)$/gm
    let input = document.getElementById('email')

    input.addEventListener('change',isGood)
    
    function isGood(ev){
        if (!pattern.test(input.value)) {
            input.classList.add('error')
        }else{
            input.classList.remove('error')
        }
    }
}