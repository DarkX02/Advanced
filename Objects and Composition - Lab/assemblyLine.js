function createAssemblyLine() {
    let decorative = {
        hasClima: function hasClima(obj) {
            obj.temp = 21
            obj.tempSettings = 21
            obj.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++
                } else if (this.temp > this.tempSettings) {
                    this.temp--
                }
            }
        },
        hasAudio: function hasAudio(obj) {
            obj.currentTrack = null
            obj.nowPlaying = function () {
                if (this.currentTrack) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function hasParktronic(obj) {
            obj.checkDistance = function checkDistance(num) {
                if (num < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (num < 0.25) {
                    console.log("Beep! Beep!");
                } else if (num < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }
    }
    return decorative
}

const assemblyLine = createAssemblyLine()

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);