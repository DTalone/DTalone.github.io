import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    isHome: true,
  },
  mutations: {
    SET_DRAWER(state, drawer) {
      state.drawer = drawer;
    },
    SET_HOME(state, isHome) {
      state.isHome = isHome;
    },
  },
  actions: {
    handleDrawer({ commit }, drawer) {
      commit("SET_DRAWER", !drawer);
    },
    handleHome({ commit }, isHome) {
      console.log("handle HOme", isHome);
      commit("SET_HOME", isHome);
    },
  },
  getters: {
    getDrawer(state) {
      return state.drawer;
    },
    getIsHome(state) {
      return state.isHome;
    },
  },
  modules: {},
});
