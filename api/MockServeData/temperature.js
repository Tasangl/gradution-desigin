import Mock from 'mockjs'
// 图表数据
const List = []
// 日期数据
const Date = []
// 日期格式化
/* function getNowFormatDate () {
  const date = new Date()
  const seperator1 = '-'
  const seperator2 = ':'
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  const currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    ' ' + date.getHours() + seperator2 + date.getMinutes() +
    seperator2 + date.getSeconds()
  return currentdate
} */
export default {
  // 模拟温度数据
  getTemperatureData: () => {
    // Mock.Random.float 产生随机数-20到50之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 20; i++) {
      List.push(
        Mock.mock({
          温度: Mock.Random.float(-20, 50, 0, 0)
        })
      )
      Date.push(Mock.Random.datetime('2022-04-22 HH:mm:ss'))
    }
    return {
      code: 20000,
      data: {
        orderData: {
          date: Date,
          data: List
        }
      }
    }
  }
}
