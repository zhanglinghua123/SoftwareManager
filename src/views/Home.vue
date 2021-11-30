<template>
  <div class="home">
    <el-container class="el_container">
      <el-header height="100px" :style="{padding:0}">
        <Tabbar></Tabbar>
      </el-header>
      <el-main :style="{}" id="el_main">
        <NavMenu >
          <template v-slot:graph1>
            <china></china>
            <tab-gragh></tab-gragh>
          </template>
        </NavMenu>
      </el-main>
    </el-container>
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
.home{
  height:100vh;
  margin-left: 5vw;
  margin-right:5vw;
}

</style>