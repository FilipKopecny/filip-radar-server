radio.onReceivedString(function (receivedString) {
    if (receivedString == "snimaj") {
        for (let index = 0; index < pocet_merani; index++) {
            pins.servoWritePin(AnalogPin.P16, uhol)
            basic.pause(20)
            radio.sendValue("uhol", uhol)
            basic.pause(20)
            radio.sendValue("dialka", sonar.ping(
            DigitalPin.P14,
            DigitalPin.P15,
            PingUnit.Centimeters
            ))
            uhol += 180 / pocet_merani
        }
        basic.pause(500)
        uhol = 0
        pins.servoWritePin(AnalogPin.P16, uhol)
    }
})
let pocet_merani = 0
let uhol = 0
radio.setGroup(1)
uhol = 0
pins.servoWritePin(AnalogPin.P16, uhol)
let dialka = 0
pocet_merani = 30
