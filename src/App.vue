<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
    <Footer v-if="$store.state.isAuth || localAuth" />
  </v-app>
</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
  computed: {
    localAuth() {
      return localStorage.getItem('isAuth')
    }
  }
};
</script>
