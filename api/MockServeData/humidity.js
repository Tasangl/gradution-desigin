import Mock from 'mockjs'
// 图表数据
const List = []
// 日期数据
const Date = []

export default {
  // 模拟湿度数据
  getHumidityData: () => {
    // Mock.Random.float 产生随机数-20到50之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 20; i++) {
      List.push(
        Mock.mock({
          湿度: Mock.Random.float(0, 100, 0, 0)
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
