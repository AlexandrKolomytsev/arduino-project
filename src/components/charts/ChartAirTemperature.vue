<template>
  <div>
    <v-card>
      <DxChart
          id="chart"
          :data-source="populationData"
          title="График температуры за весь день"
      >
        <DxArgumentAxis :tick-interval="10">
          <DxLabel format="decimal"/>
        </DxArgumentAxis>
        <DxSeries type="bar"/>
        <DxLegend :visible="false"/>
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
} from 'devextreme-vue/chart';
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
      populationData: [{
        arg: '01:00',
        val: 4,
      }, {
        arg: '02:00',
        val: 3,
      }, {
        arg: '03:00',
        val: 3,
      }, {
        arg: '04:00',
        val: -1,
      }, {
        arg: '05:00',
        val: -3,
      }, {
        arg: '06:00',
        val: 3,
      }, {
        arg: '07:00',
        val: 5,
      }, {
        arg: '08:00',
        val: 6,
      }, {
        arg: '09:00',
        val: 6,
      }, {
        arg: '10:00',
        val: 6,
      }, {
        arg: '11:00',
        val: 9,
      }, {
        arg: '12:00',
        val: 10,
      }, {
        arg: '13:00',
        val: 14,
      }, {
        arg: '14:00',
        val: 15,
      }, {
        arg: '15:00',
        val: 16,
      }, {
        arg: '16:00',
        val: 16,
      }, {
        arg: '17:00',
        val: 14,
      }, {
        arg: '18:00',
        val: 12,
      }, {
        arg: '19:00',
        val: 9,
      }, {
        arg: '20:00',
        val: 8,
      }, {
        arg: '21:00',
        val: 7,
      }, {
        arg: '22:00',
        val: 6,
      }, {
        arg: '23:00',
        val: 5,
      }, {
        arg: '24:00',
        val: 5,
      }, ],
    }
  },
}
</script>

<style scoped lang="scss">
#chart {
  height: 440px;
}
</style>
