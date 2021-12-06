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
        <NavMenu @turndata="turnTitle">
<!--          插入的中国图表 放在这里-->
          <template v-slot:map>
<!--            这里不能加上this哦-->
            <china v-bind:dataarray="dataarray" v-bind:graphtitle=title></china>
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
import {getAllData,getSearchData} from "@/network/Home";
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
  data(){
    return {
      title:"就业人数",
      dataarray :[],
      salaryarray :[],
      enterprisearray:[],
      emplyeearray:[]
    }
  },
  mounted() {
    // 这是用来请求数据的demo
    // 这个会获取所有的数据
    getAllData().then(value=>{
      console.log(value)
      this.$store.commit("addAllData",value.data)
      console.log(value.data)
      let Data = value.data
      this.salaryarray = new Array(9)
      this.enterprisearray = new Array(9)
      this.emplyeearray = new Array(9)
      for(let i=0;i<9;i++)
      {
        this.salaryarray[i] = []
        this.emplyeearray[i] = []
        this.enterprisearray[i] = []
      }
      for(let i=0;i<9;i++)
        for(let j=0;j<31;j++)
        {
          let {province,salary,year,employee,enterprise} = Data[i*31+j]
          // console.log(province,salary,year,employee,enterprise)
          this.salaryarray[i].push({
            name:province,
            value:salary
          })
          this.emplyeearray[i].push({
            name:province,
            value:employee
          })
          this.enterprisearray[i].push({
            name:province,
            value:enterprise,
          })
        }
      console.log("数据为:",this.enterprisearray,this.emplyeearray,this.salaryarray)
    })
    // 这个是条件查询的接口
    // getSearchData(undefined,"2011").then(value=>{
    //   console.log(value.data)
    // })
  },
  methods:{
    turnTitle(index){
      switch (index){
        case 1:
          this.title = "企业分布"
          this.dataarray = this.enterprisearray
          // this.dataarray =
          break;
        case 2:
          this.title = "平均薪资"
          this.dataarray = this.salaryarray
          break;
        case 3:
          this.title = "平均工作时间"
          break;
        case 4:
          this.title = "发展指数"
          break;
        case 5:
          this.title = "就业人数"
          this.dataarray = this.emplyeearray
          break;
      }
      console.log(index,this.title)
    }
  }
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