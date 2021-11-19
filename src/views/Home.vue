<template>
  <div class="home">
    <el-container class="el_container">
      <el-header height="100px" :style="{padding:0}">
        <Tabbar></Tabbar>
      </el-header>
      <el-main :style="{
                         // padding: '10px 10px 0 0',
                         // box_sizing: 'border-box',
                         }" id="el_main">
        <NavMenu >
          <template v-slot:graph1>
            <china></china>
            <tab-gragh></tab-gragh>
            <pie_-graph></pie_-graph>
          </template>
        </NavMenu>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import test_convince from "@/components/Graph/Test_Convince"
import china from "@/components/Graph/China"
import Tabbar from "@/components/Home/Tabbar"
import NavMenu from "@/components/Home/NavMenu";
import tabGragh from "@/components/Graph/tabGragh";
import Pie_Graph from "@/components/Graph/Pie_Graph";
export default {
  name: 'Home',
  components: {
    tabGragh,
    NavMenu,
    Tabbar,
    china,
    test_convince,
    Pie_Graph
  },
}
</script>
<style>
.home{
  height:100vh;
  margin-left: 15vw;
  margin-right:15vw;
}

</style>