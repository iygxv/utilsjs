/**
 * 使用requestAnimationFrame代替setInterval
 */
export class Animation { 
  constructor(executeTime) {
    this.lastTime = 0
    this.requestID = null
    this.executeTime = executeTime
    this.stopped = false
  }
  start(callback) {
    if (this.stopped) return
    this.requestID = requestAnimationFrame((nowTime) => {
      // const nowTime = performance.now()
      if(nowTime - this.lastTime >= this.executeTime) {
        this.lastTime = nowTime
        callback && callback()
      }
      this.start(callback)
    })
  }
  restart(callback) { 
    this.stopped = false
    this.start(callback)
  }
  stop() { 
    this.stopped = true
    this.requestID && cancelAnimationFrame(this.requestID)
  }
}