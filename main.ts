input.onButtonPressed(Button.A, function () {
    foward()
    turn()
    foward()
})
function turn () {
    for (let index = 0; index < 12000; index++) {
        servos.P0.run(50)
    }
    servos.P0.run(0)
}
function foward () {
    for (let index = 0; index < 12000; index++) {
        servos.P0.run(50)
        servos.P1.run(-50)
    }
    servos.P0.run(0)
    servos.P1.run(0)
}
