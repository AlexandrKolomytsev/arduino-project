<template>
  <div class="conditioning">
    <h1>Кондиционирование</h1>
    <div class="conditioning__header">
      <v-switch v-model="windowOpen" :label="curTextSwitch" />
      <v-btn @click="configeHandler">
        Настроить
      </v-btn>
      <div v-if="isConstructorActive" class="conditioning__constructor">
        <div class="constructor__item">
          <span>От</span>
          <v-text-field
            v-model="value"
            label="От"
            type="number"
            outlined
            dense
          />
          <span>до</span>
          <v-text-field
            v-model="value"
            label="До"
            type="number"
            outlined
            dense
          />
          <span>°C</span>
        </div>
        <div class="constructor__item">
          <span>на </span>
          <v-text-field
            v-model="value"
            label="На"
            type="number"
            outlined
            dense
          />
          <span>минут</span>
        </div>
        <v-btn color="green" @click="applyHandler">
          Применить
        </v-btn>
      </div>
    </div>
    <ChartAirTemperature />
  </div>
</template>

<script>
import ChartAirTemperature from "../components/charts/ChartAirTemperature";

export default {
  name: "Conditioning",
  components: {
    ChartAirTemperature,
  },

  data: () => ({
    windowOpen: false,
    isConstructorActive: false,
  }),
  methods: {
    configeHandler() {
      this.isConstructorActive = true;
    },
    applyHandler() {
      this.isConstructorActive = false;
    },
  },
  computed: {
    curTextSwitch() {
      return this.windowOpen ? "Форточка открыта" : "Форточка закрыта";
    },
  },
};
</script>

<style lang="scss">
.conditioning {
  margin: 20px 40px;
  position: relative;
  .v-input {
    width: fit-content;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
  }
  &__constructor {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .v-input__control {
      width: 80px;
      margin: 0 12px;
    }
  }
}
.constructor__item {
  display: flex;
}

h1 {
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 20px;
}
</style>
