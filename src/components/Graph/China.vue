<template>
<div class="china">
  <div ref="mapBax" style="height:600px;width:100%">
  </div>
</div>
</template>

<script>
import '@/assets/js/China.js'
export default {
  name: "China",
  mounted(){
    let mycharts = this.$echarts.init(this.$refs.mapBax);
    mycharts.setOption({
      timeline: {
        data: ['2017','2018', '2019', '2020']
      },
      title:{
        text:'就业人数分布',
        x: 'center',
        y: 'top',
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
      // dataRange: {
      //   show: false,
      //   min: 0,
      //   max: 1000,
      //   text: ["High", "Low"],
      //   realtime: true,
      //   calculable: true,
      //   color: ["#0a0f55", "#29318c"],
      // },
      geo: {
        // 这个是重点配置区
        map: "china", // 表示中国地图
        roam: true,// 开启缩放 或者是 平移
        layoutCenter:['30%','50%'],
        label: {
          normal: {
            show: true, // 是否显示对应地名（是否显示标签）
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
            // areaColor: radial-gradient(white,white,white),
            shadowBlur: 10,

          },
          emphasis: {
            focus: 'self',
            areaColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 2,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
      series: [
        {
          type: "scatter",//geo 表达的是 地理坐标系
          // 此处表达的是 在地理坐标系上的图表
          coordinateSystem: "geo", // 对应上方配置
        },
        {
          name: "启动次数", // 浮动框的标题
          type: "map",// 地图配合展示 信息
          geoIndex: 0,
          data: [
            {
              name: "北京",
              value: 599,
            },
            {
              name: "上海",
              value: 142,
            },
            {
              name: "黑龙江",
              value: 44,
            },
            {
              name: "深圳",
              value: 92,
            },
            {
              name: "湖北",
              value: 1000,
            },
            {
              name: "四川",
              value: 453,
            },
            {
              name: "吉林",
              value: 200,
            },
          ],
        },
      ],
    });
    window.onresize = function() {
      mycharts.resize();
    };
  }
}
</script>

<style scoped>
    .china{
      background-color: rgba(1, 57, 84, 100);
    }
</style>