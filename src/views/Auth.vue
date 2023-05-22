<template>
  <div class="wrapper">
    <v-card
        class="mx-auto"
        width="380"
    >
      <v-card-text>
        Авторизация
      </v-card-text>
      <v-window>
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
                v-model="login"
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Пароль"
            ></v-text-field>
            <span
                v-if="error"
                class="text-caption red--text text--darken-1"
            >
              Неправильно введен логин или пароль
            </span>
            <span
                v-if="!error"
                class="text-caption grey--text text--darken-1"
            >
              Для использования сервиса необходимо авторизоваться
            </span>
          </v-card-text>
          <v-card-text>
            <v-btn
                color="primary"
                depressed
                @click="authUsers"
            >
              Войти
            </v-btn>
          </v-card-text>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script>
import jsonData from '../auth.json';
import axios from "axios";

export default {
  name: "Auth",
  data() {
    return {
      login: '',
      password: '',
      usersMas: '',
      error: false,
    };
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    authUsers() {
      console.log(this.usersMas, 'this.usersMas')
      for (const key in this.usersMas.users) {
        console.log(this.usersMas.users[key], 'this.usersMas.users[key]')
        if (this.usersMas.users[key].login === this.login && this.usersMas.users[key].password === this.password) {
          //Чел авторизировался
          console.log('авторизировался')
          this.$store.commit('setIsAuth', true)
          this.$store.commit('setUserInfo', this.usersMas.users[key])
          this.$router.push('/')
        } else {
          this.error = true
        }
      }
    },
    async getUsers() {
      // await axios.get('https://arduino-back-production.up.railway.app/getUsers')
      //     .then((response) => {
      //       console.log(response, 'response')
      //       this.usersMas = response.data
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      this.usersMas = jsonData
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
