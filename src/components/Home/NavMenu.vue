<template>
  <el-row
      :style="{}"

      class="first">
    <el-col :span="5">
<!--      <el-container>-->
        <el-menu  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color=""
                  text-color="#000"
                  active-text-color="#ffd04b"
                  :style="{
                  border:'2px solid rgba(100,100,100,0.2)',
                  }"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location-outline"></i>
              企业分布
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-coin"></i>
              平均薪资</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-timer"></i>
              平均工作时间
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-thumb"></i>
              发展指数
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-user"></i>
              就业人数
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
<!--      </el-container>-->
    </el-col>
    <el-col :style="{
                    border:'2px solid rgba(100,100,100,0.2)',
                    position:'relative',
                    left:'20px',
                    }" :span="19">
<!--      <el-container>-->
        <div class="title">
          <p id="p1">互联网产业地图
          </p>
        </div>
        <div class="input">
          <p>地区:</p>
          <my_select :options="[{value: '选项1',
                            label: '黄金糕'
                            },
                            {
                            value: '选项2',
                            label: '双皮奶'
                            }]"
                            :style="{
                            width:'15%',
                            padding:'2px 10px',
                            }"/>
          <p>省份:</p>
          <my_select :options="[{value: '选项1',
                            label: '黄金糕'
                            },
                            {
                            value: '选项2',
                            label: '双皮奶'
                            }]"
                     :style="{
                            width:'15%',
                            padding:'2px 10px',
                            }"
          />
          <p>日期:</p>
          <my_select :options="[{value: '选项1',
                            label: '黄金糕'
                            },
                            {
                            value: '选项2',
                            label: '双皮奶'
                            }]"
                     :style="{
                            width:'15%',
                            padding:'2px 10px',
                            }"
          />
          <p>不知道:</p>
          <my_select :options="[{value: '选项1',
                            label: '黄金糕'
                            },
                            {
                            value: '选项2',
                            label: '双皮奶'
                            }]"
                     :style="{
                            width:'15%',
                            padding:'2px 10px',
                            }"
          />
        </div>
        <slot name="graph1"></slot>
<!--      </el-container>-->
    </el-col>
  </el-row>
</template>

<script>
import my_select from "@/components/Select/My_Select";
export default {
  name: "NavMenu",
  components:{
    my_select,
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
/*.first{*/
/*  margin-left: 5vw;*/
/*  margin-right:10vw;*/
/*}*/
.el-menu-vertical-demo{
  text-align: center;
}
.input{
  display: flex;
  font-family: Microsoft YaHei;
  font-size: 14px;
  text-align: center;
  padding-left:10px;
}
.input p{
  margin:13px 0;
}
.title{
  color:red;
  font-weight: lighter;
  font-family: 黑体;
  font-size: 16px;
  /*padding-top:10px;*/
  border-bottom:2px solid rgba(100,100,100,0.2) ;
}
#p1{
  position:relative;
  left:10px;
 }
</style>