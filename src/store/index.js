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
  },
  actions: {},
  getters: {
    getTemperature(state) {
      return state.temperature;
    },
  },
  modules: {},
});
