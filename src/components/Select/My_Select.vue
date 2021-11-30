<template>
  <div>
<!--    以下两个多选框 都是通过props 让父组件传入数组，来定义option的value与label-->
<!--    这是element-ui的多选框-->
    <el-select v-model="my_value" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
<!--    这是html标签的多选框-->
  </div>
</template>

<script>
export default {
  name: "Select",
  props:{
    options:{
      type:Array,
      default(){
        return [];
      }
    },
  },
  data(){
    return {
      my_value:'',
    }
  },
}
</script>

<style scoped>

</style>