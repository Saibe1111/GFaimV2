<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Gfaim</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Accueil<span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Graphiques
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#turnover">Évolution du chiffre d’affaires</a>
            <a class="dropdown-item" href="#averageSpend">Prix moyen des tickets de caisse</a>
            <a class="dropdown-item" href="#turnoverByCategory">Évolution du chiffre d’affaire par catégorie</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#averageSpendCustomer">Prix moyen des tickets de caisse par client</a>
            <a class="dropdown-item" href="#customerSpendingCategory">Dépense mensuelle par client par catégorie</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#ageCustomers">Âge des clients</a>
            <a class="dropdown-item" href="#cityCustomers">Provenance des clients</a>
            <a class="dropdown-item" href="#ticketDays">Nombre de ticket par jours de la semaine par mois</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" for="file" href="#CSV">Ajout fichier</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
  return {
    charts: [
      { ref:"",
      title:"" }
    ]
  };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
