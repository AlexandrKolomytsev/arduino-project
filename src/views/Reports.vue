<template>
  <div class="demo">
    <h1>Демонстрация</h1>
    <v-switch class="switch" v-model="bulbOn" @change="toggleBulb" />
    <ChartAirTemperature />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ChartAirTemperature from "@/components/charts/ChartAirTemperature.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld, ChartAirTemperature
  },
  data() {
    return {
      bulbOn: null,
    };
  },
  mounted() {
    this.getCurrBulb();
    this.bulbOn = setInterval(() => {
      this.getCurrBulb()
    }, 1200)
  },
  methods: {
    toggleBulb() {
      axios
          .post("https://arduino-back-production-ae97.up.railway.app/bulb")
          //.post("http://localhost:3000/bulb")
          .then(response => {})
          .catch(error => {
            console.log(error);
          });
    },
    async getCurrBulb() {
      await axios
          .get("https://arduino-back-production-ae97.up.railway.app/bulb")
          //.get("http://localhost:3000/bulb")
          .then(response => {
            this.bulbOn = response.data.bulbOn;
            console.log(this.bulbOn, "bulbOn");
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
};
</script>

<style scoped lang="scss">
h1{
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
}
.switch {
  margin: 20px auto 0;
}
.demo {
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
}
</style>
