<template>
  <div class="china">
    <div ref="mapBax" style="height:600px;width:100%">
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column property="company" label="公司" width="150"></el-table-column>
        <el-table-column property="province" label="工作地点" width="150"></el-table-column>
        <el-table-column property="department" label="职位" width="100"></el-table-column>
        <el-table-column property="gotowork" label="上班时间"  width="100"></el-table-column>
        <el-table-column property="getoffwork" label="上班时间"  width="100"></el-table-column>
        <el-table-column property="workday" label="工作时间"  width="100"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[1, 3, 5, 8]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNum">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import '@/assets/js/UK.js'

// 该函数是用来更新Echarts 中国图表数据的函数
function createCharts(_this) {
  let graphTitle = _this.graphtitle;
  let dataArray = _this.dataarray
  // console.log(graphTitle, dataArray[0])
  _this.chart.setOption({
    baseOption: {
      timeline: {
        left: "5%",
        right: "30%",
        show: true,
        autoPlay: true,
        playInterval: 2000,
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
      },
      xAxis: {
        max: 'dataMax'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            let namearray = ["安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川"
              , "天津", "西藏", "新疆", "云南", "浙江"]
            // console.log(value)
            return namearray[value]
          },
        },
        // 是否 是 反方向的坐标轴
        inverse: true,
        animationDuration: 1000,
        animationDurationUpdate: 1000,
        // max: 2 // only the largest 3 bars will be displayed
      },
      grid: {
        left: '68%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      title: {
        text: graphTitle,
        // x: 'center',
        // y: 'top',
        left: "30%",
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
        map: "UK", // 表示中国地图
        roam: true,// 开启缩放 或者是 平移
        // left:'10%',
        // top:"10%",
        layoutCenter: ['35%', '50%'],
        layoutSize: 600,
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
    },
    options: [
      {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            // data:dataArray[0]
            // data:dataArray[0]
            data: dataArray[0]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[0],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      },
      {
        series: [
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[1]
          },
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[1],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      },
      {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[2]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[2],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      }, {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[3]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[3],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      }, {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[4]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[4],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      }, {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[5]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[5],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      }, {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[6]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[6],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      }, {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[7]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[7],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      }, {
        series: [
          {
            type: "scatter",//geo 表达的是 地理坐标系
            // 此处表达的是 在地理坐标系上的图表
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: graphTitle, // 浮动框的标题
            type: "map",// 地图配合展示 信息
            geoIndex: 0,
            data: dataArray[8]
          },
          {
            realtimeSort: true,
            name: graphTitle,
            type: 'bar',
            data: dataArray[8],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ]
      },]
  }, true);
  console.log(_this.chart)
  window.onresize = function () {
    _this.chart.resize();
  };
}

export default {
  name: "UK",
  data() {
    return {
      currentPage: 1,//默认显示第一页
      pageSize:1,//默认每页显示10条
      totalNum: null, //总页数
      dialogTableVisible:false,
      chart: undefined,
      gridData: [],
    }
  },
  created(){
    this.totalNum=this.gridData.length;
  },
  watch: {
    graphtitle(n, o) { //n为新值,o为旧值
      this.graphtitle = n;
      this.chart.setOption({
        title: {
          text: this.graphtitle
        },
      }, false)
    },
    dataarray(n, o) {
      this.dataarray = n
      console.log("新数据为:", n)
      createCharts(this)
    }
  },
  props: {
    dataarray: {
      type: Array,
      default: function () {
        return []
      }
    },
    graphtitle: {
      default() {
        return "就业人数"
      }
    }
  },
  mounted() {
    console.log("create")
    this.chart = this.$echarts.init(this.$refs.mapBax);
    createCharts(this)
    console.log(this.chart)
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;    //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;    //动态改变
    },
  }
}
</script>

<style scoped>
.china {
  background-color: rgba(1, 57, 84, 100);
}
</style>