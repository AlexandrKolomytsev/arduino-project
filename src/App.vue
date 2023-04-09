<template>
  <v-app>
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
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
};
</script>
