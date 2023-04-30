<template>
  <div class="heating">
    <h1>Отопление</h1>
    <template v-if="temp">
      <v-btn-toggle
        class="toggle-wrapper"
        v-model="text"
        :rounded="false"
        group
      >
        <v-btn value="minus">
          -
        </v-btn>
        <span class="curr_temp" value="center"> {{ temp }} °C </span>
        <v-btn value="plus">
          +
        </v-btn>
      </v-btn-toggle>
    </template>
    <ChartAirTemperature />
  </div>
</template>

<script>
import ChartAirTemperature from "../components/charts/ChartAirTemperature";
import { mapGetters } from "vuex";

export default {
  name: "Heating",
  components: {
    ChartAirTemperature,
  },
  computed: {
    ...mapGetters(["getTemperature"]),
    temp() {
      return this.getTemperature.val;
    },
  },
};
</script>

<style scoped lang="scss">
.heating {
  margin: 20px 40px;
  .toggle-wrapper {
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v-btn {
    font-size: 40px;
    color: #7c7fdc;
  }
  .curr_temp {
    font-size: 20px;
  }
}
</style>
