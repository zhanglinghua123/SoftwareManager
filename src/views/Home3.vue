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
          <American v-bind:dataarray="dataarray" v-bind:graphtitle=title ></American>
          <!--          插入的图表 放在这里-->
        </template>
        <template v-slot:graph1>
          <!--            <china></china>-->
          <tab-gragh v-bind:dataarray="dataarray" v-bind:graphtitle=title></tab-gragh>
        </template>
      </NavMenu>
    </el-main>
    <div class="tail"></div>
  </div>
</template>
<!--这个负责美国的数据-->
<script>
// @ is an alias to /src
import * as Home3 from "../network/Home3";
import china from "@/components/Graph/China"
import NavMenu from "@/components/Home3/NavMenu";
import tabGragh from "@/components/Graph/tabGragh";
import American from "../components/Graph/Amercian";
// import turnAllDataForm from "../JS/turnDataForm";
export default {
  name: 'Home3',
  components: {
    American,
    tabGragh,
    NavMenu,
    // Tabbar,
    china,
  },
  data() {
    return {
      title: "就业人数",
      dataarray: [],

    }
  },
  mounted() {
  },
  methods: {
    turnTitle(index) {
      switch (index) {
        case 1:
          this.title = "就业人数"
          Home3.getall001().then(value=>{
            console.log(value.data)
            this.dataarray = value.data;
            console.log(value.data[1].map((value)=>{
              return value.name;
            }))
          })
          break;
        case 2:
          this.title = "平均工资"
          Home3.getall002().then(value=>{
            this.dataarray = value.data;
          })
          break;
        case 3:
          this.title = "税收"
          Home3.getall003().then(value=>{
            this.dataarray = value.data;
          })
          break;
        case 4:
          this.title = "各行业GDP"
          Home3.getall004().then(value=>{
            this.dataarray = value.data;
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