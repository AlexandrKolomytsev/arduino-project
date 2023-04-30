<template>
  <div>
    <v-btn class="cur-temp--fixed">
      {{ curTemp }} °C
      <v-tooltip activator="parent" location="end"
        >Текущая температура</v-tooltip
      >
    </v-btn>
    <v-card>
      <DxChart
        id="chart"
        :data-source="populationData2"
        title="График температуры за минуту"
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
      populationData: [
        {
          arg: "01:00",
          val: 4,
        },
        {
          arg: "02:00",
          val: 3,
        },
        {
          arg: "03:00",
          val: 3,
        },
        {
          arg: "04:00",
          val: -1,
        },
        {
          arg: "05:00",
          val: -3,
        },
        {
          arg: "06:00",
          val: 3,
        },
        {
          arg: "07:00",
          val: 5,
        },
        {
          arg: "08:00",
          val: 6,
        },
        {
          arg: "09:00",
          val: 6,
        },
        {
          arg: "10:00",
          val: 6,
        },
        {
          arg: "11:00",
          val: 9,
        },
        {
          arg: "12:00",
          val: 10,
        },
        {
          arg: "13:00",
          val: 14,
        },
        {
          arg: "14:00",
          val: 15,
        },
        {
          arg: "15:00",
          val: 16,
        },
        {
          arg: "16:00",
          val: 16,
        },
        {
          arg: "17:00",
          val: 14,
        },
        {
          arg: "18:00",
          val: 12,
        },
        {
          arg: "19:00",
          val: 9,
        },
        {
          arg: "20:00",
          val: 8,
        },
        {
          arg: "21:00",
          val: 7,
        },
        {
          arg: "22:00",
          val: 6,
        },
        {
          arg: "23:00",
          val: 5,
        },
        {
          arg: "24:00",
          val: 5,
        },
      ],
      populationData2: [],
      interval: "",
      masTempInSec: [],
      argCounter: 1,
      curTemp: 0,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      axios
        .get("https://arduino-back-production.up.railway.app/", {
          mode: "no-cors",
        })
        .then(response => {
          this.populationData2 = [];
          console.log(response.data.slice(-60));
          const fullArray = response.data.slice(-60);

          fullArray.forEach((obj, i) => {
            this.populationData2.push({ arg: i, val: Number(obj.dataTemp) });
          });
          console.log(this.populationData2);

          const lastTemperature = this.populationData2[
            this.populationData2.length - 1
          ];
          store.commit("setTemperature", lastTemperature);

          // if (response.data > 10 && response.data < 50) {
          //   this.curTemp = response.data
          //   this.masTempInSec.push(response.data)
          //   if (this.populationData2.length <= 59) {
          //     this.populationData2.push({ arg: this.argCounter++, val: response.data });
          //   } else {
          //     this.populationData2.shift();
          //     this.populationData2.push({ arg: this.argCounter++, val: response.data });
          //     this.populationData2.forEach((item, count) => {
          //       item.arg--;
          //       if (count === 59) {
          //         this.argCounter--;
          //       }
          //     });
          //   }
          // }
        })
        .catch(function(error) {
          console.log(error);
        });
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.cur-temp--fixed {
  position: absolute;
  top: 0;
  right: 0;
}
#chart {
  height: 440px;
}
</style>
