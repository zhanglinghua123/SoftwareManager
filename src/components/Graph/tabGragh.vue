
<template>
<div ref="tabGraph" style="height:100%;width:100%">

</div>
<!--  <div id="tabGraph" style="height:600px;width:50vw"></div>-->
</template>

<script>
import {getAllData} from "@/network/Home";

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
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

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
        // {
        //   type: 'bar',
        //   smooth: true,
        //   name: '就业率',
        //   data: [89.3, 92.1, 94.4, 85.4]
        // },
        // {
        //   type: 'bar',
        //   smooth: true,
        //   name: '发展指数',
        //   data: [95.8, 89.4, 91.2, 76.9]
        // },
        {
          type: 'bar',
          smooth: true,
          name: '就业人数',
          data: []
        }
      ]
    };
    getAllData().then(value =>{
      var array=[]
      var province = "安徽省"
      var tag = "就业人数（" + province + "）";
      for(var i = 2011; i <= 2019; i++){
        for(var j = 0; j < value.data.length; j++) {
          if (value.data[j]["year"] === i && value.data[j]["province"] === province) {
            array.push(value.data[j]["employee"]);
            break;
          }
        }
      }
      var option = {
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
          x: 'center',
          y: 'bottom',
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
          data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

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
          // {
          //   type: 'bar',
          //   smooth: true,
          //   name: '就业率',
          //   data: [89.3, 92.1, 94.4, 85.4]
          // },
          // {
          //   type: 'bar',
          //   smooth: true,
          //   name: '发展指数',
          //   data: [95.8, 89.4, 91.2, 76.9]
          // },
          {
            type: 'bar',
            smooth: true,
            name: tag,
            data: array
          }
        ]
      };
      myChart.setOption(option);
    })
    // myChart.setOption(option);
    window.onresize = function() {
      myChart.resize();
    };
  }
}
</script>

<style scoped>

</style>