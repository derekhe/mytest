input.onButtonPressed(Button.A, function () {
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    led.plot(0, 0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.stop()
})
basic.forever(function () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 0)
})
