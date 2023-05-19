import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    temperature: 0,
    // bulbOn: null,
  },
  mutations: {
    setTemperature(state, element) {
      state.temperature = element;
    },
    setBulbOn(state, element) {
      state.bulbOn = element;
    },
  },
  // actions: {
  //   fetchBulbOn({ commit }) {
  //     return axios
  //       .get("http://localhost:3000/bulb")
  //       .then(response => {
  //         commit("setBulbOn", response.data.bulbOn);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   },
  // },
  getters: {
    getTemperature(state) {
      return state.temperature;
    },
  },
  modules: {},
});
// store.dispatch("bulb/fetchBulbOn"); // Выполняем GET-запрос на сервер при создании хранилища
