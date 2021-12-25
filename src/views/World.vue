<template>
  <div class='wrapper'>
    <div class='chart' id='chart'></div>
  </div>
</template>
<script>
import '@/assets/js/world.js'
// import echarts from 'echarts'
let chart =undefined;
export default {
  name:"World",
  mounted () {
    chart = this.$echarts.init(document.getElementById('chart'))
    // 监听屏幕变化自动缩放图表
    window.addEventListener('resize', function () {
      chart.resize()
    })
    let graphTitle = "世界地图";
    let dataArray = [[],[],[],[],[],[],[],[],[]];
    var option_container ={
      // baseOption: {
        title: {
          text: "世界地图",
          left:"45%",
          // x: 'center',
          // y: 'top',
          // left: "50%",
          textStyle: {
            fontSize: 30,
            color: '#fff'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
          }
        },
        // 进行相关配置
        tooltip: {}, // 鼠标移到图里面的浮动提示框
      // 这个大概是在现有的地图上 加上一层图层
      visualMap: {
        left: 'right',
        min: 0,
        max: 1000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
        geo: {
          // 这个是重点配置区
          map: "world", // 表示世界地图
          roam: true,// 开启缩放 或者是 平移
          layoutCenter: ['50%', '50%'],
          // layoutSize: ,
          label: {
            normal: {
              // show: true, // 是否显示对应地名（是否显示标签）
              textStyle: {
                color: "#ffffff",// 设置字体颜色
              },
            },
          },
          itemStyle: { // 用来设置区域颜色
            normal: {
              borderColor: "#8ae0ee",// 边框颜色
              borderWidth: "1.2",// 边框颜色
              areaColor: "rgba(255,255,255,0)",// 区域颜色
              shadowColor: 'rgb(255,255,255)',// 设置阴影样式
            //   // areaColor: radial-gradient(white,white,white),
              shadowBlur: 10,
            },
            emphasis: {
            //   show:false,
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 2,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      // },
      data:[{
          name:"China",
          selected:true,
      }],
      series: [
        {
          type: "scatter",//geo 表达的是 地理坐标系
          // 此处表达的是 在地理坐标系上的图表
          coordinateSystem: "geo", // 对应上方配置
        },
        {
          name: graphTitle, // 浮动框的标题
          type: "map",// 地图配合展示 信息
          mapType: 'world',
          geoIndex: 0,
          data:[{
            name:"China",
            value:100,
            // selected:true,
          }, {
            name:"Russia",
            value:100,
            // selected: true,
          },
            {
              name:"United States",
              value:100,
            },
            // {
            //   name:"Australia",
            //   value:100,
            // },
            {
              name:"Japan",
              value:100,
            },
            // {
            //   name:"Canada",
            //   value:100,
            // },
            // {
            //   name:"Brazil",
            //   value:100,
            // },
            // {
            //   name:"French",
            //   value:100,
            // },
            {
              name:"United Kingdom",
              value:100,
            },
            // {
            //   name:"Germany",
            //   value:100,
            // }
          ]
        },
      ],
    }
    let _thisTurnToMap = this.turnToMap;
    chart.setOption(option_container);
    chart.on("click",function (params) {
      _thisTurnToMap(params.name);
    })
    }
  ,
  methods:{
    turnToMap(province)
    {
      console.log(province);
      if(province == "China")
        this.$router.push("/home")
      if(province == "Russia")
        this.$router.push("/home1")
      if(province == "United Kingdom")
        this.$router.push("/home2")
      if(province == "United States")
        this.$router.push("/home3")
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
  height:100%;
  border:0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(1, 57, 84, 100);
}
.wrapper .chart {
  width: 100vw;
  border:0;
  padding: 0;
  height: 100vh;
  border: 1px solid #eeeeee;
  /* background: url(../../public/static/bg.png) no-repeat; 背景图设置*/
  background-size: 100% 100%;
}
</style>