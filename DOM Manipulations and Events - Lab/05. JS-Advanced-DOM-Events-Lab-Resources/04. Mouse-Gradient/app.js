function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', gradient)

    function gradient(ev) {
        document.getElementById('result').textContent = Math.floor(ev.offsetX / document.getElementById('gradient').clientWidth * 100) + '%'
    }
}