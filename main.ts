let tafel3 = 0
basic.forever(function () {
    for (let index = 0; index < 1000; index++) {
        if (tafel3 < 12) {
            for (let index = 0; index < 4; index++) {
                tafel3 += 3
                basic.pause(1000)
            }
        } else {
            tafel3 = 0
            basic.showNumber(tafel3)
            basic.pause(1000)
        }
    }
})
