<template>
  <el-row class="Humidity" :gutter="20">
    <el-col :span="16" style="margin-top: 20px">
      <el-card style="height:680px">
        <div style="height:680px" ref="echarts"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts'
import { getHumidityData } from '../../../api/data'
export default {
  name: 'HumidityData',
  data () {
    return {
      echartData: {
        order: {
          xData: [],
          series: []
        }
      }
    }
  },

  mounted () {
    getHumidityData().then(res => {
      console.log(res)
      const { code, data } = res.data
      console.log('CCC', code)
      if (code === 20000) {
        const order = data.orderData
        // console.log('AAA', order)
        const keyArray = Object.keys(order.data[0])
        const xData = order.date
        // console.log('@@@',keyArray)
        const series = []
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line',
            smooth: true
          })
        })
        const option = {
          xAxis: {
            data: xData
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          tooltip: {
            trigger: 'axis'
          },
          series
        }
        const Humidity = echarts.init(this.$refs.echarts)
        Humidity.setOption(option)
      }
    })
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
</style>
