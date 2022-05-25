<template>
  <el-row class="Light" :gutter="24">
    <el-col :span="14" style="margin-top: 20px">
      <el-card style="height: 680px">
        <div style="height: 680px" ref="echarts"></div>
      </el-card>
    </el-col>
    <el-col :span="6.5">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%"
      >
        <el-table-column prop="dateLight" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="dataLight" label="光照强度" width="180">
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="prev, pager, next"
        :total="tableData.length"
      >
      </el-pagination>
      <el-button type="primary" @click="getLD">获取数据</el-button>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts'
// import { getLightData } from '../../../api/data'
export default {
  name: 'LightData',
  data () {
    return {
      lightData: [],
      // 数据
      LD: [],
      // 时间
      LDT: [],
      echartData: {
        order: {
          xData: [],
          series: []
        }
      },
      tableData: [],
      pageSize: 13,
      currentPage: 1
    }
  },
  mounted () {
    this.timer = window.setInterval(() => {
      setTimeout(
        () =>
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
            // 表格数据
            console.log('BCZVX', this.tableData)
            console.log('LD', this.LD)
            console.log('LDT', this.LDT)
            // console.log('DDDDDDD', this.tableData[0].dateLight)
            console.log('DT', order[0])
            const keyArray = Object.keys(order[0]).slice(1)
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
          }),
        0
      )
    }, 1000)
  },
  destroyed () {
    window.clearInterval(this.timer)
  },
  methods: {
    getLD () {
      console.log('@@@WWWW', this.lightData)
      for (let index = 0; index < this.lightData.length; index++) {
        this.tableData.push({
          dateLight: this.lightData[index].date,
          dataLight: this.lightData[index].data
        })
      }
    },
    handleCurrentChange (val) {
      this.currentPage = val
    },
    handleSizeChange (size) {
      this.pageSize = size
    }
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
