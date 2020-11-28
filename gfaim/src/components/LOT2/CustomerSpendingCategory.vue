<template>
  <div id="watch-example">
    <h1>{{ tittle }}</h1>
    <h3>BIO</h3>
    <bio />
    <h3>VEGAN</h3>
    <vegan />
    <h3>CASHER</h3>
    <casher />
    <h3>HALAL</h3>
    <halal />
  </div>
</template>

<script>

import bio from './CustomerSpendingCategorys/bio.vue';
import vegan from './CustomerSpendingCategorys/vegan.vue';
import casher from './CustomerSpendingCategorys/casher.vue';
import halal from './CustomerSpendingCategorys/halal.vue';

export default {
  name: "Chart",
  props: {
    tittle: String,
  },
  components: {
    bio,
    vegan,
    casher,
    halal
  },
};
</script>

<style>
h1 {
  text-align: center;
}

h3 {
  text-align: center;
}
</style>
