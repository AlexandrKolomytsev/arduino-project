<template>
  <v-container>
    <v-card>
      <v-card-title>
        Редактировать профиль пользователя
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="user.firstName" label="Имя"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="user.lastName" label="Фамилия"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="user.email" label="Email"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveProfile">Сохранить</v-btn>
        <v-btn color="error" @click="cancelEdit">Отменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
</script>
<script>
import axios from "axios";
const fs = require('fs');

export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
      usersMas: []
    };
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async saveProfile() {
      let idCurUser = this.$store.state.userInfo.UserId
      console.log(this.usersMas, 'this.usersMas')
      const foundUser = this.usersMas.find(user => user.UserId === idCurUser);
      console.log(foundUser, 'foundUser')
      foundUser.name = 'ВикаssssASFASF'
      console.log(this.usersMas, 'this.usersMas')
      await axios
          .post("https://arduino-back-production-ae97.up.railway.app/editUsers", {
            data: this.usersMas,
          })
          .then(function(response) {})
          .catch(function(error) {});
      // Perform API call or save logic here
      console.log('Profile saved:', this.user);
      console.log(this.usersMas,'userInfo')

    },
    async getUsers() {
      await axios.get('https://arduino-back-production-ae97.up.railway.app/getUsers')
          // https://arduino-back-production-ae97.up.railway.app/
          .then((response) => {
            console.log(response, 'response')
            this.usersMas = response.data.users
            console.log(this.usersMas, 'this.usersMas from get')
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    cancelEdit() {
      this.user.firstName = ''
      this.user.lastName = ''
      this.user.email = ''
    }
  }
};
</script>

<style scoped>

</style>
