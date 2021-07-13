import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    SET_DRAWER(state, drawer) {
      state.drawer = drawer;
    },
  },
  actions: {
    handleDrawer({ commit }, drawer) {
      console.log("test", drawer);
      commit("SET_DRAWER", !drawer);
    },
  },
  getters: {
    getDrawer(state) {
      return state.drawer;
    },
  },
  modules: {},
});
