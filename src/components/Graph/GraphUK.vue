<template>
  <div>
    <div>
      <div class="input">
        <el-form :model="queryForm" ref="queryForm" :inline="true">
          <el-form-item prop="province" label="省份1">
            <el-select placeholder="省份1" v-model="queryForm.province1">
              <el-option v-for="(item, index) in provinces" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="province" label="省份2">
            <el-select placeholder="省份2" v-model="queryForm.province2">
              <el-option v-for="(item, index) in provinces" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click.native="reset">查询</el-button>
        </el-form>
      </div>
    </div>
    <div ref="GraphRus" style="height:600px;width:100%"></div>
  </div>
</template>

<script>
import {
  getEmployeeByProvinceUK,
  getEnterpriseNumByProvinceUK,
  getEnterpriseWealthByProvinceUK,
  getLQByProvinceUK
} from "@/network/Home2";

export default {
  name: "GraphUK",
  data() {
    return {
      chart: undefined,
      provinces: ["Scotland", "Wales", "England", "Northern Ireland"],
      years: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      unitlist: [{title: '企业产值', unit: '企业产值/千英镑'}, {title: '企业个数', unit: '企业数/个'}, {title: '区位商', unit: '区位商/1'},
        {title: '就业人数', unit: '就业人数/人'}],
      data1: [],
      data2: [],
      unit: '人数/人',
      queryForm: {
        province1: 'Scotland',
        province2: 'Wales',
      },
    }
  },
  watch: {
    graphtitle(n, o) { //n为新值,o为旧值
      this.graphtitle = n;
      this.updatetag();
      this.reset();
    },
  },
  props: {
    graphtitle: {
      default() {
        return "企业产值";
      }
    }
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.GraphRus);
    this.chart.resize({height: 400});
    this.reset();
  },
  methods: {
    reset() {
      if (this.graphtitle === "企业产值") {
        getEnterpriseWealthByProvinceUK(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getEnterpriseWealthByProvinceUK(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "企业个数") {
        getEnterpriseNumByProvinceUK(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getEnterpriseNumByProvinceUK(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "区位商") {
        getLQByProvinceUK(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getLQByProvinceUK(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "就业人数") {
        getEmployeeByProvinceUK(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getEmployeeByProvinceUK(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      }
    },
    updatetag() {
      for (var i = 0; i < this.unitlist.length; i++) {
        if (this.unitlist[i].title === this.graphtitle) {
          this.unit = this.unitlist[i].unit;
          break;
        }
      }
    },
    optionToContent: function (opt) {
      let axisData = opt.xAxis[0].data; //坐标数据
      let series = opt.series; //折线图数据
      let tdHeads = '<td  >时间</td>'; //表头
      let tdBodys = ''; //数据
      series.forEach(function (item) {
        //组装表头
        tdHeads += `<td >${item.name}</td>`;
      });
      let table = `<table border="1" ><tbody><tr>${tdHeads} </tr>`;
      for (let i = 0, l = axisData.length; i < l; i++) {
        for (let j = 0; j < series.length; j++) {
          //组装表数据
          tdBodys += `<td>${series[j].data[i]}</td>`;
        }
        table += `<tr><td >${axisData[i]}</td>${tdBodys}</tr>`;
        tdBodys = '';
      }
      table += '</tbody></table>';
      return table;
    },
    draw() {
      let option = {
        title: {
          text: this.graphtitle,
          x: 'center',
          textStyle: {
            fontSize: 20,
            lineHeight: 20,
          },
        },
        grid: {
          top: '25%'
        },
        tooltip: {
          axisPointer: {type: 'cross'}
        },
        legend: {
          orient: 'horizontal',
          x: 'center',
          y: 'top',
          backgroundColor: '#fffffa',
          top: '10%'
        },
        toolbox: {
          feature: {
            show: true,
            magicType: {
              type: ["line", "bar", "stack"],
            },
            restore: {},
            dataView: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          name: "年份",
          axisTick: {
            alignWithLabel: true,
          },
          data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        },
        yAxis: {
          show: true,
          type: 'value',
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
          },
          name: this.unit,
        },
        dataZoom: [
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
            name: this.queryForm.province1,
            data: this.data1
          },
          {
            type: 'bar',
            smooth: true,
            name: this.queryForm.province2,
            data: this.data2
          }
        ],
        optionToContent: function (opt) {
          let axisData = opt.xAxis[0].data; //坐标数据
          let series = opt.series; //折线图数据
          let tdHeads = '<td  >时间</td>'; //表头
          let tdBodys = ''; //数据
          series.forEach(function (item) {
            tdHeads += `<td >${item.name}</td>`;
          });
          let table = `<table border="1" ><tbody><tr>${tdHeads} </tr>`;
          for (let i = 0, l = axisData.length; i < l; i++) {
            for (let j = 0; j < series.length; j++) {
              tdBodys += `<td>${series[j].data[i]}</td>`;
            }
            table += `<tr><td >${axisData[i]}</td>${tdBodys}</tr>`;
            tdBodys = '';
          }
          table += '</tbody></table>';
          return table;
        },
      };
      // this.optionToContent(option);
      this.chart.setOption(option);
      window.onresize = function () {
        this.chart.resize();
      };
    }
  }
}
</script>

<style scoped>
.el-form {
  margin-top: 20px;
  margin-left: 40px;
  font-family: 微软雅黑;
  font-weight: bold;
  color: black;
}

.el-select-dropdown__item {
  text-align: center;
}

.el-select >>> .el-input__inner {
  width: 200px;
}

.el-select >>> .el-input.is-focus .el-input__inner {
  border-color: #a6c1ee;
}

>>> .el-button {
  background-color: rgb(241, 248, 250);
  color: black;
  border-color: #a6c1ee;
}
</style>