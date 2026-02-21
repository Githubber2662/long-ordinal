"use strict"
function mtxUpg(n) {
  switch (n) {
    case 0:
      if (game.mtx.money >= 20) {
        game.mtx.money -= 20
        game.mtx.doublerTicks += 120 * 1000
      }
      break
    case 1:
      if (game.mtx.money >= 30) {
        game.mtx.money -= 30
        game.lastTick -= 60 * 1000
      }
      break
    case 2:
      if (game.mtx.money >= 480) {
        game.mtx.money -= 480
        
        if (game.ord.b > 60) game.ord.b = Math.ceil(game.ord.b * 0.95)
        else game.mtx.doubleIncs = true
      }
      break
  }
}
