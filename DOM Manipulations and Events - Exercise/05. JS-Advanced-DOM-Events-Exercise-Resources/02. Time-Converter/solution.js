function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', calc)
    document.getElementById('hoursBtn').addEventListener('click', calc)
    document.getElementById('minutesBtn').addEventListener('click', calc)
    document.getElementById('secondsBtn').addEventListener('click', calc)

    function calc(ev) {
        let input = Number(ev.target.previousElementSibling.value)

        if (ev.target.id == 'daysBtn') {
            document.getElementById('hours').value = input * 24
            document.getElementById('minutes').value = input * (60 * 24)
            document.getElementById('seconds').value = input * (3600 * 24)
        } else if (ev.target.id == 'hoursBtn') {
            document.getElementById('days').value = input / 24
            document.getElementById('minutes').value = input * 60
            document.getElementById('seconds').value = input * 3600
        } else if (ev.target.id == 'minutesBtn') {
            document.getElementById('days').value = input / (60 * 24)
            document.getElementById('hours').value = input / 60
            document.getElementById('seconds').value = input * 60
        } else {
            document.getElementById('days').value = input / (3600 * 24)
            document.getElementById('hours').value = input / (60 * 60)
            document.getElementById('minutes').value = input / 60
        }
    }
}