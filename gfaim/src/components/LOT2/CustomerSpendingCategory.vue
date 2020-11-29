<template>
  <div id="watch-example">
    <h1>{{ title }}</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BIO" name="bio">
        <h3>BIO</h3>
        <bio />
      </el-tab-pane>
      <el-tab-pane label="VEGAN" name="vegan">
        <h3>VEGAN</h3>
        <vegan />
      </el-tab-pane>
      <el-tab-pane label="CASHER" name="casher">
        <h3>CASHER</h3>
        <casher />
      </el-tab-pane>
      <el-tab-pane label="HALAL" name="halal">
        <h3>HALAL</h3>
        <halal />
      </el-tab-pane>
    </el-tabs>
        
        
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
    title: String,
  },
  components: {
    bio,
    vegan,
    casher,
    halal
  },
  data() {
    return {
      activeName: 'bio'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
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
