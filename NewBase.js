let clock = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    clock += 1
})
radio.setTransmitPower(1)
radio.setGroup(12)
basic.forever(() => {
    if (clock >= 10) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(200)
        clock = 0
        music.playTone(698, music.beat(BeatFraction.Sixteenth))
    } else {
        basic.pause(100)
        clock += 1
    }
})
