<template>
<div>
  <div class="back">
    <div class="message">
      <img src="../../assets/img/tabbar/img_3.png" class="item1">
      <div class="item2">
        <span class="span1">互联网行业数据产业地图</span><br>
        <span class="span2">Internet data industry map</span>
      </div>
      <div class="item3"></div>
      <span class="item4">数据展示</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
.back{
  height:100px;
  /*background: url("../../assets/img/tabbar/img_2.png");*/
}
img {
  height:100%;
}
.message{
  display: flex;
  margin:20px 10px 20px 10px;
}
img {
  height:60px;
  position:relative;
  bottom:10px;
}
/*.item1{*/
/*  flex-basis:10vw;*/
/*}*/
.span1{
  font-size:20px;
  /*color:#E6A23C;*/
  font-weight: 500;
}
.span2{
  font-size:14px;
  font-weight: initial;
  color:rgba(0,0,0,0.2);

}
.item2{
  flex-basis:220px;
  text-align: center;
}
.item3{
  flex:1;
}
.item4{
  flex-basis:10vw;
  font-size:20px;
  color:#3a8ee6;
}
</style>