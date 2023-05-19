/**
 * 使用requestAnimationFrame代替setInterval
 */
export class Animation { 
  constructor() {
    this.lastTime = 0
    this.requestID = null
    this.stopped = false
  }
  start(callback, executeTime = 0) {
    if (this.stopped) return
    this.requestID = requestAnimationFrame((nowTime) => {
      // const nowTime = performance.now()
      if(nowTime - this.lastTime >= executeTime) {
        this.lastTime = nowTime
        callback && callback()
      }
      this.start(callback, executeTime)
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