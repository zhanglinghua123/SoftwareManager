<template>
<div class="pie" ref="pie_graph">

</div>
</template>

<script>
export default {
  name: "Pie_Graph",
  mounted() {
    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: '50px'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    let mycharts = this.$echarts.init(this.$refs.pie_graph);
    mycharts.setOption(option);
  }
}
</script>

<style scoped>
.pie{
  width: 100%;
  height:600px;
}
</style>