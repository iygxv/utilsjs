/**
 * Animation 动画类
 * 使用 requestAnimationFrame 代替 setInterval 
 */
class Animation { 
  constructor() {
    this.lastTime = 0
    this.requestID = null
    this.stopped = false
  }
  /**
   * 开始动画
   * @param {*} callback 执行时间到了，执行回调
   * @param {*} executeTime 执行时间
   * @returns 
   */
  start(callback, executeTime = 1000) {
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

export default Animation