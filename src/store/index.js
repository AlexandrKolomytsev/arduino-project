import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    temperature: 0,
    isAuth: false,
  },
  mutations: {
    setTemperature(state, element) {
      state.temperature = element;
    },
    setIsAuth(state, element) {
      state.isAuth = element;
    },
  },
  getters: {
    getTemperature(state) {
      return state.temperature;
    },
  },
  modules: {},
});
