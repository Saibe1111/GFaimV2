<template>
  <div id="watch-example">
    <column-chart class="chart" height="500px" :data="test" suffix=" €"></column-chart>
  </div>
</template>

<script>
const axios = require("axios");
const {IP, PORT} = require('../../../assets/config.json');

export default {
  name: "Chart",
  props: {
    tittle: String,
  },
  data() {
    return {
      test: [],
    };
  },
  mounted: function () {
    //setInterval(function () {
      axios
        .get(`http://${IP.api}:${PORT.api}/customer-spending-category/vegan`)
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
}

@media screen and (max-width: 990px) {
  .chart {
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
  }
}

h1 {
  text-align: center;
}
</style>
