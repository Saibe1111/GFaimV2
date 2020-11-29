<template>
  <div id="watch-example">
    <h1>{{ title }}</h1>
    <column-chart class="chart" :data="test" suffix=" €"></column-chart>
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
        .get(`http://${IP.api}:${PORT.api}/client-categorie`)
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
