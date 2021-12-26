<template>
  <div class="home">
    <div class="head">
      <p style="margin-left: calc(10vw + 40px)">产业地图</p>
      <p>全面分析</p>
      <p>数据展示</p>
      <p class="rightItem">Github地址</p>
    </div>
    <el-main id="el_main">
      <NavMenu @turndata="turnTitle">
        <!--          插入的中国图表 放在这里-->
        <template v-slot:map>
          <!--            这里不能加上this哦-->
          <russian v-bind:dataarray="dataarray" v-bind:graphtitle=title ></russian>
          <!--          插入的图表 放在这里-->
        </template>
        <template v-slot:graph1>
          <!--            <china></china>-->
          <GraphRus v-bind:dataarray="dataarray" v-bind:graphtitle=title></GraphRus>
        </template>
      </NavMenu>
    </el-main>
    <div class="tail"></div>
  </div>
</template>

<!--这个组件是负责俄罗斯的数据-->
<script>
// @ is an alias to /src
import * as Home from "../network/Home1";
// import Tabbar from "@/components/Home1/Tabbar"
import NavMenu from "@/components/Home1/NavMenu";
import Russian from "../components/Graph/Russian";
import GraphRus from "@/components/Graph/GraphRus";
// import turnAllDataForm from "../JS/turnDataForm";

export default {
  name: 'Home1',
  components: {
    GraphRus,
    Russian,
    NavMenu,
    // Tabbar,
  },
  data() {
    return {
      title: "",
      dataarray: [],

    }
  },
  mounted() {
  },
  methods: {
    turnTitle(index) {
      switch (index) {
        case 1:
          this.title = "互联网用户"
          Home.getall001().then(value=>{
            this.dataarray = value.data
            console.log(value.data[1].map((value)=>{
              return value.name;
            }))
          })
          break;
        case 2:
          this.title = "宽带覆盖范围"
          Home.getall002().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 3:
          this.title = "市场规模"
          Home.getall003().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 4:
          this.title = "移动互联网用户"
          Home.getall004().then(value=>{
            this.dataarray = value.data
          })
          break;
      }
      console.log(index, this.title)
    }
  }
}
</script>
<style>
.head {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  height: 70px;
  background: rgba(0, 0, 0, 0.8);
  /*padding-left: 10vw;*/
}

.home {
  height: 100vh;
  margin-right: 0;
  /*margin-left: 5vw;*/
  /*margin-right:5vw;*/
}

p {
  font-size: 20px;
  height: 100%;
  line-height: 100%;
  margin-right: 30px;
  color: white;
}

.rightItem {
  margin-left: 50vw;
}

#el_main {
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 0;
}

.tail{
  display: flex;
  background-color: black;
  height: 20vh;
}

</style>