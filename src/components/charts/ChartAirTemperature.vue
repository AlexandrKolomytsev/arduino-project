<template>
  <div>
    <v-btn class="cur-temp--fixed">
      {{ curTemp }} °C
      <v-tooltip activator="parent" location="end"
      >Текущая температура</v-tooltip
      >
    </v-btn>
    <div class="cur-wetness--fixed-container">
      <v-btn class="cur-wetness--fixed">
        {{ curWetness }} %
        <v-tooltip activator="parent" location="end"
        >Текущая температура</v-tooltip
        >
      </v-btn>
    </div>
    <v-card>
      <DxChart
        class="chart"
        id="chart"
        :data-source="populationData2"
        title="График влажности за минуту"
      >
        <DxArgumentAxis :tick-interval="10">
          <DxLabel format="decimal" />
        </DxArgumentAxis>
        <DxSeries type="bar" />
        <DxLegend :visible="false" />
      </DxChart>
    </v-card>
  </div>
</template>

<script>
import DxChart, {
  DxArgumentAxis,
  DxLegend,
  DxLabel,
  DxSeries,
} from "devextreme-vue/chart";
import axios from "axios";
import store from "../../store";
export default {
  name: "ChartAirTemperature",
  components: {
    DxChart,
    DxArgumentAxis,
    DxLabel,
    DxLegend,
    DxSeries,
  },
  data() {
    return {
      populationData2: [],
      interval: "",
      masTempInSec: [],
      argCounter: 1,
      curWetness: 0,
      curTemp: 0,
    };
  },
  mounted() {
    this.interval = this.getTemperature()
    this.interval = setInterval(() => {
      this.getTemperature()
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    async getTemperature() {
      await axios
          .get("https://arduino-back-production-ae97.up.railway.app/", {
          //.get("http://localhost:3000/", {
            mode: "no-cors",
          })
          .then(response => {
            this.populationData2 = [];
            console.log(response.data.slice(-61));
            const fullArray = response.data.slice(-61);
            console.log(fullArray, 'fullArray')
            this.curWetness = fullArray[fullArray.length-1].dataWetness
            this.curTemp = fullArray[fullArray.length-1].dataTemp

            fullArray.forEach((obj, i) => {
              this.populationData2.push({ arg: i, val: Number(obj.dataWetness) });
            });
            console.log(this.populationData2);

            const lastTemperature = this.populationData2[
            this.populationData2.length - 1
                ];
            store.commit("setTemperature", lastTemperature);

          })
          .catch(function(error) {
            console.log(error);
          });
    }
  },
};
</script>

<style scoped lang="scss">
.cur-wetness--fixed-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 20px;
}
.cur-temp--fixed {
  position: fixed;
  top: 100px;
  right: 20px;
}
#chart {
  height: 440px;
}
</style>
