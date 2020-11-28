<template>
  <div id="app">
    <navbar />

    <turnover id="turnover" class="chart" tittle="Evolution du chiffre d’affaire" />
    <hr />
    <averageSpend
      id="averageSpend"
      class="chart"
      tittle="Prix moyen des tickets de caisse"
    />
    <hr />
    <turnoverByCategory
      id="turnoverByCategory"
      class="chart"
      tittle="Evolution du chiffre d’affaire par catégorie"
    />
    <hr />
    <averageSpendCustomer
      id="averageSpendCustomer"
      class="chart"
      tittle="Prix moyen des tickets de caisse par client"
    />
    <hr />
    <customerSpendingCategory
      id="customerSpendingCategory"
      class="chart"
      tittle="Dépense mensuelle par client par catégorie"
    />
    <hr />

    <ageCustomers id="ageCustomers" class="chart" tittle="Age des clients" />
    <hr />
    <cityCustomers
      id="cityCustomers"
      class="chart"
      tittle="Provenance des clients"
    />
    <hr />
    <ticketDays
      id="ticketDays"
      class="chart"
      tittle="Nombre de ticket par jours de la semaine par mois"
    />
    <hr />

    <csv id="CSV" />
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
};
</script>

<style>
</style>
