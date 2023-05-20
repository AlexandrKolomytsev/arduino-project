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
                @click="getUsers"
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
export default {
  name: "Auth",
  data() {
    return {
      login: '',
      password: '',
      usersMas: jsonData,
      error: false,
    };
  },
  methods: {
    getUsers() {
      for (const key in this.usersMas.users) {
        for (const loginUser in this.usersMas.users[key]) {
          console.log(this.usersMas.users[key][loginUser], 'this.usersMas.users')
          if (loginUser === this.login && this.usersMas.users[key][loginUser] === this.password) {
            //Чел авторизировался
            console.log('авторизировался')
            this.$store.commit('setIsAuth', true)
            this.$router.push('/')
          } else {
            this.error = true
          }
        }
      }
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
