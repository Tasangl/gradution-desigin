<template>
  <el-row class="Light" :gutter="20">
    <el-col :span="16" style="margin-top: 20px">
      <el-card style="height:680px">
        <div style="height:680px" ref="echarts"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts'
import { getLightData } from '../../../api/request'
export default {
  name: 'LightData',
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
    this.axios({
      url: 'http://47.95.11.134:11451/data/light',
      method: 'post',
      data: {
        date: ''
      }
    }).then((res) => {
      console.log(res)
      // console.log('AAa', res.data)
      this.lightData = res.data
      console.log('ASDC', this.lightData)
      const order = this.lightData
      // console.log('aSD',data)
      console.log('AAA', order.data)
      // 数据
      // const LD = []
      // 时间
      // const LDT = []
      for (let index = 0; index < order.length; index++) {
        this.LD[index] = order[index].data
        this.LDT[index] = order[index].date
      }
      console.log('LD', this.LD)
      console.log('LDT', this.LDT)
      const DT = order[0]
      console.log('DT', order[0])
      const keyArray = Object.keys(order[0]).slice(3)
      const xData = this.LDT.reverse()
      console.log('@@@', keyArray)
      const series = []
      keyArray.forEach((key) => {
        series.push({
          name: key,
          data: order.map((item) => item[key]),
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
      const Light = echarts.init(this.$refs.echarts)
      Light.setOption(option)
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
