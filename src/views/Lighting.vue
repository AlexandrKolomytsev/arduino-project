<template>
  <div class="Lighting">
    <h1>Освещение</h1>
    <div class="buttons-wrapper">
      <h2 class="buttons-description" align-self="center">
        Состояние света на текущий момент
      </h2>

      <v-btn-toggle
        class="toggle-wrapper"
        v-model="text"
        :rounded="false"
        color="deep-purple-accent-3"
        group
      >
        <v-switch v-model="bulbOn" @change="toggleBulb" />

        <div class="type-light">
          <v-btn class="type" value="left">
            Фитосвет
          </v-btn>

          <v-btn class="type" value="center">
            Дневной свет
          </v-btn>

          <v-btn class="type" value="right">
            Свет выключен
          </v-btn>
        </div>
      </v-btn-toggle>
    </div>

    <div class="cur-light-time">
      <div>
        <v-card class="mx-auto" color="green" width="150px">
          <v-card-text class="text-time">
            07:00
          </v-card-text>
        </v-card>
        <v-card-text>
          Восход
        </v-card-text>
      </div>

      <div>
        <v-card class="mx-auto" color="blue" width="150px">
          <v-card-text class="text-time">
            21:00
          </v-card-text>
        </v-card>
        <v-card-text>
          Закат
        </v-card-text>
      </div>
    </div>

    <ChartAirTemperature />

    <v-row>
      <v-col>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="primary">
            <template v-slot:day="{ past, date }">
              <v-row class="fill-height">
                <template v-if="past && tracked[date]">
                  <v-sheet
                    v-for="(percent, i) in tracked[date]"
                    :key="i"
                    :title="category[i]"
                    :color="colors[i]"
                    :width="`${percent}%`"
                    height="100%"
                    tile
                  ></v-sheet>
                </template>
              </v-row>
            </template>
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import ChartAirTemperature from "../components/charts/ChartAirTemperature";

export default {
  components: {
    ChartAirTemperature,
  },
  data: () => ({
    today: "2019-01-10",
    tracked: {
      "2019-01-09": [23, 45, 10],
      "2019-01-08": [10],
      "2019-01-07": [0, 78, 5],
      "2019-01-06": [0, 0, 50],
      "2019-01-05": [0, 10, 23],
      "2019-01-04": [2, 90],
      "2019-01-03": [10, 32],
      "2019-01-02": [80, 10, 10],
      "2019-01-01": [20, 25, 10],
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development", "Meetings", "Slacking"],
    text: "center",
    icon: "justify",
    toggle_none: null,
    toggle_one: 0,
    toggle_exclusive: 2,
    toggle_multiple: [0, 1, 2],
    bulbOn: null,
  }),
  mounted() {
    this.getCurrBulb();
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
    getCurrBulb() {
      axios
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
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
}
h2{
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
}
.Lighting {
  margin: 20px 40px;
  .cur-light-time {
    display: flex;
    gap: 20px;
    margin: 0 auto 20px;
    justify-content: center;
    .mx-auto {
      margin: 0 !important;
    }
  }
  .v-card__text {
    text-align: center;
    font-size: 18px;
  }
  .text-time {
    font-size: 25px;
    text-align: center;
  }
  .buttons-wrapper {
    margin: 0 auto;
    .buttons-description {
      display: flex;
      justify-content: center;
    }
    .type-light {
      display: flex;
      gap: 10px;
      @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  }
    }
    .toggle-wrapper {
      margin: 30px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

</style>
