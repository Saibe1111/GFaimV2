<template>
  <div id="watch-example">
    <h1>{{ title }}</h1>
    <line-chart class="chart" height="500px" :data="test" suffix=" €"></line-chart>
  </div>
</template>

<script>
const axios = require("axios");

const {IP, PORT} = require('../../assets/config.json');

export default {
  name: "Chart",
  props: {
    title: String,
  },
  data() {
    return {
      test: [],
    };
  },
  mounted: function () {
    //setInterval(function () {
      axios
        .get(`http://${IP.api}:${PORT.api}/turnover`)
        .then((response) => this.test.push(response.data));
    //}, 15000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chart {
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  width: 70%;
}

@media screen and (max-width: 990px) {
  .chart {
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    width: 100%;
  }
}

h1 {
  text-align: center;
}
</style>
