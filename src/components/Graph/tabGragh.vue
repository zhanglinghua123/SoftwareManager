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
          <el-form-item prop="year" label="年份">
            <el-select placeholder="年份" v-model="queryForm.year">
              <el-option v-for="(item, index) in years" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click.native="reset">查询</el-button>
        </el-form>
      </div>
    </div>
    <div ref="tabGraph" style="height:600px;width:100%"></div>
  </div>
</template>

<script>
import {getProvinceData} from "@/network/Home";
import {
  getCityUserByProvince, getComputerByProvince,
  getCountryUserByProvince,
  getEmbeddedRevenueByProvince,
  getEnterpriseSiteByProvince, getHundredComputerByProvince,
  getHundredEnterprisesSiteByProvince, getInformationRevenueByProvince,
  getInternetInterfaceByProvince,
  getInternetUserByProvince, getITUserByProvince,
  getPageByProvince,
  getRealmByProvince,
  getSiteByProvince, getSoftwareProductRevenueByProvince, getSoftwareServiceRevenueByProvince
} from "@/network/Province";

export default {
  name: "tabGragh",
  data() {
    return {
      chart: undefined,
      provinces: ["", "安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林",
        "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "天津", "西藏", "新疆", "云南", "浙江"],
      years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      unitlist: [{title: '企业分布', unit: '数量/个'}, {title: '平均薪资', unit: '年平均薪资/元'}, {title: '就业人数', unit: '人数/人'},
        {title: '城市宽带接入用户数', unit: '用户数/万户'}, {title: '农村宽带接入用户数', unit: '用户数/万户'}, {
          title: '互联网宽带接入用户数',
          unit: '用户数/万户'
        },
        {title: '互联网宽带接入端口数', unit: '端口数/万个'}, {title: '网页数', unit: '网页数/万个'}, {title: '网站数', unit: '网站数/万个'},
        {title: '域名数', unit: '域名数/万个'}, {title: '企业拥有网站数', unit: '网站数/个'}, {title: '每百家企业拥有网站数', unit: '网站数/个'},
        {title: '嵌入式系统软件收入', unit: '年收入/万元'}, {title: '软件产品收入', unit: '年收入/万元'}, {title: '软件业务收入', unit: '年收入/万元'},
        {title: '信息技术服务收入', unit: '年收入/万元'}, {title: '互联网网民数', unit: '人数/万人'}, {title: '期末使用计算机数', unit: '数量/台'},
        {title: '每百人使用计算机数', unit: '数量/台'}],
      data1: [],
      data2: [],
      tag: 'employee',
      unit: '人数/人',
      queryForm: {
        province1: '安徽',
        province2: '北京',
        year: ''
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
        return "就业人数";
      }
    }
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.tabGraph);
    this.chart.resize({height: 400});
    this.reset();
  },
  methods: {
    reset() {
      if (this.graphtitle === "就业人数" || this.graphtitle === "平均薪资" || this.graphtitle === "企业分布") {
        getProvinceData(this.queryForm.province1).then(value => {
          this.data1 = [];
          if (this.queryForm.province1 !== '') {
            for (var i = 2011; i <= 2019; i++) {
              for (var j = 0; j < value.data.length; j++) {
                if (value.data[j]["year"] === i) {
                  this.data1.push(value.data[j][this.tag]);
                  break;
                }
              }
            }
          }
          getProvinceData(this.queryForm.province2).then(value => {
            this.data2 = [];
            if (this.queryForm.province2 !== '') {
              for (var i = 2011; i <= 2019; i++) {
                for (var j = 0; j < value.data.length; j++) {
                  if (value.data[j]["year"] === i) {
                    this.data2.push(value.data[j][this.tag]);
                    break;
                  }
                }
              }
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "互联网宽带接入用户数") {
        getInternetUserByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getInternetUserByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "城市宽带接入用户数") {
        getCityUserByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getCityUserByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "农村宽带接入用户数") {
        getCountryUserByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getCountryUserByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "互联网宽带接入端口数") {
        getInternetInterfaceByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getInternetInterfaceByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "网页数") {
        getPageByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getPageByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "网站数") {
        getSiteByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getSiteByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "域名数") {
        getRealmByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getRealmByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "企业拥有网站数") {
        getEnterpriseSiteByProvince(this.queryForm.province1).then(value => {
          this.data1 = ['', ''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getEnterpriseSiteByProvince(this.queryForm.province2).then(value => {
            this.data2 = ['', ''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "每百家企业拥有网站数") {
        getHundredEnterprisesSiteByProvince(this.queryForm.province1).then(value => {
          this.data1 = ['', ''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getHundredEnterprisesSiteByProvince(this.queryForm.province2).then(value => {
            this.data2 = ['', ''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "嵌入式系统软件收入") {
        getEmbeddedRevenueByProvince(this.queryForm.province1).then(value => {
          this.data1 = ['', ''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getEmbeddedRevenueByProvince(this.queryForm.province2).then(value => {
            this.data2 = ['', ''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "软件产品收入") {
        getSoftwareProductRevenueByProvince(this.queryForm.province1).then(value => {
          this.data1 = [''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getSoftwareProductRevenueByProvince(this.queryForm.province2).then(value => {
            this.data2 = [''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "软件业务收入") {
        getSoftwareServiceRevenueByProvince(this.queryForm.province1).then(value => {
          this.data1 = [''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getSoftwareServiceRevenueByProvince(this.queryForm.province2).then(value => {
            this.data2 = [''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "信息技术服务收入") {
        getInformationRevenueByProvince(this.queryForm.province1).then(value => {
          this.data1 = ['', '', ''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getInformationRevenueByProvince(this.queryForm.province2).then(value => {
            this.data2 = ['', '', ''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "互联网网民数") {
        getITUserByProvince(this.queryForm.province1).then(value => {
          this.data1 = [];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getITUserByProvince(this.queryForm.province2).then(value => {
            this.data2 = [];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "期末使用计算机数") {
        getComputerByProvince(this.queryForm.province1).then(value => {
          this.data1 = ['', ''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getComputerByProvince(this.queryForm.province2).then(value => {
            this.data2 = ['', ''];
            for (var i = 0; i < value.data.length; i++) {
              this.data2.push(value.data[i].num);
            }
            this.draw();
          });
        });
      } else if (this.graphtitle === "每百人使用计算机数") {
        getHundredComputerByProvince(this.queryForm.province1).then(value => {
          this.data1 = ['', ''];
          for (var i = 0; i < value.data.length; i++) {
            this.data1.push(value.data[i].num);
          }
          getHundredComputerByProvince(this.queryForm.province2).then(value => {
            this.data2 = ['', ''];
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
      switch (this.graphtitle) {
        case "就业人数":
          this.tag = 'employee';
          break;
        case "平均薪资":
          this.tag = 'salary';
          break;
        case "企业分布":
          this.tag = 'enterprise';
          break;
        default:
          this.tag = '';
          break;
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
            lineHeight: 40,
          },
        },
        tooltip: {
          axisPointer: {type: 'cross'}
        },
        legend: {
          orient: 'vertical',
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
          data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
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
  width: 100px;
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