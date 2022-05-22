function timeToWalk(steps, sizeInMeters, speed) {
    let distance = steps * sizeInMeters / 1000
    let breaks = Math.floor(distance / 0.5)
    let timeSec = Math.round(distance / speed * 60 * 60)
    let timeMin = 0 + breaks
    let timeH = 0
    if (timeSec >= 60) {
        timeMin += Math.floor(timeSec / 60)
        timeSec = Math.round(timeSec % 60)
    }
    if (timeMin >= 60) {
        timeH = Math.floor(timeMin / 60)
        timeMin = Math.round(timeMin % 60)
    }
    if (timeSec < 10) {
        timeSec = `0${timeSec}`
    }
    if (timeMin < 10) {
        timeMin = `0${timeMin}`
    }
    if (timeH < 10) {
        timeH = `0${timeH}`
    }
    console.log(`${timeH}:${timeMin}:${timeSec}`);
}
timeToWalk(2564, 0.70, 5.5)