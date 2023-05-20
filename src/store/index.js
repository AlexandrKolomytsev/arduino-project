import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    temperature: 0,
  },
  mutations: {
    setTemperature(state, element) {
      state.temperature = element;
    },
    setBulbOn(state, element) {
      state.bulbOn = element;
    },
  },

  getters: {
    getTemperature(state) {
      return state.temperature;
    },
  },
  modules: {},
});
