function calculator() {
    let s1 = null
    let s2 = null
    let rs = null

    let obj = {
        init,
        add,
        subtract
    }
    return obj

    function init(selector1, selector2, result) {
        s1 = document.querySelector(selector1)
        s2 = document.querySelector(selector2)
        rs = document.querySelector(result)
    }

    function add() {
        rs.value = Number(s2.value) + Number(s1.value)
    }

    function subtract() {
        rs.value = Number(s1.value) - Number(s2.value)
    }
}




