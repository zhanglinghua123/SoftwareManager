
<template>
<div ref="tabGraph" style="height:100%;width:100%">

</div>
<!--  <div id="tabGraph" style="height:600px;width:50vw"></div>-->
</template>

<script>
export default {
  name: "tabGragh",
  mounted() {
    let myChart = this.$echarts.init(this.$refs.tabGraph);
    console.log(myChart);
    console.log(this.$echarts);
    myChart.resize({height: 400});
    let option = {
      title:{
        text:'行业数据展示',
        x: 'center',
        textStyle: {
          // fontWeight:'border',
          fontSize:20,
          lineHeight:40,
          // align:'center',
        },
      },
      tooltip: {
        // trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      legend:{
        orient:'vertical',
        x: 'right',
        y: 'center',
        backgroundColor: '#fffffa'
      },
      toolbox: {
        feature: {
          show: true,
          magicType: {
            type: ["line", "bar", "stack"],
          },
          restore:{},
          dataView:{},
          saveAsImage: {},
        },

      },
      xAxis: {
        type: 'category',
        axisTick:{
          alignWithLabel: true,
        },
        // data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        data: ['2017', '2018', '2019', '2020']

      },
      yAxis: {
        show: true,
        type: 'value',
        axisLine:{
          show: true,
          symbol: ['none', 'arrow'],
        },
        name: '数量',
      },
      dataZoom:[
        {
          type: 'slider',
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: 100,
        }
      ],
      series: [
        {
          type: 'bar',
          smooth: true,
          name: '就业率',
          data: [89.3, 92.1, 94.4, 85.4]
        },
        {
          type: 'bar',
          smooth: true,
          name: '发展指数',
          data: [95.8, 89.4, 91.2, 76.9]
        },
        {
          type: 'bar',
          smooth: true,
          name: '就业人数',
          data: [97.7, 83.1, 92.5, 78.1]
        }
      ]
    };
    // let option = {
    //   title: {
    //     text: 'ECharts 入门示例'
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ['销量']
    //   },
    //   xAxis: {
    //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: '销量',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // };
    myChart.setOption(option);
    window.onresize = function() {
      myChart.resize();
    };
  }
}
</script>

<style scoped>

</style>