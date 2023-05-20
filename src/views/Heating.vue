<template>
  <div class="heating">
    <h1>Отопление</h1>
    <!-- <template v-if="temp"> -->
    <template>
      <v-btn-toggle
        class="toggle-wrapper"
        v-model="text"
        :rounded="false"
        group
      >
        <span class="curr_temp" value="center"> {{ temp ?? 0 }} °C </span>
        <v-switch
          v-model="heatingOn"
          :label="curTextSwitch"
          @change="toggleHeating"
        />

        <div v-if="heatingOn">
          <v-btn value="minus">
            -
          </v-btn>
          <span class="curr_temp" value="center"> {{ 15 }} °C </span>

          <v-btn value="plus">
            +
          </v-btn>
        </div>
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
  data: () => ({
    heatingOn: false,
  }),
  methods: {
    toggleHeating() {
      this.heatingOn = !heatingOn;
    },
  },
  computed: {
    ...mapGetters(["getTemperature"]),
    temp() {
      return this.getTemperature.val;
    },
    curTextSwitch() {
      return this.heatingOn ? "Выключить обогрев" : "Включить обогрев";
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
    flex-direction: column;
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
