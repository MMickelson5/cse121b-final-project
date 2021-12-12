var amp = 1
var period = 1
var xShift = 0
var yShift = 0
var minX = 0
var maxX = 10

let getX = amp * (Math.sin(period * (4 + xShift)) + yShift)

console.log(getX)

