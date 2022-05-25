// mock数据模拟
import Mock from 'mockjs'

// 图表数据
const List = []
export default {
  getStatisticalData: () => {
    // Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          温度: Mock.Random.float(0, 40, 0, 0),
          湿度: Mock.Random.float(0, 100, 0, 0),
          液位: Mock.Random.float(0, 10, 0, 0),
          光照强度: Mock.Random.float(0, 300, 0, 0),
          热源: Mock.Random.float(100, 200, 0, 0),
          // 小米: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '温度',
            value: 2999
          },
          {
            name: '湿度',
            value: 5999
          },
          {
            name: '液位',
            value: 1500
          },
          {
            name: '热源',
            value: 1999
          },
          {
            name: '光照强度',
            value: 2200
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 210
          },
          {
            date: '周三',
            new: 12,
            active: 222
          },
          {
            date: '周四',
            new: 60,
            active: 282
          },
          {
            date: '周五',
            new: 65,
            active: 347
          },
          {
            date: '周六',
            new: 53,
            active: 400
          },
          {
            date: '周日',
            new: 33,
            active: 433
          }
        ],
        // 折线图
        orderData: {
          date: ['202205021', '202205022', '202205023', '202205024', '202205025', '202205026', '202205027'],
          data: List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: {
              monthBuy: []
            }
          },
          {
            name: 'vivo',
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          {
            name: '苹果',
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: '小米',
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: '三星',
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          },
          {
            name: '魅族',
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          }
        ]
      }
    }
  }
}
