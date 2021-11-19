<template>
<div ref="test_convince" style="height:600px;width:100%;">

</div>
</template>

<script>
import  "@/assets/js/convince/shandong"
export default {
  name: "Test_Convince",
  mounted() {
    const option = {
      tooltip: {}, // 鼠标移到图里面的浮动提示框
      dataRange: {
        show: false,
        min: 0,
        max: 1000,
        text: ["High", "Low"],
        realtime: true,
        calculable: true,
        color: ["orangered", "#FF9B52", "#FFD068"],
      },
      geo: {
        // 这个是重点配置区
        map: "shandong", // 表示中国地图
        roam: true,// 开启缩放 或者是 平移
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
            borderColor: "#293171",// 边框颜色
            borderWidth: "2",// 边框颜色
            areaColor: "#0A0F33",// 区域颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)',// 设置阴影样式
            shadowBlur: 3,

          },
          emphasis: {
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
              value: 810,
            },
            {
              name: "四川",
              value: 453,
            },
          ],
        },
      ],
    }
    let my_chart = this.$echarts.init(this.$refs.test_convince);
    my_chart.setOption(option);
  }
}
</script>

<style scoped>

</style>