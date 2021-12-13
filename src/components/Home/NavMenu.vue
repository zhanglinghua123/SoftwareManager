<template>
  <el-row class="first">
    <el-col :span="5" class="el-menu">
      <el-menu default-active="5"
               class="el-menu-vertical-demo"
               background-color="#f1f8fa"
               active-text-color="#ffd04b"
               unique-opened>
        <el-menu-item v-on:click="turnData(5)" index="5">
          <template slot="title">
            <i class="el-icon-user"></i>
            就业人数
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(1)" index="1">
          <template slot="title">
            <i class="el-icon-map-location"></i>
            企业分布
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(2)" index="2">
          <template slot="title">
            <i class="el-icon-coin"></i>
            平均薪资
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(3)" index="3">
          <template slot="title">
            <i class="el-icon-timer"></i>
            平均工作时间
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(4)" index="4">
          <template slot="title">
            <i class="el-icon-thumb"></i>
            发展指数
          </template>
        </el-menu-item>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-position"></i>
            网络用户
          </template>
          <el-menu-item v-on:click="turnData(22)" index="22">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              互联网网民数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(7)" index="7">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              城市宽带接入用户数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(8)" index="8">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              农村宽带接入用户数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(9)" index="9">
            <template slot="title">
              <i class="el-icon-monitor"></i>
              互联网宽带接入用户数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(10)" index="10">
            <template slot="title">
              <i class="el-icon-add-location"></i>
              互联网宽带接入端口数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(23)" index="23">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              期末使用计算机数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(24)" index="24">
            <template slot="title">
              <i class="el-icon-files"></i>
              每百人使用计算机数
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title">
            <i class="el-icon-place"></i>
            网页网站
          </template>
          <el-menu-item v-on:click="turnData(12)" index="12">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              网页数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(13)" index="13">
            <template slot="title">
              <i class="el-icon-location-outline"></i>
              网站数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(14)" index="14">
            <template slot="title">
              <i class="el-icon-paperclip"></i>
              域名数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(15)" index="15">
            <template slot="title">
              <i class="el-icon-house"></i>
              企业拥有网站数
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(16)" index="16">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              每百家企业拥有网站数
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="17">
          <template slot="title">
            <i class="el-icon-money"></i>
            行业收入
          </template>
          <el-menu-item v-on:click="turnData(18)" index="18">
            <template slot="title">
              <i class="el-icon-connection"></i>
              嵌入式系统软件收入
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(19)" index="19">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              软件产品收入
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(20)" index="20">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              软件业务收入
            </template>
          </el-menu-item>
          <el-menu-item v-on:click="turnData(21)" index="21">
            <template slot="title">
              <i class="el-icon-guide"></i>
              信息技术服务收入
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col class="el-content" :span="19">
      <div class="title">
        <p>互联网产业地图</p>
      </div>
      <slot name="map"></slot>
      <div class="input">
        <p> 图表展示</p>
      </div>
      <slot name="graph1"></slot>
    </el-col>
  </el-row>
</template>

<script>
import {getAllProvince} from "@/network/Home";

export default {
  name: "NavMenu",
  components: {},
  data() {
    return {
      queryForm: {
        province: '',
        year: 0
      },
      option: []
    }
  },
  mounted() {
    getAllProvince().then(value => {
      var tmp = {value: 0, province: ""};
      for (var i = 0; i < value.data.length; i++) {
        tmp["value"] = i + 1;
        tmp["province"] = value.data[i];
        console.log("查询数据");
        console.log(tmp);
      }
    })
  },
  methods: {
    turnData(index) {
      console.log("我被点击了!", index)
      this.$emit("turndata", index)
    }
  }
}
</script>

<style scoped>
/*.first{*/
/*  margin-left: 5vw;*/
/*  margin-right:10vw;*/
/*}*/
p {
  color: black;
}

.el-menu-vertical-demo {
  /*text-align: center;*/
  height: 200vh;
}

select {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 150px;
  margin-top: 0;
  margin-bottom: 0;
}

.input {
  border-left: 3px solid lightseagreen;
  display: flex;
  font-family: 黑体;
  text-align: center;
  padding-left: 10px;
  margin-top: 40px;
  height: 22px;
}

.input p {
  font-size: 18px;
  margin: 2px 13px 2px 13px !important;
}

.title {
  padding-left: 2px;
  color: red;
  font-weight: lighter;
  font-family: 黑体;
  font-size: 18px;
  /*padding-top:10px;*/
  /*border-bottom:2px solid rgba(100,100,100,0.2) ;*/
}

#p1 {
  position: relative;
  left: 10px;
}

.el-menu {
  border: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: 微软雅黑;
  font-weight: bold;
}

.el-content {
  padding-left: 20px !important;
}

</style>