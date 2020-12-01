<!-- https://element.eleme.io/#/fr-FR/component/dialog#personalisation -->

<template>
  <el-dialog title="Ajout CSV" :visible.sync="dialogVisible">
    <el-form :model="form">
      <el-form-item>
        <el-select v-model="form.fileType" placeholder="Choisir le type de fichier">
          <el-option key="product" label="Produit" value="product"></el-option>
          <el-option key="ticket" label="Ticket" value="ticket"></el-option>
          <el-option key="ticketdetail" label="TicketDetail" value="ticketdetail"></el-option>
          <el-option key="category" label="Categorie" value="category"></el-option>
          <el-option key="loyaltycard" label="CarteFidelite" value="loyaltycard"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :file-list="form.fileList"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Déposer des fichiers ou <em>cliquez ici</em></div>
          <div class="el-upload__tip" slot="tip">fichiers csv</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Annuler</el-button>
      <el-button @click="dialogVisible = false" type="primary">Confirmer</el-button>
    </span>
  </el-dialog>
</template>

<script>
import axios from 'axios';
import { IP, PORT } from '../../../config.json';

export default {

  name: "CSV",
  methods: {
    submitFile() { // TODO
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
          document.location.reload();
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    openDialog: function() {
      this.dialogVisible = true;
    },
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        fileType: '',
        fileList: [],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box {
  margin-top: 50px;
  background-color: rgb(219, 219, 219);
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
