<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <!-- 用户信息 -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Administrator</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-3-8</span></p>
        </div>
      </el-card>
      <!-- 商品列表 -->
      <el-card style="margin-top: 20px; height: 480px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 组件订单 -->
    <el-col style="margin-top:20px" :span="16">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px">
        <!-- 折线图 -->
        <!-- <div style="height:280px" ref="echarts">
        </div> -->
        <!-- echart组件封装后使用  -->
        <echarts :chartData="echartData.order" style="height:280px"/>
      </el-card>
      <div class="graph">
        <!-- 柱状图 -->
        <el-card style="height: 260px">
          <!-- <div style="height:240px" ref="userEcharts">
          </div> -->
                  <!-- echart组件封装后使用  -->
        <echarts :chartData="echartData.user" style="height:240px"/>
        </el-card>
        <!-- 饼状图 -->
        <el-card style="height: 260px">
         <!--  <div style="height:240px" ref="videoEcharts">
          </div> -->
                  <!-- echart组件封装后使用  -->
        <echarts :chartData="echartData.video" :isAxisChart="false" style="height:240px"/>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import { getMenu } from '../../../api/data.js'
import { getData } from '../../../api/data'
import Echarts from '../../../src/components/ECharts'
export default {
  name: 'homeTable',
  data () {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        { name: '今日收藏订单', value: 210, icon: 'star-on', color: '#ffb980' },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        { name: '本月收藏订单', value: 210, icon: 'star-on', color: '#ffb980' },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          // xData:[],
          series: []
        }
      }
    }
  },
  components: {
    Echarts
  },
  mounted () {
    getData().then(res => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
        const order = data.orderData
        // const xData = order.date
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })

        // 折线图
        /*  const option = {
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
        const goodsEcharts = this.echarts.init(this.$refs.echarts)
        goodsEcharts.setOption(option) */

        // echarts组件封装后使用
        this.echartData.order.xData = order.date
        this.echartData.order.series = series
        // 柱状图
        /*  const userOption = {
          legend: {
            // 图片文字颜色
            textStyle: {
              color: '#333'
            }
          },
          gird: {
            left: '20%'
          },
          // 提示框
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: data.userData.map((item) => { return item.date }),
            axisLine: {
              linetStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#333'
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              linetStyle: {
                color: '#17b3a3'
              }
            }
          },
          color: ['#2ec7c9', '#b6a2de'],
          series: [
            {
              name: '新增用户',
              data: data.userData.map((item) => { return item.new }),
              type: 'bar'
            },
            {
              name: '活跃用户',
              data: data.userData.map((item) => { return item.active }),
              type: 'bar'
            }
          ]
        }
        const userEcharts = this.echarts.init(this.$refs.userEcharts)
        userEcharts.setOption(userOption) */

        // echarts组件封装后使用
        this.echartData.user.xData = data.userData.map(item => item.date)
        this.echartData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.userData.map(item => item.active),
            type: 'bar'
          }
        ]
        // 饼状图
        /*  const videoOption = {
          tooltip: {
            trigger: 'item'
          },
          color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
          series: [
            {
              data: data.videoData,
              type: 'pie'
            }
          ]
        }
        const videoEcharts = this.echarts.init(this.$refs.videoEcharts)
        videoEcharts.setOption(videoOption) */

        // echarts组件封装后使用
        this.echartData.video.series = [
          {
            data: data.videoData,
            type: 'pie'
          }
        ]
      }
      console.log(res)
    })
  }
}
</script>

<style>
</style>
