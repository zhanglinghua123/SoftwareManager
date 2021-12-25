<template>
  <el-row class="first">
    <el-col :span="5" class="el-menu">
      <el-menu
               class="el-menu-vertical-demo"
               background-color="#f1f8fa"
               active-text-color="#ffd04b"
               unique-opened>
        <el-menu-item v-on:click="turnData(1)" index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            企业产值
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(2)" index="2">
          <template slot="title">
            <i class="el-icon-user"></i>
            企业个数
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(3)" index="3">
          <template slot="title">
            <i class="el-icon-user"></i>
            区位商
          </template>
        </el-menu-item>
        <el-menu-item v-on:click="turnData(4)" index="4">
          <template slot="title">
            <i class="el-icon-user"></i>
            就业人数
          </template>
        </el-menu-item>
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
    // getAllProvince().then(value => {
    //   var tmp = {value: 0, province: ""};
    //   for (var i = 0; i < value.data.length; i++) {
    //     tmp["value"] = i + 1;
    //     tmp["province"] = value.data[i];
    //     console.log("查询数据");
    //     console.log(tmp);
    //   }
    // })
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