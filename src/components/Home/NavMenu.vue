<template>
  <el-row
      class="first">
    <el-col :span="5" class="el-menu">
<!--      <el-container>-->
        <el-menu  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#f1f8fa"
                  active-text-color="#ffd04b"
        >
          <el-menu-item v-on:click="turnData(1)" index="1">
            <template slot="title">
              <i class="el-icon-location-outline"></i>
              企业分布
            </template>
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
          </el-menu-item>
          <el-menu-item v-on:click="turnData(2)" index="2">
            <template slot="title">
              <i class="el-icon-coin"></i>
              平均薪资</template>
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
          </el-menu-item>
          <el-menu-item v-on:click="turnData(3)" index="3">
            <template slot="title">
              <i class="el-icon-timer"></i>
              平均工作时间
            </template>
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="3-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="3-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
          </el-menu-item>
          <el-menu-item v-on:click="turnData(4)" index="4">
            <template slot="title">
              <i class="el-icon-thumb"></i>
              发展指数
            </template>
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="4-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="4-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
          </el-menu-item>
          <el-menu-item v-on:click="turnData(5)" index="5">
            <template slot="title">
              <i class="el-icon-user"></i>
              就业人数
            </template>
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="5-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="5-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
          </el-menu-item>
        </el-menu>
<!--      </el-container>-->
    </el-col>
    <el-col class="el-content" :span="19">
<!--      <el-container>-->
        <div class="title">
          <p>互联网产业地图</p>
        </div>
        <div class="input">
          <el-form :model="queryForm" ref="queryForm" :inline="true" >
            <el-form-item prop="province" label="省份">
              <el-select placeholder="省份" v-model="queryForm.province">
                <el-option value="安徽省"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="year" label="年份">
              <el-select placeholder="年份" v-model="queryForm.year">
                <el-option value="2011" ></el-option>
                <el-option value="2012" ></el-option>
                <el-option value="2013" ></el-option>
                <el-option value="2014" ></el-option>
                <el-option value="2015" ></el-option>
                <el-option value="2016" ></el-option>
                <el-option value="2017" ></el-option>
                <el-option value="2018" ></el-option>
                <el-option value="2019" ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
<!--          <p>地区:</p>-->
<!--          <select>-->
<!--            <option value ="volvo">Volvo</option>-->
<!--            <option value ="saab">Saab</option>-->
<!--            <option value="opel">Opel</option>-->
<!--            <option value="audi">Audi</option>-->
<!--          </select>-->
<!--          <p>省份:</p>-->
<!--          <select>-->
<!--            <option value ="volvo">Volvo</option>-->
<!--            <option value ="saab">Saab</option>-->
<!--            <option value="opel">Opel</option>-->
<!--            <option value="audi">Audi</option>-->
<!--          </select>-->
<!--          <p>日期:</p>-->
<!--          <select>-->
<!--            <option value ="volvo">Volvo</option>-->
<!--            <option value ="saab">Saab</option>-->
<!--            <option value="opel">Opel</option>-->
<!--            <option value="audi">Audi</option>-->
<!--          </select>-->
        </div>
        <slot name="map"></slot>
        <div class="title">
          <p> 图表展示</p>
        </div>
        <div class="input">
        </div>
        <slot name="graph1"></slot>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NavMenu",
  components:{
  },
  data(){
    return {
      queryForm:{
        province:'',
        year: 0
      }
    }
  },
  methods:{
    turnData(index){
      console.log("我被点击了!",index)
      this.$emit("turndata",index)
    }
  }
}
</script>

<style scoped>
/*.first{*/
/*  margin-left: 5vw;*/
/*  margin-right:10vw;*/
/*}*/
p{
  color:black ;
}
.el-menu-vertical-demo{
  text-align: center;
  height:100vh;
}
select{
  border:1px solid rgba(0,0,0,0.1);
  width:150px;
  margin-top: 0;
  margin-bottom: 0;
}
.input{
  border-left:3px solid lightseagreen  ;
  display: flex;
  font-family: 黑体;
  text-align: center;
  padding-left:10px;
  margin-bottom: 20px;
  height:22px;
}
.input p{
  font-size: 18px;
  margin:2px 13px 2px 13px !important;
}
.title{
  padding-left: 2px;
  color:red;
  font-weight: lighter;
  font-family: 黑体;
  font-size: 18px;
  /*padding-top:10px;*/
  /*border-bottom:2px solid rgba(100,100,100,0.2) ;*/
}
#p1{
  position:relative;
  left:10px;
 }
.el-menu{
  border:0!important;
  margin:0!important;
  padding: 0 !important;
}
.el-content{
  padding-left: 20px !important;
}
</style>