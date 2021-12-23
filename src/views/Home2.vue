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
          <UK v-bind:dataarray="dataarray" v-bind:graphtitle=title ></UK>
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
<!--这个负责英国的数据-->
<script>
// @ is an alias to /src
import * as Home from "../network/Home";
import Tabbar from "@/components/Home2/Tabbar"
import NavMenu from "@/components/Home2/NavMenu";
import tabGragh from "@/components/Graph/tabGragh";
import UK from "@/components/Graph/UK"
// import turnAllDataForm from "../JS/turnDataForm";

export default {
  name: 'Home2',
  components: {
    UK,
    tabGragh,
    NavMenu,
    Tabbar,
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
          this.title = "企业分布"
          Home.getalljiaran1().then(value=>{
            console.log(value.data)
            this.dataarray = value.data;
          })
          break;
        case 2:
          this.title = "平均薪资"
          Home.getalljiaran3().then(value=>{
            this.dataarray = value.data;
          })
          break;
        case 3:
          this.title = "平均工作时间"
          this.dataarray = []
          break;
        case 4:
          this.title = "发展指数"
          Home.getall009().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 5:
          this.title = "就业人数"
          Home.getalljiaran2().then(value=>{
            this.dataarray = value.data;
          })
          break;
        case 7:
          this.title = "城市宽带接入用户数";
          Home.getall001().then(value=>{
            console.log(value.data)
            this.dataarray = value.data
            // this.dataarray = turnAllDataForm(value.data)
          })
          break;
        case 8:
          this.title = "农村宽带接入用户数";
          Home.getall007().then(value=>{
            console.log(value.data)
            this.dataarray = value.data
            // this.dataarray = turnAllDataForm(value.data)
          })
          break;
        case 9:
          this.title = "互联网宽带接入用户数";
          Home.getall003().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 10:
          this.title = "互联网宽带接入端口数";
          Home.getall002().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 12:
          this.title = "网页数";
          Home.getall014().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 13:
          this.title = "网站数";
          Home.getall015().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 14:
          this.title = "域名数";
          Home.getall017().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 15:
          this.title = "企业拥有网站数";
          Home.getall010().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 16:
          this.title = "每百家企业拥有网站数";
          Home.getall005().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 18:
          this.title = "嵌入式系统软件收入";
          Home.getall011().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 19:
          this.title = "软件产品收入";
          Home.getall012().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 20:
          this.title = "软件业务收入";
          Home.getall013().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 21:
          this.title = "信息技术服务收入";
          Home.getall016().then(value=>{
            this.dataarray = value.data;
          })
          break;
        case 22:
          this.title = "互联网网民数";
          console.log("我被点击了")
          Home.getall004().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 23:
          this.title = "期末使用计算机数";
          Home.getall008().then(value=>{
            this.dataarray = value.data
          })
          break;
        case 24:
          this.title = "每百人使用计算机数";
          Home.getall006().then(value=>{
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