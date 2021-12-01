<template>
  <div class="home">
      <div class="head">
        <p style="margin-left: calc(10vw + 40px)">产业地图</p>
        <p>全面分析</p>
        <p>数据展示</p>
        <p class="rightItem">Github地址</p>
      </div>
<!--      <el-header height="100px" :style="{padding:0}">-->
<!--        <Tabbar></Tabbar>-->
<!--      </el-header>-->
      <el-main  id="el_main">
        <NavMenu >
<!--          插入的中国图表 放在这里-->
          <template v-slot:map>
            <china></china>
<!--          插入的图表 放在这里-->
          </template>
          <template v-slot:graph1>
<!--            <china></china>-->
            <tab-gragh></tab-gragh>
          </template>
        </NavMenu>
      </el-main>
  </div>
</template>

<script>
// @ is an alias to /src
import china from "@/components/Graph/China"
import Tabbar from "@/components/Home/Tabbar"
import NavMenu from "@/components/Home/NavMenu";
import tabGragh from "@/components/Graph/tabGragh";
export default {
  name: 'Home',
  components: {
    tabGragh,
    NavMenu,
    Tabbar,
    china,
  },
}
</script>
<style>
.head{
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  width:100vw;
  height:70px;
  background: rgba(0,0,0,0.8);
  /*padding-left: 10vw;*/
}
.home{
  height:100vh;
  /*margin-left: 5vw;*/
  /*margin-right:5vw;*/
}
p{
  font-size: 20px;
  height:100%;
  line-height:100%;
  margin-right:30px;
  color:white;
}
.rightItem{
  margin-left: 50vw;
}
#el_main{
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>