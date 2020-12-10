<template>
  <div id="app">
    <button type="button" @click.prevent="onClick">버튼</button>
    <pie-chart :chart-data="datacollection"></pie-chart>
  </div>
</template>

<script>
/* eslint-disable */
import PieChart from "@/PieChart";
import LineChart from "@/LineChart";
export default {
  name: 'App',
  data(){
    return {
      onClicked: false,
      datacollection: null
    }
  },
  components: {
    LineChart,
    PieChart
  },
  created() {

  },
  methods:{
    onClick(){
      this.fillData()
    },
    fillData(){
      this.datacollection = {
        labels: ['red', 'green', 'blue'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
