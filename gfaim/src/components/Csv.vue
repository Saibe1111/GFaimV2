<template>
  <div class="box">
    
    <h1>Ajout CSV</h1>

    <input
      class=""
      type="file"
      id="file"
      ref="file"
      accept=".csv"
      v-on:change="handleFileUpload()"
    />
   
    
    <br />
    <select id="monselect">
      <option value="">--Choisir le type de fichier--</option>
      <option value="product">Produit</option>
      <option value="ticket">Ticket</option>
      <option value="ticketdetail">TicketDetail</option>
      <option value="category">Categorie</option>
      <option value="loyaltycard">CarteFidelite</option>
    </select>
    <br>

    <button  v-on:click="submitFile()">Envoyer</button>
  </div>
</template>

<script>
const axios = require("axios");

const {IP, PORT} = require('../assets/config.json');

export default {

  name: "CSV",
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      const valueType = document.getElementById("monselect").value;
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post(`http://${IP.api}:${PORT.api}/${valueType}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
        document.location.reload();
    },
  },
  data() {
    return {
      file: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box {
  margin-top: 50px;
  background-color: grey;
  border-color: black;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 200px;
}
@media screen and (max-width: 500px) {
 .box {
  margin-top: 50px;
  background-color: grey;
  border-color: black;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-radius: 10px;
}
}

.align{
  text-align: left;
}

.in {
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}

button{
  margin-top: 25px;
}
input{
  margin-bottom: 25px;
}
h1{
  margin-bottom: 25px;
}

</style>
