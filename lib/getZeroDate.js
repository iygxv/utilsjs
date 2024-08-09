import isNumber from './isNumber.js'
/**
 * 获取指定时间前后0点时间
 * @param {number} toDay 前后时间 / 0表示当天时间
 * @returns 0点时间(2023-05-19 00:00:00)
 */
const getZeroDate = (toDay) => {
  toDay = isNumber(toDay) ? toDay : 0
  // 获取当前时间
  const nowDate = new Date()
  // 获取当前时间的时间戳
  const nowTimestamp = nowDate.getTime()
  // 获取前后时间的时间戳
  const toDayTimestamp = nowTimestamp + (toDay * 24 * 60 * 60 * 1000)
  // 获取前后时间
  const toDayDate = new Date(toDayTimestamp)
  // 获取前后时间 0点的时间
  const zeroDate = new Date(toDayDate.getFullYear(), toDayDate.getMonth(), toDayDate.getDate())

  const year = zeroDate.getFullYear()
  const month = zeroDate.getMonth() + 1
  const day = zeroDate.getDate()
  const hour = zeroDate.getHours()
  const minute = zeroDate.getMinutes()
  const second = zeroDate.getSeconds()

  // 补零
  function addZero(num) {
    return num < 10 ? '0' + num : num
  }
  const zeroDateString = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second)

  return zeroDateString
}


export default getZeroDate