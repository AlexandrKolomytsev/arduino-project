<template>
  <div class="conditioning">
    <h1>Кондиционирование</h1>
    <v-switch
        v-model="windowOpen"
        :label="curTextSwitch"
    />
    <ChartAirTemperature />
  </div>
</template>

<script>
import ChartAirTemperature from "../components/charts/ChartAirTemperature";

export default {
  name: 'Conditioning',
  components: {
    ChartAirTemperature
  },

  data: () => ({
    windowOpen: false,
  }),
  computed: {
    curTextSwitch() {
      return this.windowOpen ? "Форточка открыта" : "Форточка закрыта"
    }
  }
};
</script>

<style scoped lang="scss">
.conditioning {
  margin: 20px 40px;
  position: relative;
}
h1 {
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 20px;
}
</style>
