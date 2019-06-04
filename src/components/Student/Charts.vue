<template lang="pug">
.container-fluid
  h1 Charts
  .container
    line-chart(:chart-data='chartdata')
</template>

<script>

import LineChart from './LineChart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    chartdata: null
  }),
  mounted () {
    this.chartdata = {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    }
    this.loaded = true
  }
}

</script>

<style lang="stylus">
.container
  height 400px
  width  100%
</style>
