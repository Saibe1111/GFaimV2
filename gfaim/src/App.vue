<template>
  <div id="app">
    <navbar @open-csv-dialog="openCSVDialog" />
    
    <csv id="CSV" ref="csvDialog" />
    
    <turnover
      id="turnover"
      class="chart"
      title="Évolution du chiffre d’affaires"
    />
    <hr />
    <averageSpend
      id="averageSpend"
      class="chart"
      title="Prix moyen des tickets de caisse"
    />
    <hr />
    <turnoverByCategory
      id="turnoverByCategory"
      class="chart"
      title="Évolution du chiffre d’affaires par catégorie"
    />
    <hr />
    <averageSpendCustomer
      id="averageSpendCustomer"
      class="chart"
      title="Prix moyen des tickets de caisse par client"
    />
    <hr />
    <customerSpendingCategory
      id="customerSpendingCategory"
      class="chart"
      title="Dépense mensuelle par client par catégorie"
    />
    <hr />

    <ageCustomers
      id="ageCustomers"
      class="chart"
      title="Âge des clients"
    />
    <hr />
    <cityCustomers
      id="cityCustomers"
      class="chart"
      title="Provenance des clients"
    />
    <hr />
    <ticketDays
      id="ticketDays"
      class="chart"
      title="Nombre de tickets par jour de la semaine par mois"
    />
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";
import csv from "./components/Csv.vue";

//lot 1
import turnover from "./components/LOT1/Turnover.vue";
import averageSpend from "./components/LOT1/AverageSpend.vue";
import turnoverByCategory from "./components/LOT1/TurnoverByCategory.vue";

//lot 2
import averageSpendCustomer from "./components/LOT2/AverageSpendCustomer.vue";
import customerSpendingCategory from "./components/LOT2/CustomerSpendingCategory.vue";

//lot 3
import ageCustomers from "./components/LOT3/AgeCustomers.vue";
import cityCustomers from "./components/LOT3/CityCustomers.vue";
import ticketDays from "./components/LOT3/TicketDays.vue";

export default {
  name: "App",
  components: {
    navbar,
    csv,
    //lot 1
    turnover,
    averageSpend,
    turnoverByCategory,
    //lot 2
    averageSpendCustomer,
    customerSpendingCategory,
    //lot 3
    ageCustomers,
    cityCustomers,
    ticketDays,
  },
  methods: {
    openCSVDialog: function() {
      this.$refs.csvDialog.openDialog();
    }
  }
};
</script>

<style>
</style>
