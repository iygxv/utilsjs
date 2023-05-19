/**
 * 使用requestAnimationFrame代替setInterval
 */
class animation { 
  constructor(interval) {
    // 上一次时间
    this.lastTime = 0
    this.requestID = null
    // 间隔时间
    this.interval = interval
  }
  start(callback) {
    this.requestID = requestAnimationFrame(() => {
      let nowTime = performance.now()
      if(nowTime - lastTime >= this.interval) {
        this.lastTime = nowTime
        callback && callback()
      }
      this.start()
    })
  }
  stop() { 
    this.requestID && cancelAnimationFrame(this.requestID)
  }
}
export default animation