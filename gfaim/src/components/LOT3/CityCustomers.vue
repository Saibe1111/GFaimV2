<template>
  <div id="watch-example">
    <h1>{{ title }}</h1>
    <pie-chart class="chart" :data="test"></pie-chart>
  </div>
</template>

<script>
const axios = require("axios");
const {IP, PORT} = require('../../../../config.json');

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
        .get(`http://${IP.api}:${PORT.api}/city-customers`)
        .then((response) => this.test = response.data );
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
