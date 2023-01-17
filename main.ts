let tafel3 = 0
basic.pause(1000)
basic.forever(function () {
    if (tafel3 < 13) {
        basic.pause(1000)
        tafel3 += 3
    } else {
        tafel3 = 0
        basic.showNumber(tafel3)
        basic.pause(1000)
    }
})
basic.forever(function () {
    basic.showNumber(tafel3)
})
